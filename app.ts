let speed: number = 1.0

const changeSlide = (): void => {
    let slider: any = document.getElementById("myRange");
    let output: any = document.getElementById("demo");
    output.innerHTML = slider.value;
    speed = slider.value / 75
}

const ctx: AudioContext = new AudioContext();
let audio: any;


const getSong = (song: string) => {
    fetch('./music/' + song + '.mp3')
    .then(data => data.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
        audio = decodedAudio;
    });
    playback(audio);
}

const playback = (audio: any) => {
    const playSound: AudioBufferSourceNode = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.playbackRate.value = speed;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
}