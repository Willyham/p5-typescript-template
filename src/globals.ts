import p5 from "p5";

export let emptyVector: p5.Vector = null;
export let width = 0;
export let height = 0;
export let isDebugMode = false;
export let isPaused = false;
export const isProduction = process.env.NODE_ENV === "production";

export const setValues = (p: p5): void => {
  emptyVector = p.createVector(0, 0);
  width = p.windowWidth;
  height = p.windowHeight;
  isDebugMode = true;
};

export const setDebugMode = (mode: boolean): void => {
  isDebugMode = mode;
};

export const setPaused = (paused: boolean): void => {
  isPaused = paused;
};
