import { ContainerDashboardSection, ContainerInside, Paragraph } from "../../pages/Dashboard/style";

export default function InfoComponent({user}){

    return (
        <ContainerDashboardSection borderbottom="2px solid #212529">
        <ContainerInside myPadd="35px 15px" flxWrapp="wrap">
          <h1>Olá, {user.name}</h1>
          <Paragraph mySize={12} myColor="grey">
            {user.course_module}
          </Paragraph>
        </ContainerInside>
      </ContainerDashboardSection>
    );
};
