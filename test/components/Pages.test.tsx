import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Pages from '@/components/Pages'

describe('Pages component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Pages />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
