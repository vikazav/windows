const timer = (id, deadline) => {
// const deadline = '2022-01-30';

function timeleft(endtime) {
let difference = Date.parse(endtime) - Date.parse(new Date());
let days = Math.floor(difference/(1000*60*60*24));
let hours = Math.floor((difference/(1000*60*60))%24);
let min = Math.floor((difference/(1000*60))%60);
let sec = Math.floor((difference/1000)%60);

return {
 'total':difference,
 'days':days,
 'hours':hours,
 'minutes':min,
 'seconds':sec
};

}
function getZero(num) {
    if (num <10 ) {
        return `0${num}`;
    } else {
        return num;
    }
}
    

function setClock(selector, endtime) {
            
        const timer = document.querySelector(selector),
         dd = timer.querySelector('#days'),
            hh = timer.querySelector('#hours'),
            mm = timer.querySelector('#minutes'),
            ss = timer.querySelector('#seconds'),
            timeInterval =  setInterval(updateClock, 1000);
            updateClock();

        function updateClock(){
            const time = timeleft(endtime);
            dd.innerHTML = getZero(time.days);
            hh.innerHTML = getZero(time.hours);
            mm.innerHTML = getZero(time.minutes);
            ss.innerHTML = getZero(time.seconds);
            if (time.total <0) {
                clearInterval(timeInterval);
                dd.innerHTML = '00';
                hh.innerHTML = '00';
                mm.innerHTML = '00';
                ss.innerHTML = '00';
        }
        }
}
setClock(id, deadline);
};

export default timer;