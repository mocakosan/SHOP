import { useMemo } from "react";
import * as Yup from "yup";

import { CustomForm } from "../components/CustomForm";
import { TextField } from "../components/TextField";

export const Login = () => {
  const initialValues = useMemo(() => {
    return {
      email: "",
      password: "",
    };
  }, []);
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("이메일을 입력해주세요.")
      .matches(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        "올바른 이메일 형식이 아닙니다."
      ),
    password: Yup.string()
      .required("비밀번호를 입력해주세요.")
      .matches(
        /^[0-9a-zA-Z]{8,}$/,
        "비밀번호는 영문/숫자만 가능, 8자 이상입니다."
      ),
  });

  const handleSubmit = async ({ values, actions }: any) => {
    alert("로그인 submit 완료");
  };

  return (
    <CustomForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 700,
      }}
    >
      <h2>로그인</h2>
      <div>
        <label>
          이메일:
          <TextField type="email" name="email" label="이메일" />
        </label>
      </div>
      <div>
        <label>
          비밀번호:
          <TextField type="password" name="password" label="비밀번호" />
        </label>
      </div>

      <button type="submit" style={{ width: 60, marginTop: 30 }}>
        로그인
      </button>
    </CustomForm>
  );
};
