import styled from "styled-components";

export const UserFormWrapper = styled.div`
  background-color: #111111;
  border-radius: 0.5rem;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    button {
      border: none;
      padding: 1rem;
      border-radius: 0.5rem;
      outline: none;
      font-size: 1rem;

      :focus {
        outline: none;
      }
    }

    button:hover {
      background-color:#ddd9;
    }
  }
`;
