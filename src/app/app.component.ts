import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app-root',
  template: `<button (click)="getSong('Ivy')">Ivy</button>
             <button (click)="getSong('Gabby')">Gabby</button>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lofi-Spotify';
  ctx: AudioContext = new AudioContext();
  audio: any;
  
  getSong = (song: string): void => {
      fetch('./assets/music/Ivy.mp3')
      .then(data => data.arrayBuffer())
      .then(arrayBuffer => this.ctx.decodeAudioData(arrayBuffer))
      .then(decodedAudio => {
          this.audio = decodedAudio;
      });
      this.playback(this.audio);
  }

  playback = (audio: any) => {
    const playSound: AudioBufferSourceNode = this.ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.playbackRate.value = 0.85;
    // console.log(playSound);
    playSound.connect(this.ctx.destination);
    playSound.start(this.ctx.currentTime);
  }

}
