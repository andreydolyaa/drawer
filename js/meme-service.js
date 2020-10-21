'use strict';

var numOfImgs = 18;
var gImgs = _createImgs();






var gMeme = {
    selectedImgId:5,
    selectedLineIdx:0,

    lines:[
        {txt:'HAHAH',size:20,align:'left',color:'red'}
    ]
}






function getImgs(){
    return gImgs;
}

function getImageIdxById(id){
    return gImgs.findIndex(img => id === img.id);
}




function _createImgs(){
    var imgs = [];
    for(var i = 1;i<=numOfImgs;i++){
        imgs.push(_createImg(i,i))
    }
    return imgs;
}

function _createImg(id,url){
    return {
        id:id,
        url:`img/${url}.jpg`
    };
}

console.log(gImgs);