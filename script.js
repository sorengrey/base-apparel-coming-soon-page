//function that checks if user entry is a valid email address
function checkEmail(value) {
    // selects the email input field's value
    var value = $('input[name=email]').val();
    // regex
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if value is not an email address...
    if(!re.test(value)){
        var errorMsg = document.querySelector('.error');
        var exPoint = document.querySelector('.exclamation');
        var input = document.querySelector('input');
        // unhide the error message
        errorMsg.style.display = "block";
        // unhide the exclamation point
        exPoint.style.display = "block";
        // turn the border around the input field red
        input.style.border = "2px solid #F96464";
    }
}