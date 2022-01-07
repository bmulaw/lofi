const ctx = new AudioContext();
let audio;


const getSong = (song) => {
    fetch('./music/' + song + '.mp3')
        .then(data => data.arrayBuffer())
        .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {
            audio = decodedAudio;
        });

    const playback = () => {
        const playSound = ctx.createBufferSource();
        playSound.buffer = audio;
        playSound.playbackRate.value = 0.82;
        playSound.connect(ctx.destination);
        playSound.start(ctx.currentTime);
    }
    playback();
}

