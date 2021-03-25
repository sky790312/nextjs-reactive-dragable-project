import React from 'react'
import styled from 'styled-components'
import Page from '@/components/Page'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/store/index'

const Pages: React.FC = () => {
  const pages = useSelector(
    (state: RootState) => state.page.pages,
    shallowEqual,
  )

  return (
    <PagesWrapper>
      <h4>Pages</h4>
      {pages.map(page => (
        <Page key={page.id} page={page} />
      ))}
    </PagesWrapper>
  )
}

export default Pages

const PagesWrapper = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 16px;
`
