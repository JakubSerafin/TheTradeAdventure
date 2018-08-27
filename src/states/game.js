import GameLocation from "../actros/location"
class Game extends Phaser.State {

  constructor() {
    super();
    this.locations = [new GameLocation(100,100), new GameLocation(100,500), new GameLocation(500,500)]

  }

  create() {
    const text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);
    const locTextes = [];
    this.locations.forEach(l=>locTextes.push(this.add.text(l.Position.x,l.Position.y,"Location",{
      font: '42px Arial', fill: '#ffffff', align: 'center'})))

    //this.input.onDown.add(this.endGame, this);
  }

  update() {
      
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
