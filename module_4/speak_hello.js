(function(window) {
    var hello_speaker = new Object();
    var word = "HELLO";
    hello_speaker.speak = function(name) {
        console.log(word + " " + name);
    };
    window.hello_speaker = hello_speaker;
})(window);