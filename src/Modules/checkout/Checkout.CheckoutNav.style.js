import styled from 'styled-components'

export const NavHolder = styled.nav`
  padding-top: 53px;
  padding-bottom: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 14%;
  background-color: ${props => props.theme.mainColor};
`

export const CheckoutBackLink = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 54px;
  p {
    letter-spacing: -0.01px;
    color: ${props => props.theme.textContrast};
    font-size: ${props => props.theme.pxToRem(13)};
    line-height: ${props => props.theme.pxToRem(22)};
  }
  svg {
    fill: ${props => props.theme.textContrast};
    transform: scaleX(-1);
    margin-right: 14px;
  }
`

export const CheckoutTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 31px;
  h1 {
    font-size: ${props => props.theme.pxToRem(20)};
    line-height: ${props => props.theme.pxToRem(24)};
    letter-spacing: -0.01px;
    color: ${props => props.theme.textContrast};
  }
  svg {
    width: 50px;
  }
  > div {
    &:first-child {
      margin-right: 15px;
    }
  }
`
