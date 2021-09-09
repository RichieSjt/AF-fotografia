var checkExist = setInterval(function() {
    if ($('.eapps-link').length) {
        $('.eapps-link').remove();
       clearInterval(checkExist);
    }
}, 100)

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if(dd < 10){
    dd = '0' + dd
}

if(mm < 10){
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

var inputDate = document.getElementById('input-date')

if(inputDate) {
    inputDate.setAttribute('min', today);
}