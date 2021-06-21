import React from 'react'
import styled from 'styled-components'
import Block from '@/components/Block'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/store/index'
import { useRouter } from 'next/router'

const Canvas: React.FC = React.memo(() => {
  const router = useRouter()
  const blocks = useSelector(
    (state: RootState) => state.block.blocks,
    shallowEqual,
  )
  const pageBlocks = blocks.filter(
    block => block.name.split(' ')[1].charAt(0) === router?.query?.id,
  )

  return (
    <CanvasWrapper>
      {pageBlocks.map(block => (
        <Block key={block.id} block={block} />
      ))}
    </CanvasWrapper>
  )
})

export default Canvas

const CanvasWrapper = styled.div`
  position: relative;
  background: white;
  overflow: hidden;
`
