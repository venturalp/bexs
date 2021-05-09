import React from 'react'
import styled, { css } from 'styled-components'
import Arrow from 'Assets/arrow.svg'
import Check from 'Assets/ico-check.svg'

const StepWrapper = styled.div(
  ({ theme, ...props }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.mainColor};
    p {
      font-size: ${theme.pxToRem(13)};
      letter-spacing: -0.01px;
    }
    svg {
      fill: ${theme.mainColor};
    }
    .bullet {
      border-radius: 50%;
      margin-right: 8px;
      width: 22px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.mainColor};
      background-color: ${props.checked ? theme.mainColor : theme.textContrast};
      color: ${props.checked ? theme.textContrast : theme.mainColor};
    }
    .check {
      width: 12px;
      fill: ${theme.textContrast};
    }
    .arrow {
      width: 12px;
      margin-left: 24px;
      margin-right: 24px;
    }
  `,
)

export const Step = React.memo(
  ({ last = false, checked = false, step = 1, label }) => (
    <StepWrapper last={last} checked={checked}>
      <div className="bullet">
        {checked ? <Check className="check" /> : <p>{step}</p>}
      </div>
      <p>{label}</p>
      {!last && <Arrow className="arrow" />}
    </StepWrapper>
  ),
)
