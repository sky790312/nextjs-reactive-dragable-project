import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Pages from '@/pages/pages/[id]'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('pages/[id] page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Pages />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
