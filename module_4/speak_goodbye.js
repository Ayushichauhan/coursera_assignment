(function(window) {
    var goodbye_speaker = new Object();
    var word = "GOODBYE";
    goodbye_speaker.speak = function speak(name) {
        console.log(word + " " + name);
    };
    window.goodbye_speaker = goodbye_speaker;
})(window);