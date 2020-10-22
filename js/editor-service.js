'use strict';


var gMeme;
var gCurrLine;
createMeme();


function createMeme() {
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            // { txt: 'your text', size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: 255, y: 100 },
            // { txt: 'your text', size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: 255, y: 420 },
        ]
    }
}

function createMemeText(text,x,y){
    return { txt: text, size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: x, y: y }
}

function getMeme() {
    return gMeme;
}


function imgClick(id) {
    gMeme.selectedImgId = +id;
}


function addText(text) {
    if(gMeme.lines.length === 0) gMeme.lines.push(createMemeText(text,255,100));
    else if(gMeme.lines.length === 1) gMeme.lines.push(createMemeText(text,255,400));
    else gMeme.lines.push(createMemeText(text,255,getRandomIntInclusive(200,350)));
}



function getPosition() {
    return {
        x: gMeme.lines[gMeme.selectedLineIdx].x,
        y: gMeme.lines[gMeme.selectedLineIdx].y
    }
}

function focusText() {
    if (gMeme.lines.length === 0) return;
    gMeme.selectedLineIdx += 1
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0;
    }
}

function getFontSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size;
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10;
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 10;
}

function moveTextUp() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 5;
}

function moveTextDown() {
    gMeme.lines[gMeme.selectedLineIdx].y += 5;
}

function deleteText() {
    gMeme.lines.splice(0, gMeme.lines.length);
    gMeme.lines = [];
}








