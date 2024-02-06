
const screenWidth = window.screen.width;
const body = document.getElementsByTagName('body')[0];

const details = document.getElementsByClassName('Detail');

const mainPicture = document.getElementById('Main-picture');
const pictureInWindow = document.getElementById('pictureContent');

const nextImage_button = document.getElementById('nextImage');
const previousImage_button = document.getElementById('previousImage');

const nextImageInWindow_button = document.getElementById('nextImageWindow');
const prevImageInWindow_button = document.getElementById('prevImageWindow');

const pictureDialog = document.getElementById('pictureWindow');
const close_button = document.getElementById('pictureClose');

try {
    mainPicture.addEventListener('click', () => openImage(mainPicture.getElementsByTagName('img')[0]));
    details[0].addEventListener('click', () => showNewImage(1, mainPicture));
    details[1].addEventListener('click', () => showNewImage(2, mainPicture));
    details[2].addEventListener('click', () => showNewImage(3, mainPicture));
    details[3].addEventListener('click', () => showNewImage(4, mainPicture));
    details[4].addEventListener('click', () => showNewImage(5, mainPicture));
    details[5].addEventListener('click', () => showNewImage(6, mainPicture));
    details[6].addEventListener('click', () => showNewImage(7, mainPicture));
    details[7].addEventListener('click', () => showNewImage(8, mainPicture));
    details[8].addEventListener('click', () => showNewImage(9, mainPicture));
}
catch {

}

nextImage_button.addEventListener('click', () => flipNextImage(true, mainPicture));
previousImage_button.addEventListener('click', () => flipNextImage(false, mainPicture));

nextImageInWindow_button.addEventListener('click', () => flipNextImage(true, pictureInWindow));
prevImageInWindow_button.addEventListener('click', () => flipNextImage(false, pictureInWindow));

close_button.addEventListener('click', () => closeWindow());

if (screenWidth > 999.99) {

    const zoomOut_button = document.getElementById('Zoom-out');
    const zoomIn_button = document.getElementById('Zoom-in');
    zoomOut_button.addEventListener('click', () => resizeImage(false));
    zoomIn_button.addEventListener('click', () => resizeImage(true));

    pictureInWindow.addEventListener('mousedown', () => oldCoordinates(event));
    pictureInWindow.addEventListener('mousemove', () => newCoordinates(event));
    pictureInWindow.addEventListener('mouseup', () => mouseUpPicture());
    function mouseUpPicture() {
        press = false;
        image.style.cursor = 'grab';
        pictureInWindow.removeEventListener('mousemove', () => newCoordinates(event));
    }

    var x0, y0 = 0;
    var x1, y1 = 0;
    var offx, offy = 0;
    var press = false;
    var actualWidth;
    var firstOpening = true;

    function oldCoordinates(event) {

        x0 = event.clientX;
        y0 = event.clientY;
        press = true;

        image = pictureInWindow.getElementsByTagName('img')[0];

        if (firstOpening) {
            originalWidth = parseInt(getComputedStyle(image).width);
        }
        actualWidth = parseInt(getComputedStyle(image).width);

        image.style.cursor = 'grabbing';
        event.preventDefault();
    }

    function newCoordinates(event) {

        if (!press || actualWidth == originalWidth) {
            return false;
        }
        else {

            x1 = x0;
            y1 = y0;
            x0 = event.clientX;
            y0 = event.clientY;

            offx = parseInt(getComputedStyle(image).left) + parseInt(x0 - x1);
            offy = parseInt(getComputedStyle(image).top) + parseInt(y0 - y1);

            image.style.left = offx + 'px';
            image.style.top = offy + 'px';
        }

        var parentHeight = parseInt(getComputedStyle(pictureInWindow).height);
        var parentWidth = parseInt(getComputedStyle(pictureInWindow).width);
        var height = parseInt(getComputedStyle(image).height);
        var width = parseInt(getComputedStyle(image).width);


        if (height > parentHeight && width > parentWidth) {

            var top = parseInt(getComputedStyle(image).top);
            var left = parseInt(getComputedStyle(image).left);

            if (top > 0) {
                image.style.top = 0 + 'px';
            }

            if (left > 0) {
                image.style.left = 0 + 'px';
            }

            if (top < -(height - parentHeight)) {
                image.style.top = -(height - parentHeight) + 'px';
            }

            if (left < -(width - parentWidth)) {
                image.style.left = -(width - parentWidth) + 'px';

            }
        }

    }

    var zoomLevel = 1;
    const zoomCount = 4;
    const zoomEffect = 0.4;
    var originalWidth, originalHeight;

    function resizeImage(enhanceImage) {

        console.log('%%%');

        image = pictureInWindow.getElementsByTagName('img')[0];

        var imageHeight = parseInt(getComputedStyle(image).height);
        var imageWidth = parseInt(getComputedStyle(image).width);

        if (firstOpening) {
            originalWidth = imageWidth;
            originalHeight = imageHeight;
            firstOpening = false;
        }

        image.style.left = 'auto';
        image.style.top = 'auto';

        zoomImage(enhanceImage, imageHeight, imageWidth);
    }

    function zoomImage(zoom, imageHeight, imageWidth) {

        if (zoomLevel > 0 && zoomLevel <= zoomCount) {

            if (zoom) {

                if (zoomLevel == zoomCount) {

                    zoomLevel = 1;

                    imageHeight = originalHeight;
                    imageWidth = originalWidth;
                }
                else {

                    imageHeight += originalHeight * (zoomLevel * zoomEffect);
                    imageWidth += originalWidth * (zoomLevel * zoomEffect);

                    zoomLevel += 1;
                }
            }
            else {

                if (zoomLevel > 1) {

                    zoomLevel -= 1;

                    imageHeight -= originalHeight * (zoomLevel * zoomEffect);
                    imageWidth -= originalWidth * (zoomLevel * zoomEffect);
                }
            }

            image.style.minHeight = Math.round(imageHeight) + 'px';
            image.style.minWidth = Math.round(imageWidth) + 'px';
        }
    }
}
else {
    pictureInWindow.addEventListener('click', () => flipNextImage(true, pictureInWindow));
}

var newImage;
function openImage(image) {

    newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.id = image.id;

    newImage.onload = () => setMinimumSize();

    pictureInWindow.innerHTML = '';

    pictureInWindow.appendChild(newImage);
    pictureDialog.showModal();


    body.style.overflow = 'hidden';

    firstOpening = true;
    zoomLevel = 1;
}


function flipNextImage(flipImageNext, parentObject) {

    actualImage_ID = Number(parentObject.getElementsByTagName('img')[0].id);

    newImage_number = getNewImageNumber(flipImageNext);

    showNewImage(newImage_number, parentObject);

}

function showNewImage(newImage_number, parentObject) {

    var image_id = 'Detail_' + String(newImage_number);

    var newImage_src = document.getElementById(image_id).src;

    setNewImageActiveClass(newImage_number);

    newImage = document.createElement('img');
    newImage.id = newImage_number;
    newImage.src = newImage_src;

    newImage.onload = () => setMinimumSize();

    parentObject.innerHTML = '';
    parentObject.appendChild(newImage);


    zoomLevel = 1;
    firstOpening = true;
}

function getNewImageNumber(flipImageNext) {

    if (flipImageNext) {

        if (actualImage_ID == details.length) {
            newImage_number = 1;
        }
        else {
            newImage_number = actualImage_ID + 1;
        }
    }
    else {

        if (actualImage_ID == 1) {
            newImage_number = details.length;
        }
        else {
            newImage_number = actualImage_ID - 1;
        }
    }

    return newImage_number;
}

function setNewImageActiveClass(newImage_number) {

    for (var index = 1; index < details.length + 1; index++) {

        if (index != newImage_number) {
            details[index - 1].classList.remove('Activ-image');
        }
        else {
            console.log(newImage_number);
            details[index - 1].classList.add('Activ-image');
        }
    }
}

function closeWindow() {
    pictureDialog.close();
    body.style.overflow = 'auto';
}

function setMinimumSize() {

    var parentWidth = parseInt(getComputedStyle(pictureInWindow).width);
    var parentHeight = parseInt(getComputedStyle(pictureInWindow).height);
    var imageWidth = newImage.width;
    var imageHeight = newImage.height;

    if (imageWidth > imageHeight) {


        if (imageWidth < parentHeight) { 
            newImage.style.width = 100 + '%';
        }
        
    }
    else {

        if (imageHeight < parentWidth) {
            newImage.style.height = 100 + '%';
        }
    }
}