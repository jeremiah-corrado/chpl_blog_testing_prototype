
for (const region of document.getElementsByClassName('goodSelectionRegion')) {
    const name = region.id.split("reg_")[1];
    const selector = document.getElementById(`sel_${name}`);

    let i = 0;
    for (const opt of region.children) {
        if (i == 0) {
            opt.style.display = "inline-block";
        }

        const html_opt = document.createElement('option');
        html_opt.text = opt.id.split(`${name}_`)[1];
        html_opt.value = opt.id;
        selector.add(html_opt);

        i += 1;
    }

    selector.addEventListener('change', (e) => {
        for (const opt of document.getElementsByClassName(`opt_${name}`)) {
            opt.style.display = "none";
        }
        document.getElementById(e.target.value).style.display = "inline-block";
    })
}


// const selectors = document.getElementsByClassName('goodSelector');
// console.log(selectors);
// for (const gs of selectors) {
//     console.log(gs);
//     console.log(gs.children);
//     console.log(gs.innerHTML);
// }

// const reg = document.getElementsByClassName('goodSelectionRegion');
// console.log(reg);reg

// for (const r of reg) {
//     var first = true;
//     var count = 0;
//     for (var c of r.children) {
//         if (first) {
//             first = false;
//             c.style.display = 'inline-block';
//         } else {
//             c.style.display = 'none';
//         }
//     }

//     console.log(r);
//     console.log(r.children);
//     console.log(r.innerHTML);
// }
