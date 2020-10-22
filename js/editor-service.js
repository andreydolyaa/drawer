'use strict';


var gMeme;
createMeme();


function createMeme() {
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            { txt: 'your text here', size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: 300, y: 100 }
        ]
    }
}

function createMemeText(x, y) {
    return { txt: 'your text here', size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: x, y: y }
}

function getMeme() {
    return gMeme;
}


function imgClick(id) {
    gMeme.selectedImgId = +id;
}


function changeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


function addText() {
    if (gMeme.lines.length === 1) gMeme.lines.push(createMemeText(300, 500));
    else gMeme.lines.push(createMemeText(300, getRandomIntInclusive(150, 450)));
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

    console.log(gMeme.lines);
}

function alignToLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left';
}

function alignToRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right';
}

function alignToCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center';
}

function setStrokeColor(val){
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = val;
}

function setFillColor(val){
    gMeme.lines[gMeme.selectedLineIdx].innerColor = val;
}




