import p5 from "p5";
import { isDebugMode, isPaused, setDebugMode, setPaused } from "./globals";

export const handleKeyPress = (p: p5, keyCode: number): void => {
  // Show debug mode when 'd' is pressed.
  if (keyCode === 68) {
    setDebugMode(!isDebugMode);
  }
  // Pause when space is pressed
  if (keyCode === 32) {
    setPaused(!isPaused);
    if (!isPaused) {
      p.loop();
    }
    if (isPaused) {
      p.noLoop();
    }
  }
};
