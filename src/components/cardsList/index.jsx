import { ContainerDashboardSection, ContainerInside, ContainerCards } from "../../pages/Dashboard/style";
import  Card  from '../../components/card/index'

export default function CardList({stackList, remove}){  

    return (
        <ContainerDashboardSection borderbottom="2px solid #212529">
        <ContainerInside myPadd="20px 15px">
          <ContainerCards>
            {stackList?.map((stack, index) => (
              <Card key={index} title={stack.title} status={stack.status} remove={remove} id={index}></Card>
            ))}
          </ContainerCards>
        </ContainerInside>
      </ContainerDashboardSection>
    );
};

