'use strict';


var gMeme;

createMeme();


function createMeme(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            { txt: 'hello', size: 48, align: 'center', innerColor: 'white', strokeColor: 'red', x: 255, y: 100 },
        ]
    }
}

function getMeme() {
    return gMeme;
}


function imgClick(id) {
    gMeme.selectedImgId = +id;
}

function addText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function getPosition() {
    return {
        x: gMeme.lines[gMeme.selectedLineIdx].x,
        y: gMeme.lines[gMeme.selectedLineIdx].y
    }
}

function getFontSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size;
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10;
}

function decreaseFont(){
    gMeme.lines[gMeme.selectedLineIdx].size -= 10;
}

function moveTextUp(){
    gMeme.lines[gMeme.selectedLineIdx].y -= 5;
}

function moveTextDown(){
    gMeme.lines[gMeme.selectedLineIdx].y += 5;
}

function deleteText(){
    gMeme.lines[gMeme.selectedLineIdx].txt = '';
}

