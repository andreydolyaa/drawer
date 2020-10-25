'use strict';

var gIsSavedMemesEditor = false;




function renderSavedMemes() {
    var savedMemes = getSavedMemes();
    var strHTMLS = savedMemes.map(function (meme) {
        return `
        <div>
        <img src="${meme}">
        <button><a href="#" onclick="onDownload(this)">Download</a></button>
        </div>
        `
    });
    document.querySelector('.memes').innerHTML = strHTMLS.join('');

}



function onSaveMeme(){
    onDeleteFocus();
    saveMeme();
    renderSavedMemes();
}

function toggleSavedMemes() {
    gIsSavedMemesEditor = true;
    var elSavedMemesEditor = document.querySelector('#saved-memes');
    var gallery = document.querySelector('.meme-gallery');
    var editor = document.querySelector('.meme-editor');
    var profile = document.querySelector('.profile');
    var search = document.querySelector('.input-container');
    if (!gIsSavedMemesEditor) {
        elSavedMemesEditor.style.display = 'none';
    } else {
        elSavedMemesEditor.style.display = 'block';
        editor.style.display = 'none';
        gallery.style.display = 'none';
        profile.style.display = 'none';
        search.style.display = 'none';
        gIsSavedMemesEditor = false;
    }
}

