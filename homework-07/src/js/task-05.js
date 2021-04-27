const input = document.getElementById('name-input')
input.addEventListener('input', function(e) {
    var span = document.getElementById('name-output')
    if (span.textContent = e.target.value) {
    } else {
        span.textContent = 'незнакомец';
    };
})
