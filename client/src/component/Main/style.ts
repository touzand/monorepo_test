import styled from 'styled-components'

export const MainWrapper = styled.main`
  position:absolute;
  background-color:#151515; 
  bottom:0;
  top:0;
  left:0;
  right:0;
  font-family: system-ui;

  display:flex;
  justify-content:center;
  align-items:center;
  gap:1rem;

  &>div:nth-child(1){
    display:flex;
    flex-direction:column;
    align-items:normal;
    justify-content:center;
    gap:1rem;
  }
`
