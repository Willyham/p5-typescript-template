import p5 from "p5";

export let emptyVector: p5.Vector = null;
export let width: number = 0;
export let height: number = 0;
export let isDebugMode: boolean = false;
export let isPaused: boolean = false;

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
