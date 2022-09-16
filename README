
## starting:

- Run `start-dev-server.bash` (you'll need to have node installed)
- This will collect/process source files and start the hugo dev server

## file collection:
- The .collectBlogCode script collects all `.chpl` and `.good` files in [this](https://github.com/jeremiah-corrado/chapel/tree/blog_src_test/test/blog-src) directory, and processes them into chunks, storing the results in `./static/blog-src`
- The directories in `./static/blog-src` will have the same names as the `.md` files for posts. This is how a post knows which source files to pull in. (probably an annoying limitation, but that's how it works currently)
- Within each `static/blog-src/{blog-name-folder}/` directory, there is a folder generated from each of the relevant `.chpl` files.
    - this contains files for individual src "chunks" and for the entire scripts

## source-shortcodes:

`.chpl` and `.good` files are pulled into posts and highlighted with the `chplChunk` and `goodChunk` shortcodes respectively. They uses the following syntax:
```
{{< chplChunk file="{src-file-name}" chunk="{chunk-idx}" >}}
{{< chplChunk file="{good-file-name}" chunk="{chunk-idx}" >}}
```
The `chunk` parameter can be removed to load the entire file (with the `__BREAK__` markers stripped out)


A list of good files can be created by nesting `goodOption` shortcode calls within a `goodMenu` call:
```
{{< goodMenu name="list_1" >}}
    {{% goodOption chunk="{idx}" file="{file-name}" cnfg="1-1" txt="{ description text }" %}}
    {{% goodOption chunk="{idx}" file="{file-name}" cnfg="1-2" txt="{ description text }" %}}
    {{% goodOption chunk="{idx}" file="{file-name}" cnfg="2-1" txt="{ description text }" %}}
    {{% goodOption chunk="{idx}" file="{file-name}" cnfg="2-2" txt="{ description text }" %}}
{{< /goodMenu >}}
```
