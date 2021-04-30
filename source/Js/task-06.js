const input = document.getElementById('validation-input');

function validate(e) {
    e.currentTarget.className = '';
    if (e.currentTarget.value.length === parseInt(e.currentTarget.dataset.length)) {
        return e.currentTarget.className = 'valid';
    }
    return e.currentTarget.className = 'invalid';
}
input.addEventListener('blur', validate)


