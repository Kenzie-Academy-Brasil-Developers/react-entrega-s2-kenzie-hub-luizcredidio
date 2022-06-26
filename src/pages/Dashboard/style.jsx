import styled from "styled-components";

export const ContainerDashboard = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--greyFour);
  img {
    margin-bottom: 20px;
  }
  label {
    font-family: Inter;
    font-size: 12px;
    color: white;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--greyTwo);
  padding: 15px;
  border-radius: 4px;
`;

export const Card = styled.div`
  background-color: var(--greyFour);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  div {
    padding: 0;
    display: flex;
    gap: 10px;
  }

  h2 {
    color: #ffffff;
    font-size: 14.21px;
  }

  P {
    font-weight: 400;
    font-size: 12.182px;
    color: var(--greyOne);
  }
`;

export const PlusSign = styled.button`
  background-color: var(--greyThree);
  height: 30px;
  width: 30px;
  color: white;
  font-size: 25px;
  font-family: Inter;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  border: none;
`;

export const ContainerDashboardSection = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--greyFour);
  border-bottom: ${(props) => props.borderbottom};
`;

export const ContainerInside = styled.div`
  min-width: 320px;
  width: 50%;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  flex-wrap: ${(props) => `${props.flxWrapp}`};
  padding: ${(props) => `${props.myPadd}`};
  h1 {
    color: #f8f9fa;
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.myColor};
  font-size: ${(props) => `${props.mySize}px`};
`;

export const ModalStyle = {
  overlay: {
    backgroundColor: "blue",
    opacity: "1.0",
  },
  content: {
    background: "--greyFour",
    color: "black",
    opacity: "1.0",
  },
};

export const Modal = styled.div`
  display: ${(props) => `${props.display}`};
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  width: 315px;
  height: 342px;
  left: 0px;
  top: 0px;
  border-radius: 4px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

`;

export const ContainerModal = styled.div`
  background-color: rgba(88, 88, 88, 0.25);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  display: ${(props) => `${props.display}`};
`

export const Div1 = styled.div`
  color:#F8F9FA;
  font-weight: 700;
  border-radius: 4px 4px 0px 0px;
  height: 15%;
  width: 100%;
  background-color: var(--greyTwo);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  button {
    background-color: var(--greyTwo);
    border: none;
    font-family: "Nunito";
    color: #868e96;
  }
`
