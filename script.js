let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})
