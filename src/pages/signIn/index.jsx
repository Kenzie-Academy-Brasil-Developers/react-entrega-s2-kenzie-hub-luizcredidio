import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../Service/api';
import { useHistory } from "react-router-dom";

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
        formState: { errors }
      } = useForm({
        resolver: yupResolver(formSchema)
      });

      const onSubmitFunction = ({email, password}) => {
        const user = { email, password }
        api
        .post("/sessions", user)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
      };

     
        const history = useHistory();
      
        function handleClick() {
          history.push("/signUp");
        }

  return (
    <Container>
      <img src="../assets/Logo.png" alt="Logo"></img>
      <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Login</h1>
        <StyledForm>
          <InputDiv>

            <h3>Email</h3>
            <Input placeholder="Email" {...register("email")}/>
            {errors.email?.message && (<span>{errors.email.message}</span>)}
            <h3>Password</h3>
            <Input placeholder='Password' {...register("password")}/>
            {errors.email?.message && (<span>{errors.password.message}</span>)}
            <Button type="submit">Login</Button>

            <p>Don't have an account ?</p>

            <Button onClick={() => handleClick()}>Sign Up</Button>

          </InputDiv>
        </StyledForm>
      </ContainerForm>
    </Container>
  );
}
