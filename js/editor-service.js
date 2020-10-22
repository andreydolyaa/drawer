'use strict';


var gMeme;
var gCurrLine;
createMeme();


function createMeme() {
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            { txt: 'your text', size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: 255, y: 100 },
            { txt: 'your text', size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: 255, y: 420 },
        ]
    }
}

function getMeme() {
    return gMeme;
}


function imgClick(id) {
    gMeme.selectedImgId = +id;
}

function changeText(txt) {
    if (gMeme.lines.length === 0) addNewText(txt);
    else gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function addNewText(txt) {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx++;
        focusText();
        changeText(txt);
    }
    else {
        gMeme.lines.push({ txt:'', size: 48, align: 'center', innerColor: 'white', strokeColor: 'black', x: 255, y: getRandomIntInclusive(100, 400) });
        console.log(gMeme);
    }
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
    console.log('curr line idx :', gMeme.selectedLineIdx);
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








// if (gMeme.selectedLineIdx === 0) {
//     gMeme.selectedLineIdx++;
//     focusText();

// } else {
    // if (gMeme.lines.length === 0) {
    //     addNewText(txt);
    // } else {
    //     gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    // }