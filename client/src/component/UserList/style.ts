import styled from "styled-components";

export const UserListWrapper = styled.div`
  color: whitesmoke;
  padding: 1rem;
  background-color: #111111;
  width: 500px;
  border-radius: 0.5rem;

  article {
    div {
      padding: 0.25rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        gap: 0.5rem;
      }
    }

    div:nth-child(even) {
      background-color: #141414;
    }

    button{
      border:none;
      color:whitesmoke;
      background-color:#198754;
      padding:.5rem;
      border-radius:.25rem;
      cursor:pointer;
  }

    button:nth-child(even) {
      background-color:#dc3545;
    }
  }

  p{
    text-align:center;
  }
`;
