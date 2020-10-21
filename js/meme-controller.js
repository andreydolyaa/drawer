'use strict';

var gCanvas;
var gCtx;
var gCurrImg;
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
        <div class"gal-img" id="${img.id}" onclick="onEditImg('${img.id}')"><img src="${img.url}"></div>
        `
    });
    document.querySelector('.meme-gallery .grid-container').innerHTML = strHTMLs.join('');
}




function drawImg(id) {
    var image = getImgs()
    var img = new Image();
    img.src = image[id - 1].url;
    gCurrImg = image[id - 1].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
}

function drawText(text, x, y) {
    gCtx.strokeStyle = 'red';
    gCtx.fillStyle = 'white';
    gCtx.lineWidth = '2';
    gCtx.font = '48px impact';
    gCtx.textAlign = 'start';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}


function onEditImg(id) {
    drawImg(id);
    gEditorIsOn = true;
    toggleGalleryAndEditor();
}

function onTextOnImg(){
    var text = document.querySelector('#img-txt').value;
    drawText(text,200,200)
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