import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import EditableItem from '@/components/EditableItem'

describe('EditableItem component', () => {
  it('matches snapshot', () => {
    const props = {
      text: '',
      handleClick: jest.fn(),
      handleEditConfirm: jest.fn(),
    }
    const { asFragment } = render(
      withProviders(<EditableItem {...props} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
