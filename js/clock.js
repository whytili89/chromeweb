const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0") ;
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //date.getHours()에는 padStart;를 쓸수없어. 숫자기 때문에 그래서 string으로 감싸줘.
    clock.innerText  = `${hours}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock, 1000); 