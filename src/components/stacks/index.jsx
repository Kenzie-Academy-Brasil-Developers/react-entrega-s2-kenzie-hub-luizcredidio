import ModalComponent from "../Modal/index"
import { ContainerDashboardSection, ContainerInside, Paragraph } from "../../pages/Dashboard/style";
import { PlusSign } from "../../pages/Dashboard/style";

export default function StacksComponents({displayModal, hideModal, showModal, stackList, setStackList} ){
  return (
    <ContainerDashboardSection>
      <ContainerInside myPadd="20px 15px">
        <Paragraph mySize={16} myColor="whitesmoke">
          Stacks
        </Paragraph>
        <PlusSign onClick={() => showModal()}>+</PlusSign>
        <ModalComponent setStackList={setStackList} stackList={stackList} displayModal={displayModal} hideModal={hideModal} />
      </ContainerInside>
    </ContainerDashboardSection>
  );
}
