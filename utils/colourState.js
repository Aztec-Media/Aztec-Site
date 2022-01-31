import { proxy } from 'valtio';

const colourState = proxy({
  bgColour: 'orange',
});

export { colourState };
