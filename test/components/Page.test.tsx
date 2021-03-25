import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import Page from '@/components/Page'
import { FAKE_PAGES } from '@/api/fakeData'

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

describe('Page component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      withProviders(<Page page={FAKE_PAGES[0]} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
