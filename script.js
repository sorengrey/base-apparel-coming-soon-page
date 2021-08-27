//function that checks if user entry is a valid email address
function checkEmail(value) {
    // selects the email input field's value
    var value = $('input[name=email]').val();
    // regex
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if value is not an email address, unhide the red error text
    if(!re.test(value)){
        var errorMsg = document.querySelector('.error');
        errorMsg.style.display = "block";
    }
}