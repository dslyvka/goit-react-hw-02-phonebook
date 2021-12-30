import styled from '@emotion/styled';

export const FormStyled = styled.form`
  margin-top: 10px;
  margin-left: 10px;

  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
    // margin-left: 5px;

    input {
      margin-top: 5px;
      width: 200px;
      // margin-left: 5px;
      border-radius: 2px;
      border: 1px solid;
    }
  }

  button {
    width: 100px;
    height: 20px;
    border: 1px solid;
    border-radius: 2px;

    //   margin-left: 5px;
  }

  border: 1px solid;
  border-radius: 2px;

  width: 300px;
  padding: 30px;
  padding-left: 10px;
`;
