'use strict';

var gCurrTxtPos = { x: 0, y: 0 };
var gCurrFocusColor = 'rgba(60, 60, 60,1)';
var gIsDrag = false;




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
        var font = line.font;
        drawFocus();
        drawText(txt, size, align, fillColor, strokeColor, posX, posY, font);
    });
}


function onChangeText() {
    var txt = document.querySelector('#img-txt');
    changeText(txt.value);
    renderMeme();
}

function onAddText() {
    gCurrFocusColor = 'rgba(60, 60, 60,1)';
    addText();
    focusText();
    renderMeme();
}

function onImgClicked(imgId) {
    gEditorIsOn = true;
    toggleEditor();
    imgClick(imgId);
    renderMeme();
}


function drawText(text, fontSize, align, innerColor, strokeColor, x, y, font) {
    gCtx.strokeStyle = strokeColor;
    gCtx.fillStyle = innerColor;
    gCtx.lineWidth = '2';
    gCtx.font = `${fontSize}px ${font}`;
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

function onAlignToLeft() {
    alignToLeft();
    renderMeme();
}

function onAlignToRight() {
    alignToRight();
    renderMeme();
}

function onAlignToCenter() {
    alignToCenter();
    renderMeme();
}

function onIncFont() {
    increaseFont();
    renderMeme();
}

function onDecFont() {
    decreaseFont();
    renderMeme();
}

function onTextUp() {
    moveTextUp();
    renderMeme();
}

function onTextDown() {
    moveTextDown();
    renderMeme();
}

function onDeleteText() {
    deleteText();
    renderMeme();
}


function onFocusText() {
    document.querySelector('#img-txt').value = '';
    focusText();
    renderMeme();
}


function drawFocus() {
    drawRect();
}


function drawRect() {
    var meme = getMeme();
    var txtWidth = gCtx.measureText(meme.lines[meme.selectedLineIdx].txt).width;
    var lineHeight = meme.lines[meme.selectedLineIdx].size
    var x = meme.lines[meme.selectedLineIdx].x;
    var y = meme.lines[meme.selectedLineIdx].y;
    gCtx.beginPath()
    gCtx.textBaseline = "top";
    gCtx.textBaseline = "center";
    gCtx.rect(x - txtWidth / 2, y, txtWidth, lineHeight);
    gCtx.strokeStyle = gCurrFocusColor;
    gCtx.stroke();
}


function onDeleteFocus() {
    gCurrFocusColor = 'rgba(60, 60, 60, 0)';
    renderMeme();
}



function onDownload(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme.jpg'
}

function onStrokeColor() {
    var color = document.querySelector('.colorPickerStroke');
    color.addEventListener('input', function () {
        setStrokeColor(color.value);
        renderMeme();
    });
}

function onFillColor() {
    var color = document.querySelector('.colorPicker');
    color.addEventListener('input', function () {
        setFillColor(color.value);
        renderMeme();
    });
}

function onSelectFont(val) {
    setFontFamily(val.value);
    renderMeme();
}




function onSelectTxt() {
    focusText();
    renderMeme();
}

function onStartDrag() {
    gIsDrag = true;
}

function onDragTxt(ev) {
    if (gIsDrag) {
        var meme = getMeme();
        var txt = meme.lines[meme.selectedLineIdx];
        txt.x = ev.offsetX;
        txt.y = ev.offsetY;
        renderMeme();
    }
    else return;
}

function onStopDrag() {
    gIsDrag = false;
}

