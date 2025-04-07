import Cookies from 'js-cookie';
import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: !!Cookies.get('token'),
    token: Cookies.get('token') || null,
    userId: Number(Cookies.get('userid')) || null,
  },
});
