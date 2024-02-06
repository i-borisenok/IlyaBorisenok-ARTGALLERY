
const date = document.getElementById('Date');
function format(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

var today = new Date();
var minDate = new Date(new Date().setDate(today.getDate() - 18000));
var maxDate = new Date(new Date().setDate(today.getDate() + 18000));

date.value = format(today);
date.min = format(minDate);
date.max = format(maxDate);


/*///////////IMAGE UPLOADER start///////////*/

var images = document.querySelectorAll('.Image-upload');

for (let i = 0; i < images.length; i++) {

    let image = images[i];
    imageInput = image.getElementsByTagName('input')[0];
    imageInput.addEventListener('change', function () { showPreview(event, image) });
}

function showPreview(event, imagePreview) {

    let file;

    if (event.target.files.length > 0) {

        file = event.currentTarget.files[0];

        image = imagePreview.getElementsByClassName('Preview-image')[0];
        var parent = imagePreview.querySelectorAll('.Preview-image-div')[0];
        imagePreview.getElementsByTagName('a')[0].style.color = 'white';
        imagePreview.getElementsByTagName('svg')[0].style.display = 'none';

        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {

            image.style.backgroundImage = 'url(' + reader.result + ')';
            parent.style.background = 'none';
        }
    }
}

function removeImage(imageUpload_id) {

    var imageUpload = document.getElementById(imageUpload_id);

    imageUpload.getElementsByTagName('a')[0].style.color = 'var(--color-feldgrau-light)';

    imageUpload.getElementsByTagName('svg')[0].style.display = 'block';

    image = imageUpload.getElementsByClassName('Preview-image')[0];
    image.style.backgroundImage = 'none';

    var parent = imageUpload.querySelectorAll('.Preview-image-div')[0];

    if (imageUpload_id == 'image_1') {
        parent.style.background = 'linear-gradient(235deg,var(--color-grey-dark),var(--color-greyred-medium))';
    }
    else {
        parent.style.background = 'linear-gradient(235deg,var(--color-greyred-light),var(--color-platinum-medium))';
    }

    imageUpload.getElementsByTagName('input')[0].value = '';
}

/*///////////IMAGE UPLOADER end///////////*/