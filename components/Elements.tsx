import React from 'react'
import styled from 'styled-components'
import Element from '@/components/Element'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/store/index'
import { useRouter } from 'next/router'

const Elements: React.FC = React.memo(() => {
  const router = useRouter()
  const blocks = useSelector(
    (state: RootState) => state.block.blocks,
    shallowEqual,
  )
  const pageBlocks = blocks.filter(
    block => block.name.split(' ')[1].charAt(0) === router.query.id,
  )

  return (
    <ElementsWrapper>
      <h4>Elements</h4>
      {pageBlocks.map(block => (
        <Element key={block.id} block={block} />
      ))}
    </ElementsWrapper>
  )
})

export default Elements

const ElementsWrapper = styled.div``
