import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  width: 100%;
  display: block;
  text-align: center;
  cursor: pointer;
  &[disabled] {
    background-color: #a6a6a4;
    cursor: default;
  }
`
