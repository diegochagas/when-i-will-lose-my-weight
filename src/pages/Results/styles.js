import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: white;
    margin: 10px auto;
  }

  .table {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin: 20px 20px 5px 20px;
    width: 100%;
  }

  .thead {
    background-color: #ffec86;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    border-radius: 5px 5px 0 0;
    align-items: center;

    span {
      display: inline-block;
      padding: 20px 10px;
      text-transform: uppercase;
      display: inline-block;
      text-align: center;
      width: 25%;
    }
  }

  .line {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    span {
      display: inline-block;
      padding: 20px 10px;
      color: #757575;
      text-align: center;
      width: 25%;
    }

    &:last-child {
      border-radius: 0 0 5px 5px;
    }
  }
`;
