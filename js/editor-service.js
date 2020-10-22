'use strict';


var gMeme;
createMeme();


function createMeme() {
    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            { txt: 'hello', size: 48, align: 'center', innerColor: 'white', strokeColor: 'red', x: 255, y: 100 },
            { txt: 'there', size: 48, align: 'center', innerColor: 'white', strokeColor: 'red', x: 255, y: 420 },
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
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function addNewText(txt) {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = 1;
        focusText();
        changeText(txt);
    } else {
        gMeme.lines.push({ txt, size: 48, align: 'center', innerColor: 'white', strokeColor: 'red', x: 255, y: getRandomIntInclusive(100,400) });
    }
    console.log(gMeme);
}

function getPosition() {
    return {
        x: gMeme.lines[gMeme.selectedLineIdx].x,
        y: gMeme.lines[gMeme.selectedLineIdx].y
    }
}

function focusText() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0;
    }
    console.log('curr line idx :',gMeme.selectedLineIdx );
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

    // gMeme.lines[gMeme.selectedLineIdx].txt = '';
    console.log(gMeme.lines);
    gMeme.lines.splice(gMeme.lines[gMeme.selectedLineIdx],1);
    console.log(gMeme.lines);
   
}

