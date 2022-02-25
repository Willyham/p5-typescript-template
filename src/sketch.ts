import p5 from "p5";
import { setValues, isDebugMode, width, height, isProduction } from "./globals";
import { handleKeyPress } from "./keypress";

type Circle = {
  x: number;
  y: number;
  radius: number;
};

const sketch = (p: p5) => {
  setValues(p);

  const circles: Circle[] = [];

  p.keyPressed = () => {
    handleKeyPress(p, p.keyCode);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0, 0, 1);

    for (let i = 0; i < 10; i++) {
      circles.push({
        x: p.random(0, width),
        y: p.random(0, height),
        radius: p.random(10, 50),
      });
    }
  };

  p.draw = () => {
    p.background(0, 0, 0);

    if (isDebugMode && !isProduction) {
      // Render FPS as text
      p.push();
      p.fill(255, 255, 255);
      p.textSize(12);
      p.text(`${p.frameRate().toFixed(2)}fps`, 20, 20);
      p.pop();
    }

    p.push();
    circles.forEach((circle) => {
      circle.x += p.random(-5, 5);
      circle.y += p.random(-5, 5);
      p.fill(255, 255, 255);
      p.ellipse(circle.x, circle.y, circle.radius, circle.radius);
    });
    p.pop();
  };
};

new p5(sketch);
