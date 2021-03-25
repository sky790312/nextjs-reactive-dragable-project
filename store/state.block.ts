import { BLOCK } from '@/api/schema'

type BlockState = {
  blocks: BLOCK[]
  currentBlock: BLOCK
}

export const initialState: BlockState = {
  blocks: [],
  currentBlock: null,
}

const actionTypes = {
  SET_BLOCKS: 'SET_BLOCKS',
  SET_CURRENT_BLOCK: 'SET_CURRENT_BLOCK',
  CLEAR_CURRENT_BLOCK: 'CLEAR_CURRENT_BLOCK',
}

export const blockActions = {
  setBlocks: (blocks: BLOCK[]) => {
    const action = {
      type: actionTypes.SET_BLOCKS,
      blocks,
    }

    return action
  },
  setCurrentBlock: (block: BLOCK) => {
    const action = {
      type: actionTypes.SET_CURRENT_BLOCK,
      block,
    }

    return action
  },
  clearCurrentBlock: () => {
    const action = {
      type: actionTypes.CLEAR_CURRENT_BLOCK,
    }

    return action
  },
}

export const blockReducer = (
  state: BlockState = initialState,
  action,
): BlockState => {
  switch (action.type) {
    case actionTypes.SET_BLOCKS: {
      return {
        ...state,
        blocks: action.blocks,
      }
    }
    case actionTypes.SET_CURRENT_BLOCK: {
      const foundBlockIndex = state.blocks.findIndex(
        block => block.id === action.block.id,
      )
      const updatedBlocks = [
        ...state.blocks.slice(0, foundBlockIndex),
        action.block,
        ...state.blocks.slice(foundBlockIndex + 1),
      ]
      return {
        ...state,
        blocks: updatedBlocks,
        currentBlock: action.block,
      }
    }
    case actionTypes.CLEAR_CURRENT_BLOCK: {
      return {
        ...state,
        currentBlock: null,
      }
    }
  }
  return state
}
