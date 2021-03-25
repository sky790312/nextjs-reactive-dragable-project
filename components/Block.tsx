import React, { useRef } from 'react'
import styled from 'styled-components'
import { useDrag } from '@/hooks/useDrag'
import { BLOCK } from '@/api/schema'
import { Dispatch } from 'redux'
import { blockActions } from '@/store/state.block'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'

interface Props {
  block: BLOCK
}

const Block: React.FC<Props> = React.memo(({ block }) => {
  const dispatch: Dispatch = useDispatch()
  const { setCurrentBlock } = blockActions
  const currentBlock = useSelector(
    (state: RootState) => state.block.currentBlock,
    shallowEqual,
  )
  const isCurrentBlock = block.id === currentBlock?.id
  const startingPosition = { x: block.x, y: block.y }

  const dragRef = useRef(null)
  const {
    isDragging,
    itemPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDrag(startingPosition, dragRef)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(setCurrentBlock(block))
    handleMouseDown(e)
  }

  const onMouseUp = () => {
    const x = Number(itemPosition.left.slice(0, itemPosition.left.length - 2))
    const y = Number(itemPosition.top.slice(0, itemPosition.top.length - 2))
    const updateBlock = {
      ...block,
      x,
      y,
    }
    dispatch(setCurrentBlock(updateBlock))
    handleMouseUp()
  }

  const getBlockPosition = () => {
    let top, left
    if (isCurrentBlock) {
      if (isDragging) {
        top = itemPosition.top
        left = itemPosition.left
      } else {
        top = `${currentBlock.y}px`
        left = `${currentBlock.x}px`
      }
    } else {
      top = `${block.y}px`
      left = `${block.x}px`
    }
    return { top, left }
  }

  return (
    <BlockWrapper
      style={{ ...getBlockPosition() }}
      o={block.o}
      c={block.c}
      isActive={isCurrentBlock}
      ref={dragRef}
      onMouseDown={onMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseMove}
      onMouseUp={onMouseUp}
    />
  )
})

export default Block

const BlockWrapper = styled.div<{ o: number; c: string; isActive: boolean }>`
  position: absolute;
  width: 50px;
  height: 50px;
  opacity: ${props => props.o};
  background: ${props => props.c};
  outline: ${props => (props.isActive ? 1 : 0)}px solid
    ${props => props.theme.colors.blue};
`
