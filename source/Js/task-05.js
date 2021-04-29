const input = document.getElementById('name-input')
input.addEventListener('input', function(e) {
    var span = document.getElementById('name-output')
    if (e.target.value.length > 0) {
        span.textContent = e.target.value;
    } else {
        span.textContent = 'незнакомец';
    };
})
