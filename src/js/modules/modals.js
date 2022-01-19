const modals =()=> {
    function bindModal(triggerSelector, modalSelector, closeBtnSelector, closeClickOverlay =true, ){
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeBtn = document.querySelector(closeBtnSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        const widthInput = document.querySelector('#width');
        const heightInput = document.querySelector('#height');
        const coldCheckbox = document.querySelector('[data-cold]');
        const warmCheckbox = document.querySelector('[data-warm]');
      

    
        let warning = document.createElement('div');
        warning.classList.add('status');
        warning.textContent = 'please fill width and height';
        let isFilled;

       
// if (trigger.classList.contains('popup_calc_button') && (widthInput.value == '' || heightInput.value =='')) {
//     isFilled = false;
//     console.log('ura');
//     modal.appendChild(warning);
// }

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                isFilled =true;
               
               if (item.classList.contains('popup_calc_button')&& (widthInput.value == '' || heightInput.value =='')) {
                isFilled = false;  
                     warning.classList.add('status');
                     warning.textContent = 'please fill width and height';
                    item.after(warning);
              }
           

              if (item.classList.contains('popup_calc_profile_button') && (!warmCheckbox.checked &&
              !coldCheckbox.checked )) {
                isFilled = false;  
                     warning.classList.add('status');
                     warning.textContent = 'please fill warm and cold';
                    item.after(warning);
              }
                 
              
               if(isFilled) {
                 item.remove(warning);
                windows.forEach(item =>{
                    item.style.display ='none';
                });  
                showModal();}
        
                
            });
            
            });
     
    

        closeBtn.addEventListener('click',()=>{
            windows.forEach(item =>{
                item.style.display ='none';
            });
            closeModal();
                
            });
        modal.addEventListener('click',(e) => {
            if (e.target === modal &&  closeClickOverlay) {
                closeModal();
            }
        });


 
function showModal() {
   
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
} 
if( isFilled) {
windows.forEach(item =>{
    item.style.display ='none';
});
}
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow= "";
    document.body.style.marginRight = `0px`;
}
}

function showModalByTime(selector, time) {
    setTimeout(() => {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
    }, time);
}

function calcScroll () {
    let div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.height = "50px";
    div.style.overflow = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth-div.clientWidth; //повна ширина - клієнтська ширина без прокрутки
    div.remove();
    return scrollWidth;
} 
            
// showModalByTime('.popup',60000); 


bindModal('.header_btn','.popup_engineer','.popup_engineer .popup_close');
bindModal('.phone_link','.popup','.popup .popup_close');
bindModal('.popup_calc_btn','.popup_calc','.popup_calc_close');
bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close',false);
bindModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close', false);
};

export default modals;