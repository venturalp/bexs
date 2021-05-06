import { InputContainer } from 'Commons/form/Form.InputContainer'
import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  text-align: center;
`

export const HomePage = () => (
  <HomeContainer>
    <InputContainer placeholder="teste de label">
      <input defaultValue="teste" />
    </InputContainer>
    <InputContainer placeholder="placeholder de select">
      <select defaultValue="">
        <option value="" disabled>
          {' '}
        </option>
        <option value="foo">foo</option>
        <option value="bar">bar</option>
      </select>
    </InputContainer>
  </HomeContainer>
)
