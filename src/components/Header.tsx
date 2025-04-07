import { Link } from 'react-router-dom';
import Container from './atoms/Container';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/authState';
import useLogout from '../hooks/useLogout';

export default function Header() {
  const { isLoggedIn } = useRecoilValue(authState);

  const headerLinks = isLoggedIn
    ? [
        { href: '/', text: '홈으로' },
        { href: '/isLogin', text: 'user 테스트' },
        { href: '/test', text: '404 테스트' },
        {
          href: process.env.REACT_APP_API_SERVER || '/',
          text: 'api 확인',
        },
      ]
    : [
        { href: '/', text: '홈으로' },
        { href: '/signin', text: '로그인' },
        { href: '/signup', text: '회원가입' },
        { href: '/test', text: '404 테스트' },
        {
          href: process.env.REACT_APP_API_SERVER || '/',
          text: 'api 확인',
        },
      ];

  const doLogout = useLogout();
  return (
    <header className=" bg-red-100">
      <Container className="flex justify-between h-20 items-center">
        <span>TODO!</span>
        <ul className="flex justify-end ">
          {headerLinks.map((l) => (
            <li className="mr-6 cursor-pointer" key={l.text}>
              <Link to={l.href}>{l.text}</Link>
            </li>
          ))}
          {isLoggedIn && (
            <li onClick={doLogout} className="text-red-600 cursor-pointer">
              로그아웃
            </li>
          )}
        </ul>
      </Container>
    </header>
  );
}
