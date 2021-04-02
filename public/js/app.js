$('#contact-form').submit(function(e){
    // Prevent reload
    e.preventDefault();
    
    // Obtaining the form data
    let formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries());

    fetch('/contacto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)

    }).then((res) => {
        console.log(res.status)
        this.reset()
        showMessage('success')
    }).catch((err) => {
        console.log(err)
        showMessage('fail')
    });
});

const showMessage = (status) => {
    $('#contact-form').addClass('d-none')
    $('#message-container').removeClass('d-none')

    if (status === 'success') {    
        $('#message-title').text('Enviado correctamente')
        $('#message-body').text('Nos pondremos en contacto contigo pronto!')
        $('#message-button').text('Nuevo formulario')
    } else {
        $('#message-title').text('Algo salió mal')
        $('#message-body').text('Parece que estamos teniendo problemas, intenta enviar el formulario más tarde.')
        $('#message-button').text('Intentar de nuevo')
    }
}

const showContactForm = () => {
    $('#contact-form').removeClass('d-none')
    $('#message-container').addClass('d-none')
}