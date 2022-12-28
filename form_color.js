
// capturar

let select = document.getElementById("select_texto")

// escuchar 
// .addEventListener

select.addEventListener("change", function(){
    // reaccionar
    let button = document.getElementById("button_color")
    button.style = `color:${select.value};`
})
