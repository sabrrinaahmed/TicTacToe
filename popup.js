document.querySelectorAll('.stylebutton').forEach(function(e) {
    e.addEventListener('click', function() {
        this.style.backgroundColor = "red";
    })
});
function submitButtonStyle(_this) {
    _this.style.backgroundColor = "red";}

/*document.addEventListener('DOMContentLoaded', function() {
    var changeColor = document.getElementById('xOut');

    changeColor.addEventListener('click', function() {
        ;
    }, false);
}, false);*/

