import { render } from '@testing-library/react'
import { ThemeWrapper } from 'Commons/tests/Tests.Helpers'
import React from 'react'
import { HomePage } from '../Home.page'

describe('test module home', () => {
  it('render home', () => {
    const { asFragment } = render(
      <ThemeWrapper>
        <HomePage />
      </ThemeWrapper>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
