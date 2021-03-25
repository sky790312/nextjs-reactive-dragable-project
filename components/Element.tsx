import React, { useState } from 'react'
import EditableItem from '@/components/EditableItem'
import { BLOCK } from '@/api/schema'
import { Dispatch } from 'redux'
import { blockActions } from '@/store/state.block'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'

interface Props {
  block: BLOCK
}

const Element: React.FC<Props> = React.memo(({ block }) => {
  const currentBlock = useSelector(
    (state: RootState) => state.block.currentBlock,
    shallowEqual,
  )
  const dispatch: Dispatch = useDispatch()
  const { setCurrentBlock } = blockActions
  const isCurrentBlock = block.id === currentBlock?.id
  const [blockName, setBlockName] = useState(block.name)

  const handleClick = () => {
    if (isCurrentBlock) {
      return
    }

    dispatch(setCurrentBlock(block))
  }

  const handleEditConfirm = (newName: string) => {
    setBlockName(newName)
  }

  return (
    <EditableItem
      key={block.id}
      text={blockName}
      shouldHighlight={isCurrentBlock}
      handleClick={handleClick}
      handleEditConfirm={handleEditConfirm}
    />
  )
})

export default Element
