import { DESIGN } from '@/utils/constants';

// Модуль экранный помощник
const ScreenHelper = (() => {
  /* eslint-disable no-unused-vars */
  const NAME = 'ScreenHelper';

  const MIN = DESIGN.BREAKPOINTS.min;
  const XS = DESIGN.BREAKPOINTS.xs;
  const SM = DESIGN.BREAKPOINTS.sm;
  const MD = DESIGN.BREAKPOINTS.md;
  const LG = DESIGN.BREAKPOINTS.lg;

  const isXS = () => {
    return window.matchMedia(`(max-width: ${SM - 1}px)`).matches;
  };

  const isSM = () => {
    return window.matchMedia(`(min-width: ${SM}px) and (max-width: ${MD - 1}px)`).matches;
  };

  const isGadgets = () => {
    return window.matchMedia(`(max-width: ${MD - 1}px)`).matches;
  };

  const isNotGadgets = () => {
    return window.matchMedia(`(min-width: ${MD}px)`).matches;
  };

  const isMD = () => {
    return window.matchMedia(`(min-width: ${MD}px) and (max-width: ${LG - 1}px)`).matches;
  };

  const isLG = () => {
    return window.matchMedia(`(min-width: ${LG}px)`).matches;
  };

  const getOrientation = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return 'portrait';
    } return 'landscape';
  };

  const getPixelRatio = () => {
    return window.devicePixelRatio
           || window.screen.deviceXDPI / window.screen.logicalXDPI;
  };

  const getScrollbarWidth = () => {
    const { body } = document;
    const bw1 = body.clientWidth;
    body.style.overflow = 'hidden';
    const bw2 = body.clientWidth;
    body.style.overflow = '';
    return bw2 - bw1;
  };

  return {
    MIN,
    XS,
    SM,
    MD,
    LG,
    isXS,
    isSM,
    isGadgets,
    isNotGadgets,
    isMD,
    isLG,
    getOrientation,
    getPixelRatio,
    getScrollbarWidth,
  };
})();

export default ScreenHelper;
