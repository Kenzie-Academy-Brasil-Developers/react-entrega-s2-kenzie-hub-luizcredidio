import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Service/api";
import { useHistory } from "react-router-dom";
import LogoImg from "../../assets/Logo.png";
import { ContainerSignIn, LoginBtn, SignUpBtn } from "./style";

import {
  Container,
  ContainerForm,
  InputDiv,
  StyledForm,
  Input,
  Button,
} from "../signUp/style";

export default function SignIn() {
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
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const history = useHistory();

  function handleClick() {
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
            <Input type='password' placeholder="Password" {...register("password")} />
            <LoginBtn type="submit">Login</LoginBtn>
            <p>Don't have an account ?</p>
          </InputDiv>
        </StyledForm>
        <SignUpBtn onClick={() => handleClick()}>Sign Up</SignUpBtn>
      </ContainerForm>
    </ContainerSignIn>
  );
}
