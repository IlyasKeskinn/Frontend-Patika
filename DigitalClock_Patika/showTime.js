function showTime() {

    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let second = now.getSeconds();


    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    second = (second < 10) ? "0" + second : second;

    let time = `${hour} : ${min} : ${second}`

    document.querySelector(".time").innerText = time;
    document.querySelector(".time").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();