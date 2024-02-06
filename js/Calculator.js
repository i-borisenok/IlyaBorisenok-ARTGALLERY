
const portrait = document.getElementById('portrait');
const landscape = document.getElementById('landscape');
const stilLife = document.getElementById('stilLife');
const copyOfPainting = document.getElementById('copyOfPainting');
const personalComposition = document.getElementById('personalComposition');

const styleButtons = document.querySelectorAll('.Style-button');

const widthPainting = document.getElementById('WidthPainting');
const heightPainting = document.getElementById('HeightPainting');

const difficultDetails = document.getElementById('DifficultDetails');
const varnishCoating = document.getElementById('VarnishCoating');
const frame = document.getElementById('Frame');
const bracketsForInstallation = document.getElementById('BracketsForInstallation');

calculate();

function calculate() {

    for (const button of styleButtons) {
        if (button.checked) {
            style = Number(button.value);
            break;
        }
    }

    if (style == 1) {
        if (widthPainting.value < 50) {
            widthPainting.value = 40;
            document.getElementById('widthResult').innerHTML = 40;
        }
        if (heightPainting.value < 50) {
            heightPainting.value = 40;
            document.getElementById('heightResult').innerHTML = 40;
        }
    }
    
    width = Number(widthPainting.value);
    height = Number(heightPainting.value);

    sum = width + height;

    switch (sum) {
        case 60: {
            baseResult = sum * 200;
            break;
        }
        case 70: {
            baseResult = sum * 201;
            break;
        }
        case 80: {
            baseResult = sum * 202;
            break;
        }
        case 90: {
            baseResult = sum * 203;
            break;
        }
        case 100: {
            baseResult = sum * 204;
            break;
        }
        case 110: {
            baseResult = sum * 206;
            break;
        }
        case 120: {
            baseResult = sum * 208;
            break;
        }
        case 130: {
            baseResult = sum * 210;
            break;
        }
        case 140: {
            baseResult = sum * 213;
            break;
        }
        case 150: {
            baseResult = sum * 216;
            break;
        }
        case 160: {
            baseResult = sum * 219;
            break;
        }
        case 170: {
            baseResult = sum * 222;
            break;
        }
        case 180: {
            baseResult = sum * 225;
            break;
        }
        case 190: {
            baseResult = sum * 230;
            break;
        }
        case 200: {
            baseResult = sum * 235;
            break;
        }
        case 210: {
            baseResult = sum * 240;
            break;
        }
        case 220: {
            baseResult = sum * 249;
            break;
        }
        case 230: {
            baseResult = sum * 258;
            break;
        }
        case 240: {
            baseResult = sum * 265;
            break;
        }
        case 250: {
            baseResult = sum * 270;
            break;
        }
        case 260: {
            baseResult = sum * 275;
            break;
        }
        case 270: {
            baseResult = sum * 280;
            break;
        }
        case 280: {
            baseResult = sum * 285;
            break;
        }
        case 290: {
            baseResult = sum * 290;
            break;
        }
        case 300: {
            baseResult = sum * 300;
            break;
        }
        case 310: {
            baseResult = sum * 310;
            break;
        }
        case 320: {
            baseResult = sum * 320;
            break;
        }
        case 330: {
            baseResult = sum * 330;
            break;
        }
        case 340: {
            baseResult = sum * 340;
            break;
        }
        case 350: {
            baseResult = sum * 350;
            break;
        }
        case 360: {
            baseResult = sum * 360;
            break;
        }
        case 370: {
            baseResult = sum * 370;
            break;
        }
        case 380: {
            baseResult = sum * 380;
            break;
        }
        case 390: {
            baseResult = sum * 390;
            break;
        }
        case 400: {
            baseResult = sum * 400;
            break;
        }
        default: {
            baseResult = sum * 250;
            break;
        }
    }

    switch (style) {
        case 1:
            res = baseResult * 1.45;
            break;
        case 2:
            res = baseResult * 1.1;
            break;
        case 3:
            res = baseResult * 1.2;
            break;
        case 4:
            res = baseResult * 1.3;
            break;
        case 5:
            res = baseResult * 1.4;
            break;
    }
    
    if (difficultDetails.checked == true) {
        res += res * 0.2;
    }

    if (varnishCoating.checked) {

        switch (sum) {
            case 60: {
                res += 300;
                break;
            }
            case 70: {
                res += 350;
                break;
            }
            case 80: {
                res += 400;
                break;
            }
            case 90: {
                res += 450;
                break;
            }
            case 100: {
                res += 500;
                break;
            }
            case 110: {
                res += 550;
                break;
            }
            case 120: {
                res += 600;
                break;
            }
            case 130: {
                res += 650;
                break;
            }
            case 140: {
                res += 700;
                break;
            }
            case 150: {
                res += 750;
                break;
            }
            case 160: {
                res += 800;
                break;
            }
            case 170: {
                res += 900;
                break;
            }
            case 180: {
                res += 1000;
                break;
            }
            case 190: {
                res += 1100;
                break;
            }
            case 200: {
                res += 1200;
                break;
            }
            case 210: {
                res += 1300;
                break;
            }
            case 220: {
                res += 1400;
                break;
            }
            case 230: {
                res += 1500;
                break;
            }
            case 240: {
                res += 1600;
                break;
            }
            case 250: {
                res += 1700;
                break;
            }
            case 260: {
                res += 1800;
                break;
            }
            case 270: {
                res += 1900;
                break;
            }
            case 280: {
                res += 2000;
                break;
            }
            case 290: {
                res += 2200;
                break;
            }
            case 300: {
                res += 2400;
                break;
            }
            case 310: {
                res += 2600;
                break;
            }
            case 320: {
                res += 2800;
                break;
            }
            case 330: {
                res += 3000;
                break;
            }
            case 340: {
                res += 3200;
                break;
            }
            case 350: {
                res += 3400;
                break;
            }
            case 360: {
                res += 3600;
                break;
            }
            case 370: {
                res += 3800;
                break;
            }
            case 380: {
                res += 4000;
                break;
            }
            case 390: {
                res += 4200;
                break;
            }
            case 400: {
                res += 4400;
                break;
            }
            default: {
                res += 2000;
                break;
            }
        }
    }

    if (bracketsForInstallation.checked) {

        if (sum < 110) {
            res += 200;
        }
        else if (sum >= 100 && sum <= 150) {
            res += 300;
        }
        else if (sum >= 160 && sum <= 210) {
            res += 500;
        }
        else if (sum >= 220 && sum <= 260) {
            res += 750;
        }
        else if (sum >= 270 && sum <= 340) {
            res += 800;
        }
        else if (sum >= 350 && sum <= 400) {
            res += 900;
        }
    }

    if (frame.checked) {
        framePrice = baseResult * 0.15;
        res += framePrice;
    }

    res = Math.round(res);

    thousands = Math.floor(res / 1000);
    hundreds = Math.round(res - thousands * 1000);

    if (hundreds == 0) {
        hundreds = "000"
    }
    else if (hundreds < 100) {

        if (hundreds < 10) {
            hundreds = "00" + hundreds.toString();
        }
        else {
            hundreds = "0" + hundreds.toString();
        }       
    }
    document.getElementById('result_output').innerHTML = thousands + " " + hundreds;
}

portrait.addEventListener('click', function () {
    calculate();
});
landscape.addEventListener('click', function () {
    calculate();
});
stilLife.addEventListener('click', function () {
    calculate();
});
copyOfPainting.addEventListener('click', function () {
    calculate();
});
personalComposition.addEventListener('click', function () {
    calculate();
});

heightPainting.addEventListener('change', function () {
    calculate();
});
widthPainting.addEventListener('change', function () {
    calculate();
});

difficultDetails.addEventListener('change', function () {
    calculate();
});
varnishCoating.addEventListener('change', function () {
    calculate();
});
frame.addEventListener('change', function () {
    calculate();
});
bracketsForInstallation.addEventListener('change', function () {
    calculate();
});