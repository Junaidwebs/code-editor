let run = ()=>{
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let iframe = document.getElementById("iframe")


    if (iframe) {
        iframe.srcdoc = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}<\/script>
            </body>
            </html>
        `;}

}