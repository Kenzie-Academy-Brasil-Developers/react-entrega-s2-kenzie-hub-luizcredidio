import { ButtonReturn, Container, ContainerForm } from "../signUp/style";
import { ContainerCards } from "./style";

export default function Dashboard(){
    return (
        <Container>
            <div>
                <img src="./assets/Logo.png" alt="Logo"/>
                <ButtonReturn>Sair</ButtonReturn>
            </div>

            <div>
                <h1>teste</h1>
                <p>teste</p>
            </div>

            <div>
                <h2>Tecnologias</h2>
                <span>+ </span>

                <ContainerCards>
                    
                </ContainerCards>
            </div>
        </Container>
    )
}