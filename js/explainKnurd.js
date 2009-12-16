function explainKnurd() {
    var availableExplanations = 10;
    var now = new Date();
    var minutes = Math.floor(now.getTime() / (1000 * 60));
    var reexplainInterval = 2; // change every 2 minutes
    var whichth = Math.floor(minutes / reexplainInterval) % availableExplanations;
    Ajax.Request('GET', '/js/explainKnurd/' + whichth, insertKnurdExplanation);
}

function insertKnurdExplanation(text) {
    document.getElementById("dictionaryentry").innerHTML = text;
}

explainKnurd();

