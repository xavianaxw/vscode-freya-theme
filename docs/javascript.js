import { breakpoints } from '../config';
import { WINDOW } from '../env';

// comments
const movementVariable = 40;

const move = (what, progress) => {
  const myAmt = progress + movementVariable;
  TweenMax.to(what, 0.3, { y: `${mvAmt}%`, overwrite: 5, force3D: true });
}

export default class Parallax {
  constructor(el) {
    this.el = el;
  }

  someFunction() {
    return true;
  }
}