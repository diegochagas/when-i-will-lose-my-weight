import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: #9bc86a;
  }

  #root {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  label {
    color: white;
    font-weight: bold;
  }

  input {
    height: 40px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    padding: 5px 10px;
    color: gray;
  }

  .btn {
    border: none;
    display: block;
    color: #000;
    border-radius: 5px 5px;
    text-decoration: none;
    text-transform: uppercase;
    background-color: #ffec86;
    padding: 13px 20px;
    margin: 5px 0;
    font-weight: bold;
    text-align: center;
    width: 100%;

    &:hover {
      background-color: #ffe359;
    }

    &:disabled {
      background-color: lightgoldenrodyellow;
      color: lightgray;
    }
  }
`;
