import React, { useEffect } from 'react'
import Head from 'next/head'
import LeftPanel from '@/components/LeftPanel'
import Canvas from '@/components/Canvas'
import RightPanel from '@/components/RightPanel'
import styled from 'styled-components'
import { fetchPages, fetchBlocks } from '@/api'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { blockActions } from '@/store/state.block'
import { pageActions } from '@/store/state.page'

const Pages: React.FC = React.memo(() => {
  const dispatch: Dispatch = useDispatch()
  const { setBlocks } = blockActions
  const { setPages } = pageActions

  useEffect(() => {
    ;(async () => {
      const blocks = await fetchBlocks()
      dispatch(setBlocks(blocks))
      const pages = await fetchPages()
      dispatch(setPages(pages))
    })()
  }, [dispatch, setBlocks, setPages])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PagesWrapper>
        <LeftPanel />
        <Canvas />
        <RightPanel />
      </PagesWrapper>
    </>
  )
})

export default Pages

const PagesWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px auto 200px;
  background: #232323;
  height: 100vh;
  color: white;
`
