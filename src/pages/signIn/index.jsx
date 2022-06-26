import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Service/api";
import { useHistory } from "react-router-dom";
import LogoImg from "../../assets/Logo.png";
import { ContainerSignIn, LoginBtn, SignUpBtn } from "./style";

import {
  ContainerForm,
  InputDiv,
  StyledForm,
  Input,
} from "../signUp/style";

export default function SignIn() {

  const history = useHistory();

  function goDashboard() {
    history.push("/dashboard");
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail required").email("Invalid E-mail"),
    password: yup.string().required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/sessions", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@token", JSON.stringify(response.data.token));
        localStorage.setItem("@user", JSON.stringify(response.data.user));
        goDashboard();
      })
      .catch((err) => console.log(err));
  };

  function goBack() {
    history.push("/");
  }

  return (
    <ContainerSignIn>
      <img src={LogoImg} alt="Logo"></img>
      <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Login</h1>
        <StyledForm>
          <InputDiv>
            {errors.email?.message ? (
              <span>{errors.email.message}</span>
            ) : (
              <label>Email</label>
            )}
            <Input placeholder="Email" {...register("email")} />
            {errors.password?.message ? (
              <span>{errors.password.message}</span>
            ) : (
              <label>Password</label>
            )}{" "}
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <LoginBtn type="submit">Login</LoginBtn>
            <p>Don't have an account ?</p>
          </InputDiv>
        </StyledForm>
        <SignUpBtn onClick={() => goBack()}>Sign Up</SignUpBtn>
      </ContainerForm>
    </ContainerSignIn>
  );
}
