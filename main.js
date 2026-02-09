onload = () =>{
    document.body.classList.remove("container");
// Add cherish-able background music
    const audio = new Audio();
    // Using a romantic royalty-free music URL
    audio.src = '';
    audio.loop = true;
    audio.volume = 0.3;
    
    // Try to play the music
    audio.play().catch(error => {
        console.log('Auto-play was prevented. Click anywhere to play music.');
        // If autoplay is blocked, play on first user interaction
        document.body.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });
};