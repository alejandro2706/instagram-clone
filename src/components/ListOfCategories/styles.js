import styled, { keyframes, css } from 'styled-components'

const topBottom = keyframes`
  0% {
    transform: translateY(-100px) scale(.7);
  }
  50% {
    transform: translateY(20px) scale(.7);
  }
  100% {
    transform: translateY(0px) scale(.7);
  }
`

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 1em;
  ${props => props.fixed && css`
    animation: .4s ${topBottom} ease forwards;
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0,0 0, .3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: 0px;
    z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
