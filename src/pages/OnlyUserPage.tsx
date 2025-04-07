import { useEffect, useState } from 'react';
import Main from '../components/molecules/Main';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoil/authState';
import UnAuthorized from './401';
import axios from 'axios';
import { needTokenAxios } from '../utils/apiUtils';
import { RESTApiMethod } from '../constants/enum';

// 시간이 많았다면 해당 검증이 필요한 해당 페이지를 컴포넌트화했을 듯
export default function OnlyUserPage() {
  const [isLogin, setIsLogin] = useState(false);
  const { isLoggedIn } = useRecoilValue(authState);
  useEffect(() => {
    setIsLogin(isLoggedIn);
  }, []);

  //   ---- 로그인 되었다면, 요청 보내기
  const [serverRes, setServerRes] = useState('');
  useEffect(() => {
    if (isLogin)
      needTokenAxios(RESTApiMethod.GET, '/test')
        .then((res) => {
          console.log('res', res);
          setServerRes(res.data);
        })
        .catch((err) => {
          console.log('errrrr', err);
        });
  }, [isLogin]);
  if (!isLogin) return <UnAuthorized />;

  return (
    <Main>
      <div>로그인된 user만 가능한 api 요청</div>
      <p>
        server response data: <b>{serverRes}</b>
      </p>
    </Main>
  );
}
