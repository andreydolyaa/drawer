'use strict';

var gCanvas;
var gCtx;
var gEditorIsOn = false;
var gNavOpen = false;
var gIsSearching = false;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderFontSizes()
    renderGallery();
    renderMeme();
}


function renderGallery() {
    var imgs = getImgs();
    var filtredImgs = getFiltredImgs();
    var strHTMLs = '';

    if (gIsSearching) {
        strHTMLs = filtredImgs.map(function (img) {
            return `
        <div class"gal-img" id="${img.id}" onclick="onImgClicked('${img.id}')"><img src="${img.url}"></div>
            `
        });
        document.querySelector('.meme-gallery .grid-container').innerHTML = strHTMLs.join('');
    } else {
        strHTMLs = imgs.map(function (img) {
            return `
        <div class"gal-img" id="${img.id}" onclick="onImgClicked('${img.id}')"><img src="${img.url}"></div>
        `
        });
        document.querySelector('.meme-gallery .grid-container').innerHTML = strHTMLs.join('');
    }
}


function toggleEditor() {
    var gallery = document.querySelector('.meme-gallery');
    var editor = document.querySelector('.meme-editor');
    var profile = document.querySelector('.profile');
    var search = document.querySelector('.input-container');
    if (!gEditorIsOn) {
        editor.style.display = 'none';
        gallery.style.display = 'block';
        profile.style.display = 'flex';
        search.style.display = 'block';
    }
    else {
        editor.style.display = 'flex';
        gallery.style.display = 'none';
        profile.style.display = 'none';
        search.style.display = 'none';
        gEditorIsOn = false;
    }
}

function onOpenMenu() {
    var elNav = document.querySelector('.mobile-nav');
    if (!gNavOpen) {
        elNav.style.display = 'block';
        gNavOpen = true;
    } else {
        elNav.style.display = 'none';
        gNavOpen = false;
    }
}

function onSearch() {
    gIsSearching = true;
    var searchInput = document.querySelector('.search-input');
    if (searchInput.value === '') {
        gIsSearching = false
        renderGallery();
    } else {
        searchKeywords(searchInput.value);
        renderGallery();
    }
}

function onSearchBtn(val, id) {
    gIsSearching = true;
    if (val === '') {
        gIsSearching = false
        renderGallery();
    } else {
        searchKeywords(val);
        increaseBtnFonts(id);
        renderGallery();
    }
}


function increaseBtnFonts(id) {
    var btn = document.querySelector(`#${id}`);
    var currFontSize = btn.style.fontSize;
    var fontSize = currFontSize.split('px').join('');
    if(+fontSize > 40) return
    else btn.style.fontSize = (+fontSize + 6) + 'px';
}

function renderFontSizes() {
    var keywords = getKeywordsCount();
    var btns = document.querySelectorAll('.keywords button');
    for (var key in keywords) {
        for (var i = 0; i < btns.length; i++) {
            if (btns[i].innerText === key) {
                var size = 14;
                btns[i].style.fontSize = size + keywords[key] + 'px';
            }
        }
    }
}

