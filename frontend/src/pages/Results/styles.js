import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #9bc86a;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  flex-direction: column;

  .table {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    max-width: 500px;
    margin: 20px;
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

export const Button = styled(Link)`
  color: #000;
  border-radius: 5px 5px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #ffec86;
  padding: 20px;
  font-weight: bold;

  &:hover {
    background-color: #ffe359;
    border: none;
  }
`;

