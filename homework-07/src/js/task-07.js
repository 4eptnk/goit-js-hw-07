const slider = document.getElementById('font-size-control');
slider.addEventListener('input', function () {
    var size = slider.value;
    document.getElementById('text').style.fontSize = size + "px";
});