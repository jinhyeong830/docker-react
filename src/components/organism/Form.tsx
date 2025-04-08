import { useForm } from "react-hook-form";
import InputText from "../atoms/InputText";
import LabelWithInput from "../molecules/LabelWithInput";
import "axios";
import { FormType } from "../../constants/enum";
import { classJoin } from "../../utils/utils";
import Button from "../atoms/Button";
import Heading2 from "../atoms/Heading2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authState } from "../../recoil/authState";
import { AuthInterface } from "../../interface/interface";
import Cookies from "js-cookie";

interface Props {
  type: FormType;
}
interface SubmitInterface {
  username: string;
  password: string;
  email: string;
}
export default function Form({ type }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SubmitInterface>();

  const navigate = useNavigate();
  // const [auth, setAuth] = useRecoilState(authState);
  const setAuth = useSetRecoilState(authState);

  const doLogin = async (submitData: SubmitInterface) => {
    const { data }: { data: AuthInterface } = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/auth/signin`,
      submitData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);

    // 토큰 쿠키 저장
    if (data.token && data.id) {
      Cookies.set("token", data.token);
      Cookies.set("userid", data.id.toString());
    }

    // 로그인 상태 저장
    setAuth({
      isLoggedIn: true,
      token: data.token || null,
      userId: data.id || null,
    });

    // 로그인 성공시 홈으로
    navigate("/");
  };

  const doRegister = async (submitData: SubmitInterface) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/auth/signup`,
      submitData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    navigate("/signin");
  };

  const submitSuccess = (data: SubmitInterface) => {
    console.log(data);
    try {
      type === FormType.SIGNIN ? doLogin(data) : doRegister(data);
    } catch (err: any) {
      console.error(err.status);
      if (err.status === 400) {
        alert("존재하는 email 입니다.");
      }
      reset(); // 폼
    }
  };

  const submitFail = (err: any) => {
    console.log(err);
  };

  return (
    <form
      className={classJoin(
        type === FormType.SIGNIN ? "bg-indigo-100" : "bg-amber-100",
        "shadow-md  shadow-[#ddddddc6] border border-[#dddddd95] rounded-md max-w-[500px] mx-auto px-20 py-14"
      )}
      onSubmit={handleSubmit(submitSuccess, submitFail)}
    >
      <Heading2 isCenter className="mb-10">
        {type}
      </Heading2>
      <div className="flex flex-col space-y-5">
        <LabelWithInput label="이메일" htmlFor="email">
          <InputText
            type="email"
            id="email"
            register={register("email", {
              onChange: () => {
                console.log("onchange ... ing");
              },
              required: true,
            })}
          />
        </LabelWithInput>
        {type === FormType.SIGNUP && (
          <LabelWithInput label="이름" htmlFor="username">
            <InputText
              type="text"
              id="username"
              register={register("username", {
                onChange: () => {
                  console.log("onchange ... ing");
                },
                required: true,
              })}
            />
          </LabelWithInput>
        )}
        <LabelWithInput label="비밀번호" htmlFor="password">
          <InputText
            type="password"
            id="password"
            register={register("password", {
              onChange: () => {
                console.log("onchange ... ing");
              },
              required: true,
            })}
          />
        </LabelWithInput>
      </div>

      {errors.email && "email 에 뭔가 에러가 있어요.."}
      {errors.password && "password 에 뭔가 에러가 있어요.."}
      {errors.username && "username 에 뭔가 에러가 있어요.."}
      <div className="text-center mt-10">
        <Button
          type="submit"
          className={classJoin(
            type === FormType.SIGNIN ? "bg-indigo-600" : "bg-amber-500"
          )}
        >
          {type === FormType.SIGNIN ? FormType.SIGNIN : FormType.SIGNUP}
        </Button>
      </div>
    </form>
  );
}
