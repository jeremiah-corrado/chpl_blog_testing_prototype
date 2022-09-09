const fs = require('fs');
const path = require('path');
const readline = require('readline');
const stream = require('stream');

async function* fetchChplFilesFromRepo(subdir = '', owner = 'chapel-lang', branch = 'main') {
    // collect directory contents from the Repo
    const response = await fetch(
        `https://api.github.com/repos/${owner}/chapel/contents/test/blog-src${subdir}?` + new URLSearchParams({
            ref: branch
        }),
        { method: 'GET' }
    ).catch(err => console.log("Unable to fetch files: ", err));
    const dir_contents = await response.json();

    // recurse on directories
    for (let i = 0; i < dir_contents.length; i++) {
        if (dir_contents[i].type == 'dir') {
            yield * fetchChplFilesFromRepo(`${subdir}/${dir_contents[i].name}`, owner, branch);
        }
    }

    // select files to download
    const to_download = dir_contents.map(obj => {
        const ext = path.parse(obj.name).ext;
        return [obj, ext.substring(1)];
    }).filter(([_, ext]) => {
        return ext == 'chpl' || ext == 'good';
    });

    // asynchronously yield [full filename, extension, path, download-response]
    for (let i = 0; i < to_download.length; i++) {
        yield [
            to_download[i][0].name,
            to_download[i][1],
            subdir,
            fetch(to_download[i][0].download_url)
        ];
    }
}

function makeOutputDir(fileName, subDir) {
    const dir_name = `./static/${subDir}/${path.parse(fileName).name}`;
    if (!fs.existsSync(dir_name)) { fs.mkdirSync(dir_name, { recursive: true }); }
    return dir_name;
}

async function writeFileChunks(startingSubDir = '', owner = 'chapel-lang', branch = 'main') {
    console.log(`Collecting '.chpl' and '.good' files from "github.com/${owner}/chapel${(branch == 'main' ? '/' : '/tree/' + branch + '/')}test/blog-src/${startingSubDir}" ...`);

    for await (const [file_name, ext, subdir, fileDownloadResponse] of fetchChplFilesFromRepo(startingSubDir, owner, branch)) {
        // setup output directory
        const dir_name = makeOutputDir(file_name, subdir);

        // setup a line-by-line readable stream from the download-read-stream
        const fileReadLines = readline.createInterface({
            input: stream.Readable.fromWeb((await fileDownloadResponse).body),
            crlfDelay: Infinity //accept any line ending fmt
        });

        // setup a writeStream for individual file chunks
        let chunkIndex = -1;
        let chunk_file_writer = fs.createWriteStream('/dev/null');

        // setup a write stream for the full file
        const full_file_writer = fs.createWriteStream(`${dir_name}/full.${ext}`);

        // read lines and write to file output streams
        //  go to the next file/chunk on lines containing '__BREAK__'
        for await (const line of fileReadLines) {
            if (line.includes('__BREAK__') || chunkIndex == -1) {
                chunk_file_writer.close();
                chunkIndex += 1;
                chunk_file_writer = fs.createWriteStream(`${dir_name}/chunk_${chunkIndex}.${ext}`);

                if (chunkIndex == 0) {
                    chunk_file_writer.write(line + '\n');
                    full_file_writer.write(line + '\n');
                }
            } else {
                chunk_file_writer.write(line + '\n');
                full_file_writer.write(line + '\n');
            }
        }
        console.log(`Collected: ${subdir}/${file_name}`,);
    }
}

const args = process.argv.slice(2);
const subdir = args[args.indexOf("--subdir") == -1 ? -1 : args.indexOf("--subdir") + 1];
const owner = args[args.indexOf("--owner") == -1 ? -1 : args.indexOf("--owner") + 1];
const branch = args[args.indexOf("--branch") == -1 ? -1 : args.indexOf("--branch") + 1];

writeFileChunks(subdir, owner, branch).catch(err => console.log(err));
