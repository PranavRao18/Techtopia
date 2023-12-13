console.log("Called");

loadParticlesJS = () => {
    console.log('particlesJS:', particlesJS);
    particlesJS.load('particles-js', '/particlesjs-config.json', function() {
        console.log('callback - particles-js config loaded');
    });
};

if (typeof particlesJS !== 'undefined') {
    loadParticlesJS();
} else {
    document.addEventListener('DOMContentLoaded', loadParticlesJS);
}

