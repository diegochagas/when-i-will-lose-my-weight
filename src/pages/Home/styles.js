import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  div {
    width: 100%;
    display: flex;
    align-items: center;

    label {
      flex: 1;
    }

    input {
      flex: 4;
    }
  }
`;
