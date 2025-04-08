import { useRecoilValue } from "recoil";
import Main from "../components/molecules/Main";
import { authState } from "../recoil/authState";

export default function Home() {
  const { isLoggedIn, userId } = useRecoilValue(authState);

  console.log(isLoggedIn);
  return (
    <>
      <Main>
        <h1>main page</h1>
        {isLoggedIn && "안녕하세요 id" + userId + "님!"}
        <p>CICD 테스트!</p>
      </Main>
    </>
  );
}
