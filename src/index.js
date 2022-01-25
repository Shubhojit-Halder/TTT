var newArr = [
    { msg: "Aryadeep is a guy with no talents trying to fit in amongst talented people", msg_sym: "X" },
    { msg: "Aryadeep is a dumbass", msg_sym: "O" },
    { msg: "Aryadeep is worthless", msg_sym: "X" },
    { msg: "Aryadeep just wants to have his own set of skills", msg_sym: "O" },
    { msg: "Aryadeep will never be able to achieve his goals", msg_sym: "X" },
    { msg: "People look at him as if he's just a loser", msg_sym: "O" },
    { msg: "Few people pity him", msg_sym: "X" },
    { msg: "People don't value him and never will", msg_sym: "O" },
    { msg: "Some people find it amusing when he fails", msg_sym: "X" },
    { msg: "Aryadeep in weak", msg_sym: "O" },

];

function chat(msg, msg_sym) {
    let scrn = document.querySelector(".chat-screen");
    var time = new Date();
    console.log(time.toTimeString());
    var jikan = time.toLocaleTimeString();
    var mySide = document.createElement("div");
    var myMsg = document.createElement("div");
    const nameLabel = document.createElement("label");
    var text = msg;
    if (msg_sym == "X") {
        mySide.classList.add("my-msg");
        nameLabel.innerHTML = "You ";
    }
    else {
        nameLabel.innerHTML = "Some other skilled guy";
        mySide.classList.add("oth-msg");
    }
    myMsg.innerHTML = text;
    mySide.appendChild(nameLabel);
    mySide.appendChild(myMsg);
    // var now = new Date();
    // var sec = now.getSeconds();
    // sec = (sec < 10) ? `0${sec}` : sec;
    // var min = now.getMinutes();
    // min = (min < 10) ? `0${min}` : min;
    // var hrs = now.getHours();
    // var meridian = (hrs > 12) ? "pm" : "am";
    // hrs = (hrs < 10) ? `0${hrs}` : hrs;
    // hrs = (hrs > 12) ? hrs - 12 : hrs;
    // hora.innerHTML = `${hrs}:${min} ${meridian}`;
    var hora = document.createElement("span");
    hora.innerHTML = jikan;
    mySide.appendChild(hora);
    scrn.appendChild(mySide);
}

for (const i of newArr) {
    chat(i.msg, i.msg_sym);
}