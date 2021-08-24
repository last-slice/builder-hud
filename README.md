## BuilderHUD
Positioning entities in the sdk can be very difficult - always guessing the x,y,z of something. Well look no further! We have created a visual remote (based of Carl Farvel's original design) to help us position items in the sdk preview just like the Builder tool!
- Move entities visually within the sdk local previewer
- Save their PRS (position, rotation, scale) to the browser Console for you to easily copy / paste into your code
- Add the hud to as many entities as you want!


### Setup
- Download this repo / zip file to your computer
- Navigate to the src folder
- copy / paste the ENTIRE builderHUD folder into your Scene folder -> src folder


### Attaching the hud to entities
- inside your scene code, make sure to import the hud code at the top of your code file
  code

```
import { hud } from "./builderhud/BuilderHUD"
```
  
- Make sure your entities have a "name" for them. This will make it easier to choose which entity you are modifying in the BuilderHUD tool. Naming an entity is easy; pass a string value "name" into the Entity(). Below, we are naming our entity "Box".
```
var box = new Entity("Box")
```

- After you give your entity the Transform() component AND add it to the engine, then we can add the entity variable to the hud!
```
var box = new Entity("Box")
box.addComponent(new BoxShape())
box.addComponent(new Transform({position: new Vector3(6.626,3.1,8.9), rotation: Quaternion.Euler(49.385,158.434,347.608), scale: new Vector3(3.6,3.9,3)}))
engine.addEntity(box)
hud.attachToEntity(box)
```
