import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Block from '@/components/Block'
import { FAKE_BLOCKS } from '@/api/fakeData'

describe('Block component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      withProviders(<Block block={FAKE_BLOCKS[0]} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
