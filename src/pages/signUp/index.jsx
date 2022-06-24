import {
  ButtonReturn,
  Container,
  ContainerForm,
  InputDiv,
  StyledForm,
  Input,
  Button,
} from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Service/api";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Type your name here")
      .matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i, "only letters are allowed"),
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Required field")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@!#]{8,}$/,
        `
        Must contain: 
            1 Capital Letter
            1 Lowercase Letter
            1 Special character
            1 Number
            8 Character minimum
        `
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
      bio: yup.string().required('Required Field!').min(50, '50 letters minimum'),
      contact: yup.string().required('Required Field!')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ id, name, email, course_module, bio, contact, created_at, update_at, avatar_url }) => {
    const user = { id, name, email, course_module, bio, contact, created_at, update_at, avatar_url };
    console.log(user)
   
    // api
    //   .post("/users", user)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };

  const history = useHistory();

  function handleClick() {
    history.push("/signUp");
  }

  return (
    <Container>
      <img src="../assets/logo.png" alt="logo" />
      <ButtonReturn onClick={()=> handleClick('/signIn')}>Return</ButtonReturn>
      <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Create your account</h1>
        <p>Free and Fast, Let's go!</p>
        <StyledForm>
          <InputDiv>
            <h3>Name</h3>
            <Input placeholder="Name" {...register("name")}/>
            {errors.name?.message && (<span>{errors.name.message}</span>)}

            <h3>Email</h3>
            <Input placeholder="Email" {...register("email")}/>
            {errors.email?.message && (<span>{errors.email.message}</span>)}

            <h3>Password</h3>
            <Input placeholder="Password" {...register("password")}/>
            {errors.password?.message && (<span>{errors.password.message}</span>)}

            <h3>Confirm Password</h3>
            <Input placeholder="Confirm Password" {...register("ConfirmPassword")}/>
            {errors.ConfirmPassword?.message && (<span>{errors.ConfirmPassword.message}</span>)}

            <h3>About you</h3>
            <Input placeholder="Teel us about you" {...register("bio")}/>
            {errors.bio?.message && (<span>{errors.bio.message}</span>)}

            <h3>Contact</h3>
            <Input placeholder="Contact" {...register("contact")}/>
            {errors.contact?.message && (<span>{errors.contact.message}</span>)}

            <h3>Select Module</h3>
            <select >
            <option selected value='Choose your course module'>Choose your course module</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>

            <Button type="submit"> Sign Up</Button>
          </InputDiv>
        </StyledForm>
      </ContainerForm>
    </Container>
  );
}
