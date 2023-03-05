import { atom } from 'recoil';

export const PositionY = atom<number>({
  key: '#show_tab',
  default: 0,
});

export const Mode = atom<string>({
  key: '#mode',
  default: 'light',
});
