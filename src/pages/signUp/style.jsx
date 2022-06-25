import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 50px;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--greyFour);
  img{
    margin-bottom: 20px;
  }
  label {
    font-family: Inter;
    font-size: 12px;
    color: white;
  }
`;
export const DivHeader = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  img {
    height: 70%;
    width: 40%;
  }
`;
export const ButtonReturn = styled.button`
  background-color: var(--greyThree);
  color: white;
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
  text-align: center;
  padding: 15px;
  border-radius: 4px;
  border: none;

  :active{
    background-color: var(--greyFour);
  }
`;

export const ContainerForm = styled.div`
  background-color: var(--greyThree);
  width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 10px 10px 10px;
  border-radius: 4px;
  h1 {
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
    font-size: 12px;
    color: var(--greyOne);
    text-align: center;
  }
`;

export const StyledForm = styled.form`
  width: 95%;
  background-color: var(--greyThree);
  span{
    color: #b30505;
  }
  select {
    background-color: var(--greyTwo);
    width: 100%;
    height: 48px;
    margin-bottom: 15px;
    color: var(--greyOne)
  }
`;
export const InputDiv = styled.div`
  width: 100%;
  background-color: var(--greyThree);
  text-align: start;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  background-color: var(--greyTwo);
  color: var(--greyOne);
  border-radius: 4px;
  border: none;
  padding-left: 10px;
  margin: 15px 0px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  color: white;
  border: none;
  background-color: var(--pink);
  border-radius: 4px;
  :active{
    background-color: var(--pinkOff);
  }
`;
