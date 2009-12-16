function explainKnurd() {
    var available_explanations = 3;
    var now = new Date();
    var seconds = Math.floor(now.getTime() / 1000);
    var whichth = seconds % available_explanations;
    Ajax.Request('GET', '/js/explainKnurd/' + whichth, insertKnurdExplanation);
}

function insertKnurdExplanation(text) {
    var explanation = text.split(" ");
    var partOfSpeech = explanation.shift();
    var partOfSpeechElem = document.createElement("b");
    if (partOfSpeech.charAt(0) == '-') {
        var italics = document.createElement("i");
        italics.appendChild(document.createTextNode(partOfSpeech));
        partOfSpeechElem.appendChild(italics);
    } else {
        explanation = text;
    }
    var explanationElem = document.createTextNode("  " + explanation);
    var dictionaryEntry = document.createElement("span");
    dictionaryEntry.id = "dictionaryentry";
    dictionaryEntry.appendChild(partOfSpeechElem);
    dictionaryEntry.appendChild(explanationElem);
    var dictionaryKnurd = document.getElementById("dictionaryknurd");
    var oldDictionaryEntry = document.getElementById("dictionaryentry");
    if (oldDictionaryEntry != undefined) {
        dictionaryKnurd.removeChild(oldDictionaryEntry);
    }
    var wordKnurd = document.getElementById("wordknurd");
    dictionaryKnurd.appendChild(dictionaryEntry);
}

explainKnurd();

