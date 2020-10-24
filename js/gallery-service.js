'use strict';



var gFiltredImgs;
var numOfImgs = 18;
var gImgs = _createImgs();
createKeywords();


function getImgs() {
    return gImgs;
}

function getFiltredImgs(){
    return gFiltredImgs;
}


function getImgUrl(imgId) {
    var img = gImgs.find(img => img.id === imgId);
    return img.url;
}


function _createImgs() {
    var imgs = [];
    for (var i = 1; i <= numOfImgs; i++) {
        imgs.push(_createImg(i, i));
    }
    return imgs;
}

function _createImg(id, url) {
    return {
        id: id,
        url: `img/${url}.jpg`,
        keywords: []
    };
}

console.log(gImgs);


function searchKeywords(keyword){
    gFiltredImgs = gImgs.filter(img => img.keywords.includes(keyword))
    return gFiltredImgs;
}

// console.log(searchKeywords('cute'));

function createKeywords() {
    gImgs[0].keywords.push('man');
    gImgs[1].keywords.push('dog', 'cute');
    gImgs[2].keywords.push('baby', 'dog', 'cute');
    gImgs[3].keywords.push('cat', 'cute');
    gImgs[4].keywords.push('baby', 'cute', 'funny');
    gImgs[5].keywords.push('man', 'funny');
    gImgs[6].keywords.push('baby', 'cute', 'funny');
    gImgs[7].keywords.push('man', 'funny');
    gImgs[8].keywords.push('baby', 'cute', 'funny');
    gImgs[9].keywords.push('man', 'funny');
    gImgs[10].keywords.push('man', 'funny');
    gImgs[11].keywords.push('man');
    gImgs[12].keywords.push('man', 'happy');
    gImgs[13].keywords.push('man');
    gImgs[14].keywords.push('man', 'happy');
    gImgs[15].keywords.push('man', 'happy', 'funny');
    gImgs[16].keywords.push('man', 'happy', 'funny');
    gImgs[17].keywords.push('man', 'funny');
}