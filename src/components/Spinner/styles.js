import styled, { keyframes } from 'styled-components'

const bounceDelay = keyframes`
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
`

export const SpinnerWrapper = styled.div`
  width: 100%;
  text-align: center;
  & div {
    width: 11px;
    height: 11px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    margin: 0 .1em;
    -webkit-animation: ${bounceDelay} 1.4s infinite ease-in-out both;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  }
`

export const Bounce1 = styled.div`
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
`

export const Bounce2 = styled.div`
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
`
