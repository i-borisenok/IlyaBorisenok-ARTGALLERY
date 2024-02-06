
const logoAndName = document.getElementById('Logo-and-name');
const parents = document.getElementsByClassName('Modal-header');

for (index = 0; index < parents.length; index++) {
    var logoAndNameCopy = logoAndName.cloneNode(true);
    parents[index].appendChild(logoAndNameCopy);
}

const email = document.getElementById('CopyEmail');
email.addEventListener('click', () => copyEmail());

const phone = document.getElementById('CopyPhone');
phone.addEventListener('click', () => copyPhone());

function copyEmail() {
    navigator.clipboard.writeText('i-borisenok@mail.ru').then(() => {
        let message = document.getElementById('Email-message');
        message.style.display = 'block';
    });
}
function copyPhone() {
    navigator.clipboard.writeText('8-920-886-63-97').then(() => {
        let message = document.getElementById('Phone-message');
        message.style.display = 'block';
    });
}