import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Service/api";
import Card from "../../components";
import {
  ButtonReturn,
  Input,
  InputDiv,
  StyledForm,
  ContainerForm,
  Button,
} from "../signUp/style";
import { BsTrash } from "react-icons/bs";
import {
  ContainerModal,
  ContainerCards,
  PlusSign,
  ContainerDashboardSection,
  ContainerDashboard,
  ContainerInside,
  Paragraph,
  Modal,
  Div1,
} from "./style";
import LogoImg from "../../assets/Logo.png";
import { useState } from "react";

export default function Dashboard() {
  const [displayModal, setDisplayModal] = useState("none");

  const formSchema = yup.object().shape({
    title: yup.string().required("Field required"),
    status: yup.string().required("Please select an option"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const token = localStorage.getItem("@token");
  const userStorage = JSON.parse(localStorage.getItem("@token")) ;
  const tech = [
    {
        title: "React",
        status: "Iniciante"
    },
    {
        title: "React",
        status: "Iniciante"
    },
    {
        title: "React",
        status: "Iniciante"
    },
    {
        title: "React",
        status: "Iniciante"
    }

  ]

console.log(tech)
  const onSubmitFunction = ({ title, status }) => {
    const newStack = { title, status };
    api
      .post("/users/techs", newStack, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  function showModal() {
    setDisplayModal("flex");
  }

  function hideModal() {
    setDisplayModal("none");
  }

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("@user"));
  const style = { cursor: "pointer" };

  function plus() {
    console.log("deu certo");
  }

  function logout() {
    localStorage.clear();
    history.push("/signIn");
  }
  return (
    <ContainerDashboard>
      <ContainerDashboardSection borderbottom="2px solid #212529">
        <ContainerInside myPadd="20px 15px">
          <img src={LogoImg} alt="Logo"></img>
          <ButtonReturn onClick={() => logout()}>Logout</ButtonReturn>
        </ContainerInside>
      </ContainerDashboardSection>

      <ContainerDashboardSection borderbottom="2px solid #212529">
        <ContainerInside myPadd="35px 15px" flxWrapp="wrap">
          <h1>Olá, {user.name}</h1>
          <Paragraph mySize={12} myColor="grey">
            {user.course_module}
          </Paragraph>
        </ContainerInside>
      </ContainerDashboardSection>

      <ContainerDashboardSection>
        <ContainerInside myPadd="20px 15px">
          <Paragraph mySize={16} myColor="whitesmoke">
            Stacks
          </Paragraph>
          <PlusSign onClick={() => showModal()}>+</PlusSign>
          <ContainerModal display={displayModal}>
            <Modal display={displayModal}>
              <Div1>
                <p>Add new stack</p>
                <button onClick={() => hideModal()}>x</button>
              </Div1>
              <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
                <StyledForm>
                  <InputDiv>
                    {errors.title?.message ? (
                      <span>{errors.title.message}</span>
                    ) : (
                      <label>Name</label>
                    )}
                    <Input
                      placeholder="Ex: 'Typescript"
                      {...register("title")}
                    />
                    {errors.status?.message ? (
                      <span>{errors.status.message}</span>
                    ) : (
                      <label>Level</label>
                    )}
                    <select {...register("status")}>
                      <option value="Iniciante">Beginner</option>
                      <option value="Intermediário">Intermediate</option>
                      <option value="Avançado">Advanced</option>
                    </select>
                    <Button type="submit">Add stack</Button>
                  </InputDiv>
                </StyledForm>
              </ContainerForm>
            </Modal>
          </ContainerModal>
        </ContainerInside>
      </ContainerDashboardSection>

      <ContainerDashboardSection borderbottom="2px solid #212529">
        <ContainerInside myPadd="20px 15px">
          <ContainerCards>
            {tech?.map((techno, index)=> (
                <Card key={index} title={techno.title} status={techno.status}>
                    
                </Card>
            ))}
         </ContainerCards>
        </ContainerInside>
      </ContainerDashboardSection>
    </ContainerDashboard>
  );
}
