import React from 'react'
import Head from 'next/head'
import LeftPanel from '@/components/LeftPanel'
import Canvas from '@/components/Canvas'
import RightPanel from '@/components/RightPanel'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px auto 200px;
  background: #232323;
  height: 100vh;
  color: white;
`

const Home = React.memo(
  (): JSX.Element => {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <HomeWrapper>
          <LeftPanel />
          <Canvas />
          <RightPanel />
        </HomeWrapper>
      </>
    )
  },
)

export const getServerSideProps = async ({ res }) => {
  res.setHeader('location', `/pages/1`)

  res.statusCode = 302
  res.end()

  return { props: {} }
}

export default Home
