import styled from "styled-components";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--greyFour);
`;

export const ButtonReturn = styled.button`
  width: 20%;
  background-color: var(--greyThree);
  color: white;
  font-family: Inter;
  font-weight: 600;
  align-self: center;
`;

export const ContainerForm = styled.div`
      background-color: var(--greyThree);
      width:320px;
      display: flex;
      flex-direction:column;
      align-items: center;
`

export const StyledForm = styled.form`
    width: 95%;
    background-color: var(--greyThree);
`
export const InputDiv = styled.div`
    width: 100%;
    background-color: var(--greyThree);
    text-align: start;
    color:white;
`

export const Input = styled.input`
    width: 100%;
    background-color: var(--greyThree);
`

export const Button = styled.button`
    width: 100%;
    background-color: var(--pinkOff);
    color: white;
`