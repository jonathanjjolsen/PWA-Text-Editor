const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    console.log('Before Install')
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if(choiceResult.outcome === 'accepted') {
            console.log('User accepted the prompt');
        }
        deferredPrompt = null;
    })
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App has been installed.')
});

function prompt(){
    alert('You can install this program by clicking the install button to the left.')
}
