"use strict"

function getTime() {
    const date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();


    if (hrs >= 12) {
        document.getElementById("am_pm").innerHTML = "PM";
    } else {
        document.getElementById("am_pm").innerHTML = "AM";
    }


    if (hrs > 12) {
        hrs = hrs - 12;
    }



    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("sec").innerHTML = sec;

}
setInterval(getTime, 10);