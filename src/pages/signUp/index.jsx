import {
  ButtonReturn,
  Container,
  ContainerForm,
  InputDiv,
  StyledForm,
  Input,
  Button,
  DivHeader,
} from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Service/api";
import { useHistory } from "react-router-dom";
import LogoImg from "../../assets/Logo.png";
import { toast } from 'react-toastify';


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
      .min(6, "6 characters minimum"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    bio: yup.string().required("Required Field!"),
    contact: yup.string().required("Required Field!"),
    course_module: yup.string().required("Please select an option"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({
    name,
    email,
    course_module,
    bio,
    contact,
    password,
  }) => {
    const user = {
      name,
      email,
      course_module,
      bio,
      contact,
      password,
    };

    api
      .post("/users", user)
      .then((response) => {
        console.log(response);
        toast.success("Congratulations! Account created!")
        history.push("/signIn");
      })
      .catch((err) => {
        console.log(err)
        toast.error("Something went wrong! Verify and try again")
      });
  };

  const history = useHistory();

  function handleClick() {
    history.push("/signIn");
  }

  return (
    <Container>
      <DivHeader>
        <img src={LogoImg} alt="logo" />
        <ButtonReturn onClick={() => handleClick()}>
          Return
        </ButtonReturn>
      </DivHeader>

      <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Create your account</h1>
        <p>Free and Fast, Let's go!</p>
        <StyledForm>
          <InputDiv>
            {errors.name?.message ? (
              <span>{errors.name.message}</span>
            ) : (
              <label>Name</label>
            )}
            <Input placeholder="Name" {...register("name")} />

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
            )}
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            {errors.confirmPassword?.message ? (
              <span>{errors.confirmPassword.message}</span>
            ) : (
              <label>Confirm Password</label>
            )}
            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />

            {errors.bio?.message ? (
              <span>{errors.bio.message}</span>
            ) : (
              <label>About you</label>
            )}
            <Input placeholder="Teel us about you" {...register("bio")} />

            {errors.contact?.message ? (
              <span>{errors.contact.message}</span>
            ) : (
              <label>Contact</label>
            )}
            <Input placeholder="Contact" {...register("contact")} />

            {errors.module?.message ? (
              <span>{errors.module.message}</span>
            ) : (
              <label>Select Module</label>
            )}
            <select {...register("course_module")}>
              <option value="Choose your course module">
                Choose your course module
              </option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>

            <Button type="submit"> Sign Up</Button>
          </InputDiv>
        </StyledForm>
      </ContainerForm>
    </Container>
  );
}
