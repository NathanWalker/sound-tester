import {Observable} from "data/observable";
var sound = require("nativescript-sound");

export class Jukebox extends Observable {
  private playing: boolean = false;
  private bling: any;
  private counter: number = 0;

  constructor() {
    super();
    this.set(`playTxt`, `Play Bling`);
  }
  
  public playSound() {
    if (!this.playing) {
      this.bling = sound.create(`~/sounds/hotline-bling.mp3`);
      this.bling.play();
    } else if (this.bling) {
      this.bling.stop();
    }
    this.togglePlaying();
  }
  
  private togglePlaying() {
    this.playing = !this.playing;
    this.set(`playTxt`, `${this.playing ? 'Stop' : 'Play'} Bling`);
  }


};