'use strict';

var gCurrImgId;
var gCurrLineIdx = 1;
var gCurrMeme;



function drawImg(id) {
    var image = getImgs()
    var img = new Image();
    img.src = image[id - 1].url;
    gCurrImgId = image[id - 1].id;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    }
}

function drawText(text, x, y) {
    gCtx.strokeStyle = 'red';
    gCtx.fillStyle = 'white';
    gCtx.lineWidth = '2';
    gCtx.font = '48px impact';
    gCtx.textAlign = 'start';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}




function renderCanvas(id) {
    drawImg(id);
    gEditorIsOn = true;
    toggleGalleryAndEditor();
}




function onAddText() {
    var text = document.querySelector('#img-txt');
    createLine(text.value,50,'center','red',gCurrImgId,gCurrLineIdx);
    if (gCurrLineIdx === 1) {
        drawText(text.value, 225, 50);
        gCurrLineIdx++;
    }
    else if (gCurrLineIdx === 2) {
        drawText(text.value, 225, 455);
        gCurrLineIdx++;
    }
    else {
        drawText(text.value, 250, 250);
        gCurrLineIdx++;
    }
    text.value = '';
    console.log(gMeme);
}




















// function getCurrLinePos(event){
//     gCurrLineIdx.x = event.offsetX;
//     gCurrLineIdx.y = event.offsetY;
// }

// function onAddAnotherText(){
//     var meme = getMeme();
//     var text = document.querySelector('#img-txt');
//     text.value = '';
//     meme.lines.push(gCurrMeme);
//     console.log(meme);
//     drawText(text.value,300,300);
// }




// function onTextOnImg(){
//     var text = document.querySelector('#img-txt').value;

    // createMeme(text,gCurrImgId,gCurrImgId)
    // drawText(text,200,200)
    // console.log(createMeme(text,gCurrImgId,gCurrImgId));
    // console.log(gMeme);
// }
