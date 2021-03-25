import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Elements from '@/components/Elements'

describe('Elements component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Elements />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
