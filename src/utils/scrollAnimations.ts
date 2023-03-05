import { Animation, batch, Fade, FadeIn, Move, Sticky, StickyIn, ZoomIn } from 'react-scroll-motion';

export const Spin = (cycle: number) =>
  ({
    in: {
      style: {
        // `p` is number (0~1)
        // When just before this page appear, `p` will be 0
        // When this page filled your screen, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        // `p` is number (0~1)
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
  } as Animation);

export const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

export const FadeUp = batch(Fade(), Move(), Sticky());
