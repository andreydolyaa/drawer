'use strict';

var gNumOfLines = 0;
var gMeme = createMeme();


function createMeme(imgId, lineIdx) {
    return {
        selectedImgId: imgId,
        selectedLineIdx: lineIdx,
        lines: [
            
        ]
    }
}

function createLine(txt, size, align, color,id,idx){
    gMeme.lines.push({
        txt, 
        size, 
        align, 
        color
    });
    gMeme.selectedImgId = id,
    gMeme.selectedLineIdx = idx;
}

