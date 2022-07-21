import { ContainerModal, Modal, Div1 } from "../../pages/Dashboard/style"
import { ContainerForm, StyledForm, InputDiv, Input, Button } from "../../pages/signUp/style"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Service/api";


export default function ModalComponent({stackList, setStackList,displayModal, hideModal}){

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
    
      const token = JSON.parse(localStorage.getItem("@token"));
    
      const onSubmitFunction = ({ title, status }) => {
        const newStack = { title, status };
        api
          .post("/users/techs", newStack, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
           console.log(response)
           hideModal()
          })
          .catch((err) => console.log(err));
      };

    return (
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
    )
}