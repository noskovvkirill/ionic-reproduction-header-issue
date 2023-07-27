
import {
  Animation,
  createAnimation,
} from '@ionic/react';

type Opts = {
  enteringEl: HTMLElement | HTMLElement[] | Element | Element[];
  leavingEl: HTMLElement | HTMLElement[] | Element | Element[];
  direction: 'forward' | 'back';
};

// hides all svg items (icons)
const hideIconsFromHeaderAnimation = (
  leavingEl: HTMLElement | HTMLElement[] | Element | Element[],
): Animation => {
  const allSvg = leavingEl
    // @ts-expect-error
    ?.querySelector('ion-header')
    ?.querySelectorAll('#shelf-back-button');
  let animations = createAnimation();
  allSvg?.forEach((svg: any) => {
    const svgAnimation = createAnimation()
      .addElement(svg)
      .fromTo('opacity', 1, 0)
      .duration(0);
    animations = animations.addAnimation(svgAnimation);
  });
  return animations;
};

export const itemAnimation = (baseEl: any, opts: Opts) => {
  const enteringAnimation = createAnimation()
    .addElement(opts.enteringEl)
    .fromTo('opacity', 0, 1)
    .easing('ease-out')
    .duration(250);

  const leavingAnimation = createAnimation()
    .addElement(opts.leavingEl)
    .fromTo('opacity', 1, 0)
    .duration(50);

  const animation = createAnimation()
    .addAnimation(enteringAnimation)
    .addAnimation(leavingAnimation)
    .addAnimation(hideIconsFromHeaderAnimation(opts.leavingEl));
  return animation;
};