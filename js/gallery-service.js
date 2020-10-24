'use strict';



const NUM_OF_IMGS = 18;
var gFiltredImgs;
var gImgs = _createImgs();
console.log(gImgs);
createKeywords();


function getImgs() {
    return gImgs;
}

function getFiltredImgs() {
    return gFiltredImgs;
}


function getImgUrl(imgId) {
    var img = gImgs.find(img => img.id === imgId);
    return img.url;
}


function _createImgs() {
    var imgs = [];
    for (var i = 1; i <= NUM_OF_IMGS; i++) {
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




function searchKeywords(keyword) {
    gFiltredImgs = gImgs.filter(img => img.keywords.includes(keyword.toLowerCase()));
    return gFiltredImgs;
}


function getKeywords(){
    return {'man':12,'cute':6,'animal':3,'baby':4,'donald':1,'trump':1,'president':2,'dog':2,'cat':1,'funny':10}
}

function createKeywords() {
    gImgs[0].keywords.push('man', 'donald', 'trump', 'president');
    gImgs[1].keywords.push('dog', 'cute', 'animal');
    gImgs[2].keywords.push('baby', 'dog', 'cute', 'animal');
    gImgs[3].keywords.push('cat', 'cute', 'animal');
    gImgs[4].keywords.push('baby', 'cute', 'funny');
    gImgs[5].keywords.push('man', 'funny');
    gImgs[6].keywords.push('baby', 'cute', 'funny');
    gImgs[7].keywords.push('man', 'funny');
    gImgs[8].keywords.push('baby', 'cute', 'funny');
    gImgs[9].keywords.push('man', 'funny', 'president');
    gImgs[10].keywords.push('man', 'funny');
    gImgs[11].keywords.push('man');
    gImgs[12].keywords.push('man', 'happy');
    gImgs[13].keywords.push('man');
    gImgs[14].keywords.push('man', 'happy');
    gImgs[15].keywords.push('man', 'happy', 'funny');
    gImgs[16].keywords.push('man', 'happy', 'funny');
    gImgs[17].keywords.push('man', 'funny');
}
