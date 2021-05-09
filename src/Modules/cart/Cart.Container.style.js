import styled from 'styled-components'

export const Strip = styled.div`
  background-color: ${props =>
    props.dark ? '#C9C9C9' : props.theme.background};
  border-radius: 5px;
  height: ${props => props.height || '12'}px;
`

export const CartContainerWrapper = styled.div`
  background-color: #fff;
  padding: 20px 4% 52px;
  .title {
    ${Strip} {
      width: 78%;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    ${Strip} {
      :first-child {
        width: 60%;
      }
      :last-child {
        width: 20%;
      }
    }
  }
  @media screen and (min-width: ${props => props.theme.screens.tablet}px) {
    padding: 20px 20px 52px;
  }
`

export const Line = styled.hr`
  background-color: #707070;
  height: 1px;
  margin: 25px 0;
`
