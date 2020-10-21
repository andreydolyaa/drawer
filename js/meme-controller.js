'use strict';

var gCanvas;
var gCtx;
var gEditorIsOn = false;


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    renderGallery();
}

function drawImg(id) {
    var image = getImgs()
    var img = new Image();
    img.src = image[id - 1].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
}

function renderGallery() {
    var imgs = getImgs();
    var strHTMLs = imgs.map(function (img) {
        return `
        <div class"gal-img" id="${img.id}" onclick="onEditImg('${img.id}')"><img src="${img.url}"></div>
        `
    });
    document.querySelector('.meme-gallery .grid-container').innerHTML = strHTMLs.join('');
}


function onEditImg(id) {
    drawImg(id);
    gEditorIsOn = true;
    toggleGalleryAndEditor();
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