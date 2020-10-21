'use strict';

var gCanvas;
var gCtx;


function onInit(){
    // gCanvas = document.querySelector('#my-canvas');
    // gCtx = gCanvas.getContext('2d');

    // drawImg();
    renderGallery();
}


// function drawImg(){
//     var image = getImgs()
//     var img = new Image();
//     img.src = image[0].url;
//     img.onload = () => {
//         gCtx.drawImage(img,0,0,gCanvas.width,gCanvas.height);
//     }
// }

function renderGallery(){
    var imgs = getImgs();
    var strHTMLs = imgs.map(function(img){
        return `
        <div id="${img.id}"><img src="${img.url}"></div>
        `
    });
    document.querySelector('.meme-gallery .grid-container').innerHTML = strHTMLs.join('');
}