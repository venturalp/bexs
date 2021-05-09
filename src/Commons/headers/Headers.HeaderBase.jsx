import React from 'react'
import styled from 'styled-components'
import Logo from 'Assets/store-logo.svg'
import { Container } from 'Commons/containers/Containers.Container'

const HeaderWrapper = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(112, 112, 112, 0.3);
  width: 100%;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
  }
  & div > svg {
    width: 260px;
  }
  @media screen and (min-width: ${props => props.theme.screens.tabletV}px) {
    & > div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
    }
  }
`

const Menu = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 5px;
  margin-top: 12px;
  width: 100%;
  a {
    background: #3c3c3c 0% 0% no-repeat padding-box;
    border-radius: 5px;
    height: 18px;
    width: ;
  }
  @media screen and (min-width: ${props => props.theme.screens.tabletV}px) {
    grid-column-gap: 25px;
    width: 50%;
  }
`

export const HeaderBase = React.memo(() => (
  <HeaderWrapper>
    <Container>
      <div>
        <Logo />
      </div>
      <Menu>
        <a href="#" />
        <a href="#" />
        <a href="#" />
        <a href="#" />
        <a href="#" />
      </Menu>
    </Container>
  </HeaderWrapper>
))
