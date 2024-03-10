import styled from "styled-components";

export const UserFormWrapper = styled.div`
  background-color: #111111;
  border-radius: 0.5rem;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;

    input,
    button {
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      outline: none;
      font-size: 1rem;
      margin-top:.5rem;

      :focus {
        outline: none;
      }
    }

    button:hover {
      background-color: #ddd9;
    }

    .error {
      padding: .5rem;
      border:solid thin red;
      border-top-color:transparent;
      color: red;
      margin:0;
    }
  }
`;
