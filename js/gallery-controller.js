'use strict';

var gCanvas;
var gCtx;
var gEditorIsOn = false;





function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
}


function renderGallery() {
    var imgs = getImgs();
    var strHTMLs = imgs.map(function (img) {
        return `
        <div class"gal-img" id="${img.id}" onclick="renderCanvas('${img.id}')"><img src="${img.url}"></div>
        `
    });
    document.querySelector('.meme-gallery .grid-container').innerHTML = strHTMLs.join('');
}




function toggleGalleryAndEditor() {
    var gallery = document.querySelector('.meme-gallery');
    var editor = document.querySelector('.meme-editor');
    if (!gEditorIsOn) {
        editor.style.display = 'none';
        gallery.style.display = 'block';
    }
    else {
        editor.style.display = 'flex';
        gallery.style.display = 'none';
        gEditorIsOn = false;
    }
}