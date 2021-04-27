const input = document.getElementById('validation-input');

function validate(e) {
    e.currentTarget.className = '';
    if (e.currentTarget.value.length != e.currentTarget.dataset.length) {
        return e.currentTarget.className = 'invalid';
    }
    return e.currentTarget.className = 'valid';
}
input.addEventListener('blur', validate)
