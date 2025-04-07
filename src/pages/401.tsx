import { Link } from 'react-router-dom';
import Heading1 from '../components/atoms/Heading1';
import Main from '../components/molecules/Main';

export default function UnAuthorized() {
  return (
    <Main isCenter>
      <Heading1 className="text-red-400 mt-20" isCenter>
        로그인된 user만 사용가능한 페이지입니다.
      </Heading1>
      <p>
        <Link to={'/login'} className="text-teal-400 underline">
          로그인
        </Link>
        하러 가기
      </p>
    </Main>
  );
}
