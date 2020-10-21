'use strict';

var gCurrImgId;




function renderMeme() {
    drawImg();
    var meme = getMeme();
    meme.lines.forEach(function (line) {
        var txt = line.txt;
        var size = line.size;
        var align = line.align;
        var fillColor = line.innerColor;
        var strokeColor = line.strokeColor;
        var posX = line.x;
        var posY = line.y;
        drawText(txt, size, align, fillColor, strokeColor, posX, posY);
    })
}


function onAddText() {
    var txt = document.querySelector('#img-txt');
    addText(txt.value);
    txt.value = '';
    renderMeme();
}


function onImgClicked(imgId) {
    gEditorIsOn = true;
    toggleEditor();
    imgClick(imgId);
    renderMeme();
}


function drawText(text, fontSize, align, innerColor, strokeColor, x, y) {
    gCtx.strokeStyle = strokeColor;
    gCtx.fillStyle = innerColor;
    gCtx.lineWidth = '2'
    gCtx.font = `${fontSize}px impact`
    gCtx.textAlign = align;
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


function drawImg() {
    var meme = getMeme();
    var imgId = meme.selectedImgId;
    var img = new Image()
    console.log(imgId);
    console.log(meme);
    img.src = `img/${imgId}.jpg`;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}



function onIncFont() {
    increaseFont();
    renderMeme();
}

function onDecFont() {
    decreaseFont();
    renderMeme();
}

function onTextUp(){
    moveTextUp();
    renderMeme();
}

function onTextDown(){
    moveTextDown();
    renderMeme();
}

function onDeleteText(){
    deleteText();
    renderMeme();
}












// console.log(gImgs);


// drawText(txt.value, 48, 'end', 'red', 'blue', 255, 50);


// function drawMeme(imgId) {
//     gEditorIsOn = true;
//     toggleEditor();
//     drawImg(imgId);
//     onIncFont();
//     onAddText();
// }
// var meme = getMeme();
// meme.lines.forEach(line => {
//     var txt = line.txt;
//     var size = line.size;
//     var fontFamily = line.family;
//     var align = line.align;
//     var innerColor = line.color;
//     var strokeColor = line.strokeColor;
//     var posX = line.x;
//     var posY = line.y;
//     drawText(txt, size, fontFamily, align, innerColor, strokeColor, posX, posY);
// });
// var meme = getMeme();
//     meme.lines.forEach(function(line){
//         var txt = line.txt;
//         var size = line.size;
//         var align=line.align;
//         var fillColor = line.innerColor;
//         var strokeColor = line.strokeColor;
//         var posX=line.x;
//         var posY =line.y;
//         drawText(txt,size,align,fillColor,strokeColor,posX,posY);
//     })