/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Resultemoji extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("resultEmoji", "./Resultemoji/costumes/resultEmoji.png", {
        x: 120,
        y: 120
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveResult() {
    this.visible = true;
    yield* this.sayAndWait(
      "" + "You made " + ("" + this.stage.vars.moves + " moves!"),
      2
    );
    this.say("Minimum number of moves are 13!! ");
  }
}
