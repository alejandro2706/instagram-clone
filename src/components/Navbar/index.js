import React from 'react'
import { Logo } from '../Logo'
import { IoMdCamera, IoMdSend } from 'react-icons/io'
import { Wrapper, Button } from './styles'

export const Navbar = () => {
  return (
    <Wrapper>
      <Button>
        <IoMdCamera />
      </Button>
      <Logo />
      <Button>
        <IoMdSend />
      </Button>
    </Wrapper>
  )
}
