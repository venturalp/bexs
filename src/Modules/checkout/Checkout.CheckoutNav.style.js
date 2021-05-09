import styled, { css } from 'styled-components'
import { CardHolder } from 'Commons/card/Card.FlipCard.style'

export const NavHolder = styled.nav(
  ({ theme }) => css`
    display: flex;
    padding-top: 25px;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: ${theme.mainColor};
    padding-bottom: 15%;
    ${CardHolder} {
      position: absolute;
      max-width: 86%;
      bottom: -100px;
      margin-top: 15%;
      img {
        max-width: 100%;
      }
    }
    @media screen and (min-width: ${theme.screens.tablet}px) {
      padding-top: 53px;
      align-items: flex-start;
      padding-bottom: 30%;
      padding-left: 14%;
      ${CardHolder} {
        position: relative;
        max-width: inherit;
        margin-top: inherit;
        bottom: inherit;
        img {
          max-width: inherit;
        }
      }
    }
  `,
)

export const CheckoutBackLink = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
  position: relative;
  p {
    letter-spacing: -0.01px;
    color: ${props => props.theme.textContrast};
    font-size: ${props => props.theme.pxToRem(13)};
    line-height: ${props => props.theme.pxToRem(22)};
    strong {
      font-weight: bold;
    }
    :nth-child(2) {
      display: none;
    }
    :last-child {
      display: block;
    }
  }
  svg {
    fill: ${props => props.theme.textContrast};
    transform: scaleX(-1) translateY(-50%);
    margin-right: 14px;
    position: absolute;
    left: 2%;
    top: 50%;
  }
  @media screen and (min-width: ${props => props.theme.screens.tablet}px) {
    margin-bottom: 54px;
    p {
      :nth-child(2) {
        display: block;
      }
      :last-child {
        display: none;
      }
    }
  }
`

export const CheckoutTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 42px;
  max-width: 90%;
  h1 {
    font-size: ${props => props.theme.pxToRem(16)};
    line-height: ${props => props.theme.pxToRem(20)};
    letter-spacing: -0.01px;
    color: ${props => props.theme.textContrast};
  }
  svg {
    width: 40px;
  }
  > div {
    &:first-child {
      margin-right: 15px;
    }
  }
  @media screen and (min-width: 375px) {
    margin-bottom: 72px;
  }
  @media screen and (min-width: ${props => props.theme.screens.tabletV}px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${props => props.theme.screens.tablet}px) {
    max-width: inherit;
    justify-content: flex-start;
    margin-bottom: 31px;
    margin-top: 0px;
    h1 {
      font-size: ${props => props.theme.pxToRem(20)};
      line-height: ${props => props.theme.pxToRem(24)};
      br {
        display: none;
      }
    }
    svg {
      width: 50px;
    }
  }
`
