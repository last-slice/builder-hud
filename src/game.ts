import { hud } from "./builderhud/BuilderHUD"



var box = new Entity("Box")
box.addComponent(new BoxShape())
box.addComponent(new Transform({position: new Vector3(6.626,3.1,8.9), rotation: Quaternion.Euler(49.385,158.434,347.608), scale: new Vector3(3.6,3.9,3)}))
engine.addEntity(box)
hud.attachToEntity(box)


var box2 = new Entity("Box2")
box2.addComponent(new BoxShape())
box2.addComponent(new Transform({position: new Vector3(6.626,3.1,8.9), rotation: Quaternion.Euler(49.385,158.434,347.608), scale: new Vector3(3.6,3.9,3)}))
engine.addEntity(box2)
hud.attachToEntity(box2)