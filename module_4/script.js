(function() {
    var name = ['Jason', 'Polley', 'Paul', 'Elizabeth', 'Jones', 'Alice', 'Jerry', 'Jimmy', 'Chuck', 'Josie'];
    for(var i = 0; i < name.length; i++){
        var firstletter = name[i].charAt(0).toLowerCase();
        if (firstletter === 'j'){
            goodbye_speaker.speak(name[i]);
        }
        else{
            hello_speaker.speak(name[i]);
        }
    }
})();