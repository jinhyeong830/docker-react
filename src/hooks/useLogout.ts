// 예시: 로그아웃 버튼 클릭 시
import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import { authState } from '../recoil/authState';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const setAuth = useSetRecoilState(authState);
  const navigate = useNavigate();
  return () => {
    Cookies.remove('token');
    Cookies.remove('userId'); // 혹시 따로 저장했으면
    setAuth({
      isLoggedIn: false,
      token: null,
      userId: null,
    });
    navigate('/');
  };
};

export default useLogout;
