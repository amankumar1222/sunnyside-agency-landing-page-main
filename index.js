
var menu = document.getElementById('menu')
var menu1 = document.getElementById('menu1')

menu.addEventListener('click', ()=>{
    let navlist = document.getElementById('list')
    navlist.style.display = "flex"; 
    menu.style.display = "none"   
    menu1.style.display = "block"   
})
menu1.addEventListener('click', ()=>{
    let navlist = document.getElementById('list')
    navlist.style.display = "none"; 
    menu.style.display = "block"   
    menu1.style.display = "none"    
})





