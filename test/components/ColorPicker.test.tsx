import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import ColorPicker from '@/components/ColorPicker'

describe('ColorPicker component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      withProviders(<ColorPicker onColorChange={jest.fn} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
