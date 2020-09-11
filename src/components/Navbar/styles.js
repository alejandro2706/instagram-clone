import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  align-items: center;
  box-shadow: 1px 0px 8px -3px grey;
`
export const Button = styled.div`
  cursor: pointer;
  & svg {
    width: 35px;
    height: 35px;
  }
`
