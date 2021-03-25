import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import LeftPanel from '@/components/LeftPanel'

describe('LeftPanel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<LeftPanel />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
