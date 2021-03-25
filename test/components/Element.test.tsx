import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Element from '@/components/Element'
import { FAKE_BLOCKS } from '@/api/fakeData'

describe('Element component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      withProviders(<Element block={FAKE_BLOCKS[0]} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
