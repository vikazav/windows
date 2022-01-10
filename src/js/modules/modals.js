const modals =()=> {
    function bindModal(triggerSElector, modalSelector, closeBtnSelector, closeClickOverlay =true){
        const trigger = document.querySelectorAll(triggerSElector),
            modal = document.querySelector(modalSelector),
            closeBtn = document.querySelector(closeBtnSelector),
            windows = document.querySelectorAll('[data-modal]');
            

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item =>{
                    item.style.display ='none';
                });

                showModal();
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
} 
windows.forEach(item =>{
    item.style.display ='none';
});
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow= "";
}
        
}

function showModalByTime(selector, time) {
    setTimeout(() => {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
    }, time);
       
    
}
            
// showModalByTime('.popup',60000); 


bindModal('.header_btn','.popup_engineer','.popup_engineer .popup_close');
bindModal('.phone_link','.popup','.popup .popup_close');
bindModal('.popup_calc_btn','.popup_calc','.popup_calc_close');
bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close',false);

bindModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close', false);


};

export default modals;