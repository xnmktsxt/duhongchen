function changeNotePosition() {
    var repeat = 4;
    var defaultRight = 98;
    var note = document.getElementById("note");

    var threeTimes = setInterval(function () {
        if (repeat == 0) {
            clearInterval(threeTimes);
            defaultRight -= 62;
        } else {
            note.style.right = defaultRight + "px";
            defaultRight += 62;
            --repeat;
        }
        alert("helloworld");
    }, 6000);

    setTimeout(function () {
        note.style.right = defaultRight + "px";
    }, 5000);
}