import { ContainerDashboardSection, ContainerInside } from "../../pages/Dashboard/style";
import { ButtonReturn } from "../../pages/signUp/style";
import { useHistory } from "react-router-dom";
import LogoImg from '../../assets/Logo.png'
export default function DashHeader(){
    const history = useHistory()
    function logout() {
        localStorage.clear();
        history.push("/signIn");
      }

    return (
        <ContainerDashboardSection borderbottom="2px solid #212529">
        <ContainerInside myPadd="20px 15px">
          <img src={LogoImg} alt="Logo"></img>
          <ButtonReturn onClick={() => logout()}>Logout</ButtonReturn>
        </ContainerInside>
      </ContainerDashboardSection>
    );
};
