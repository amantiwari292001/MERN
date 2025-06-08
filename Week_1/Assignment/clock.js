function clock() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
}
clock();
setInterval(clock, 1000);