import { Link, useNavigate } from 'react-router-dom';
import { FormType } from '../constants/enum';
import Form from '../components/organism/Form';
import Main from '../components/molecules/Main';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/authState';

export default function SignIn() {
  const { isLoggedIn } = useRecoilValue(authState);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate('/');
    }
  }, []);
  return (
    <Main>
      <div className="h-40"></div>

      <Form type={FormType.SIGNIN} />

      <div className="text-center mt-10">
        <p>회원가입을 아직 안하셨나요?</p>
        <p>
          <span className="cursor underline text-teal-500">
            <Link to="/signup">회원가입</Link>
          </span>{' '}
          페이지로 이동하기
        </p>
      </div>
    </Main>
  );
}
