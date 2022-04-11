let chooseColor = document.getElementById('main-block-color');
let chooseImage = document.getElementById('main-block-bg');
let mainBg = document.getElementById('body-bg');

document.getElementById('top-color').addEventListener('click', function () {
    chooseImage.style.visibility = 'hidden';
    mainBg.style.backgroundImage = 'none';
    chooseColor.style.visibility = 'visible';
    if (event.target.className == 'color1') {
        mainBg.style.backgroundColor = '#059a98';
    }
    else if (event.target.className == 'color2') {
        mainBg.style.backgroundColor = '#920c00';
    }
    else if (event.target.className == 'color3') {
        mainBg.style.backgroundColor = '#24b771';
    }
    else if (event.target.className == 'color4') {
        mainBg.style.backgroundColor = '#36ce00';
    }
    else if (event.target.className == 'color5') {
        mainBg.style.backgroundColor = '#81898b';
    }
    else if (event.target.className == 'color6') {
        mainBg.style.backgroundColor = '#ff1700';
    }
    else if (event.target.className == 'color7') {
        mainBg.style.backgroundColor = '#000fff';
    }
    else if (event.target.className == 'color8') {
        mainBg.style.backgroundColor = '#901589';
    }
    else if (event.target.className == 'color9') {
        mainBg.style.backgroundColor = '#877f00';
    }
});

document.getElementById('top-bg').addEventListener('click', function () {
    chooseColor.style.visibility = 'hidden';
    chooseImage.style.visibility = 'visible';
    mainBg.style.backgroundColor = 'white';
    if (event.target.className == 'bg1') {
        mainBg.style.backgroundImage = `url(images/img1.jpg)`;
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg2') {
        mainBg.style.backgroundImage = 'url(images/img2.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg3') {
        mainBg.style.backgroundImage = 'url(images/img3.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg4') {
        mainBg.style.backgroundImage = 'url(images/img4.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg5') {
        mainBg.style.backgroundImage = 'url(images/img5.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg6') {
        mainBg.style.backgroundImage = 'url(images/img6.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg7') {
        mainBg.style.backgroundImage = 'url(images/img7.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg8') {
        mainBg.style.backgroundImage = 'url(images/img8.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
    else if (event.target.className == 'bg9') {
        mainBg.style.backgroundImage = 'url(images/img9.jpg)';
        mainBg.style.backgroundSize = `cover`;
    }
});























        // document.getElementsByClassName('color1').addEventListener('click', function(){
        // mainBg.style.backgroundColor = '#059a98';
        // })