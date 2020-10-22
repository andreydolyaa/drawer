'use strict';

var gCurrImgId;




function renderMeme() {
    var meme = getMeme();
    drawImg();
    meme.lines.forEach(function (line) {
        var txt = line.txt;
        var size = line.size;
        var align = line.align;
        var fillColor = line.innerColor;
        var strokeColor = line.strokeColor;
        var posX = line.x;
        var posY = line.y;
        if(txt) drawFocus();
        drawText(txt, size, align, fillColor, strokeColor, posX, posY);
    });
}


function onChangeText() {
    var txt = document.querySelector('#img-txt');
    changeText(txt.value);
    renderMeme();
}
function onAddText(){
    var txt = document.querySelector('#img-txt');
    addNewText(txt.value);
    txt.value = '';
    focusText();
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
    gCtx.lineWidth = '2';
    gCtx.font = `${fontSize}px impact`;
    gCtx.textAlign = align;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}


function drawImg() {
    var meme = getMeme();
    var imgId = meme.selectedImgId;
    var img = new Image()
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

function onFocusText(){
    document.querySelector('#img-txt').value = '';
    focusText();
    renderMeme();
}

function drawFocus(){
    var txt = document.querySelector('#img-txt').value;
    var meme = getMeme();
    var position = getPosition();
    if(txt === '' && meme.selectedLineIdx > 1) return
    else drawRect(position.x,position.y);
}


function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x/2, y/2, x,y)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}






