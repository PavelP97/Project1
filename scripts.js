function playMusic() {
    const audio = document.getElementById('background-music');
    audio.volume = 1.0; // Set volume to maximum
    audio.play().catch(function(error) {
        // Handle autoplay prevention errors
        console.log('Autoplay prevented: ', error);
    });
    // Optionally hide the button after clicking
    document.querySelector('.play-button').style.display = 'none';
}