var checkExist = setInterval(function() {
    if ($('.eapps-link').length) {
        $('.eapps-link').remove();
       clearInterval(checkExist);
    }
}, 100)