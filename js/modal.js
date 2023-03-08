let getModal = document.querySelectorAll('#modal'); 
 
document.querySelectorAll('.modal-pointer').forEach(item => {
  item.onclick = () => {
    getModal.forEach(view =>{ 
            let modalTarget = item.getAttribute('data-modal-target');
            let modalName = view.getAttribute('data-modal-name')

            if(modalTarget == modalName){        
                view.style.display = 'flex'; 
            }
        })
    }
}) 


getModal.forEach(close =>{
    close.querySelector('.modal-content .close-btn').onclick = () =>{
       setTimeout(() => { close.style.display = 'none'; }, 100);
    };    

    close.onclick = (e) =>{
        if(e.target.id == "modal"){
            close.style.display = 'none';  
        }
    };
 
});
