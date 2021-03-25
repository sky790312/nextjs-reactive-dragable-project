import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Canvas from '@/components/Canvas'

describe('Canvas component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Canvas />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
