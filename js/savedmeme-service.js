'use strict';

const STORAGE_KEY = 'memesDB';
var gSavedMemes = [];
loadMemes();


function saveMeme() {
    var dataURL = gCanvas.toDataURL();
    gSavedMemes.push(dataURL);
    saveToStorage(STORAGE_KEY, gSavedMemes);
}

function loadMemes() {
    var memes = loadFromStorage(STORAGE_KEY);
    if (!memes) {
        memes = [];
    }
    gSavedMemes = memes;
    saveToStorage(STORAGE_KEY, gSavedMemes);
}




function getSavedMemes() {
    return gSavedMemes;
}



