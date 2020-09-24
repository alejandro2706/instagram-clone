import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  height: 50px;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  /* aria-current porque reach router pone ese atributo en el anchor actual */
  &[aria-current] {
    color: black;
    &::after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 3em;
      line-height: 20px;
    }
  }
`
