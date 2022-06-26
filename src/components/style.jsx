import styled from "styled-components";


export const StyledCard = styled.div`
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