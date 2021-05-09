/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components'

export const CardNumber = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 24px;
  p {
    color: ${props => props.theme.textContrast};
    font-size: ${props => props.theme.pxToRem(15)};
    line-height: ${props => props.theme.pxToRem(21)};
  }
  @media screen and (min-width: ${props => props.theme.screens.tabletV}px) {
    margin: 47px 0 37px;
    font-size: ${props => props.theme.pxToRem(22)};
    line-height: ${props => props.theme.pxToRem(28)};
  }
`

export const Card = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 12px;
  img.card {
    max-width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  @media screen and (min-width: ${props => props.theme.screens.tabletV}px) {
    padding: 36px 32px;
  }

  ${props =>
    props.isBack &&
    css`
      transform: rotateY(180deg) translateZ(1px);
      z-index: 2;
    `}
  img {
    transition: all 0.2s linear;
    opacity: ${props => (props.isFilled ? 1 : 0)};
    &.empty {
      opacity: ${props => (props.isFilled ? 0 : 1)};
    }
  }
`

export const CardHolder = styled.div`
  transform-style: preserve-3d;
  position: relative;
  transition: transform 0.8s;
  transform: translateZ(-1px);
  ${props =>
    props.flipped &&
    css`
      transform: rotateY(180deg) translateZ(1px);
    `}
  .img-hidden {
    visibility: hidden;
  }
`

export const CardFrontInfo = styled.div(
  ({ theme }) => css`
    text-shadow: 0px 1px 2px #000000b3;
    color: #fff;
    .card-row {
      display: flex;
      justify-content: space-between;
      p {
        font-size: ${theme.pxToRem(12)};
        line-height: ${theme.pxToRem(16)};
        &:first-child {
          padding-right: 12px;
        }
      }
    }

    @media screen and (min-width: ${props => props.theme.screens.tabletV}px) {
      .card-row {
        p {
          font-size: ${theme.pxToRem(16)};
          line-height: ${theme.pxToRem(18)};
        }
      }
    }
  `,
)

export const CardBackInfo = styled.p(
  ({ theme }) => css`
    font-size: ${theme.pxToRem(16)};
    line-height: ${theme.pxToRem(16)};
    position: absolute;
    top: 48%;
    left: 49%;
    @media screen and (min-width: ${theme.screens.tabletV}px) {
      font-size: ${theme.pxToRem(19)};
      line-height: ${theme.pxToRem(19)};
    }
  `,
)
