const socket = io();


// Elements
// Form
const $messageForm = document.querySelector('#message-form');

// Input
const $messageFormInput = $messageForm.querySelector('input');

// Buttons
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#send-location');

// Messages
const $messages = document.querySelector('#messages');

// Templates
const $messageTemplate = document.querySelector('#message-template').innerHTML
const $locationMessageTemplate = document.querySelector('#location-message-template').innerHTML


// Socket
socket.on('message', (message) => {
    console.log(message);
    const html = Mustache.render($messageTemplate, {
        message
    });
    $messages.insertAdjacentHTML('beforeend', html);
}); 


socket.on('locationMessage', (url) => {
    console.log(url)
    const html = Mustache.render($locationMessageTemplate, {
        url
    });
    $messages.insertAdjacentHTML('beforeend', html);
});


$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    $messageFormButton.setAttribute('disabled', 'disabled');

    const message = e.target.elements.message.value;

    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled');
        $messageFormInput.value = '';
        $messageFormInput.focus();

        if (error) {
            return console.error(error);
        };

        console.log('Message delivered');
    });
});


$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser');
    };
    
    $sendLocationButton.setAttribute('disabled', 'disabled');

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longtitude: position.coords.longitude
        }, () => {
            $sendLocationButton.removeAttribute('disabled');
            console.log('Location shared');
        });
    });
});