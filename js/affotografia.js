var checkExist = setInterval(function() {
    if ($('.eapps-link').length) {
        $('.eapps-link').remove();
       clearInterval(checkExist);
    }
}, 100)

var inputDate = document.getElementById('input-date')

if(inputDate) {

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

    inputDate.setAttribute('min', today);
}

// If pagination exists we execute the code 
if($('.page-numbers').length > 0){
    // Setting active
    $('span.page-numbers').addClass('pagination-number-active')
    $('.page-numbers').hover(
        //Removing active from all elements on hover
        () => {
            $('span.page-numbers').removeClass('pagination-number-active')
            $('span.page-numbers').addClass('pagination-number')
        },
        //Adding active to the corresponding element on mouse leave
        () => {
            $('span.page-numbers').addClass('pagination-number-active')
        }
    );
}