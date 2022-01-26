var newArr = [
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "X" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "O" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "X" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "O" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "X" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "O" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "X" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "O" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "X" },
    { msg: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, neque.", msg_sym: "O" },

];

function chat(msg, msg_sym) {
    let scrn = document.querySelector(".chat-screen");
    var time = new Date();  
    var jikan = time.toLocaleTimeString();
    // console.log(time.toTimeString());
    var mySide = document.createElement("div");
    var myMsg = document.createElement("div");
    var nameLabel = document.createElement("label");
    var hora = document.createElement("span");

    var text = msg;
    if (msg_sym == "X") {
        mySide.classList.add("my-msg");
        nameLabel.innerHTML = "You ";
    }
    else {
        nameLabel.innerHTML = "Lorem";
        mySide.classList.add("oth-msg");
    }
    myMsg.innerHTML = text;
    mySide.appendChild(nameLabel);
    mySide.appendChild(myMsg);
    hora.innerHTML = jikan;
    mySide.appendChild(hora);
    scrn.appendChild(mySide);
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
}

for (const i of newArr) {
    chat(i.msg, i.msg_sym);
}