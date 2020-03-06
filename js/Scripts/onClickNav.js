function swipeColorIcon(nav_btn, first,second){
    nav_btn.firstElementChild.src =nav_btn.firstElementChild.src.replace(first,second)

}

function open(id){
    document.getElementById(id).classList.replace('is-closed','is-open')
}
function close(){
   document.querySelector('.is-open').classList.replace('is-open','is-closed')
}
const navbarBtns = document.querySelectorAll('.navbar-btn')
navbarBtns.forEach((element,i)=>{
    element.onclick=()=>{
        if ( !document.querySelector('.is-open').id.includes(element.id.split('-')[0])) {
            close()
            setTimeout(()=> open(element.id.split('-')[0]),1000)
        }
        navbarBtns.forEach((elmt,index)=>{
            if (index ===i) {
                elmt.classList.replace('is-not-clicked','is-clicked')
                swipeColorIcon(elmt,'white','pink')
            } else {
                if (elmt.className.includes('is-clicked')) {
                    elmt.classList.replace('is-clicked','is-not-clicked')
                    swipeColorIcon(elmt,'pink','white')
                }
            }
        })
    }
})