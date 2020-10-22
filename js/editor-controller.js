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
        var font = line.font;
        drawFocus()
        drawText(txt, size, align, fillColor, strokeColor, posX, posY,font);
    });

}


function onChangeText() {
    var txt = document.querySelector('#img-txt');
    changeText(txt.value);
    renderMeme();
}

function onAddText() {
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


function drawText(text, fontSize, align, innerColor, strokeColor, x, y,font) {
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
    var position = getPosition();
    if (!position.x || !position.y) {
        drawRect(255, 155);
    } else {
        drawRect(position.x, position.y);
    }
}


function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x / 2, y / 2, x, y)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}


function onDownload(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'puki.jpg'
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

function onSelectFont(val){
    setFontFamily(val.value);
    renderMeme();
}
