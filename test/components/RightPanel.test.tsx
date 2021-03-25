import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import RightPanel from '@/components/RightPanel'

describe('RightPanel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<RightPanel />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
