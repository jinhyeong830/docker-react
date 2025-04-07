import { Link } from 'react-router-dom';
import Form from '../components/organism/Form';
import { FormType } from '../constants/enum';
import Main from '../components/molecules/Main';

export default function SignUp() {
  return (
    <Main>
      {/* <Heading1 isCenter >회원가입 페이지</Heading1> */}
      <div className="h-40"></div>

      <Form type={FormType.SIGNUP} />

      <div className="text-center mt-10">
        <p>이미 회원가입을 하셨나요?</p>
        <p>
          <span className="underline text-teal-500">
            <Link to="/signin">로그인</Link>
          </span>{' '}
          페이지로 이동하기
        </p>
      </div>
    </Main>
  );
}
