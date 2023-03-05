const dropdownClass = document.getElementsByClassName('dropdown-menu') 
const dropdownQuery = document.querySelectorAll('.dropdown-menu')

document.addEventListener('click', e => {

    if (e.target.closest('.dropdown') === null) {
      for(let i = 0; i< dropdownClass.length; i++){
        dropdownClass[i].classList.remove('dropdown-show')
      }
    }

    if (e.target.matches('button.dropbtn, button.dropbtn i, a.dropbtn, a.dropbtn i')) {
        e.target.closest('.dropdown').querySelector('.dropdown-menu').classList.toggle('dropdown-show')
    }

    dropdownQuery.forEach( el => {
        if (e.target.matches('button.dropbtn, button.dropbtn i, a.dropbtn, a.dropbtn i')) {
            if (el !== e.target.closest('.dropdown').querySelector('.dropdown-menu')) {
              el.classList.remove('dropdown-show')
            }
        }   
    });

})
 