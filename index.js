import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Glasses from "./Glasses/Glasses.js";
import Button1 from "./Button1/Button1.js";
import Button2 from "./Button2/Button2.js";
import Resultemoji from "./Resultemoji/Resultemoji.js";
import A from "./A/A.js";
import B from "./B/B.js";
import C from "./C/C.js";
import D from "./D/D.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Glasses: new Glasses({
    x: 209,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 1
  }),
  Button1: new Button1({
    x: 4,
    y: -6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Button2: new Button2({
    x: 119,
    y: -139,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 3
  }),
  Resultemoji: new Resultemoji({
    x: -62,
    y: -33,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 4
  }),
  A: new A({
    x: 43,
    y: -52,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 8
  }),
  B: new B({
    x: -33,
    y: -52,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 7
  }),
  C: new C({
    x: 121,
    y: -49,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 5
  }),
  D: new D({
    x: -111,
    y: -52,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
