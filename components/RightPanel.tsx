import React from 'react'
import styled from 'styled-components'
import ColorPicker from './ColorPicker'
import { Dispatch } from 'redux'
import { blockActions } from '@/store/state.block'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from '@/store/index'

const RightPanel: React.FC = () => {
  const dispatch: Dispatch = useDispatch()
  const { setCurrentBlock } = blockActions
  const currentBlock = useSelector(
    (state: RootState) => state.block.currentBlock,
    shallowEqual,
  )

  const handleNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: 'x' | 'y' | 'o',
  ) => {
    const value = Number(e.target.value)
    const updateBlock = {
      ...currentBlock,
      [property]: value,
    }
    dispatch(setCurrentBlock(updateBlock))
  }

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.round(Number(e.target.value)) / 100
    const updateBlock = {
      ...currentBlock,
      o: value,
    }
    dispatch(setCurrentBlock(updateBlock))
  }

  const handleColorChange = (color: string) => {
    const updateBlock = {
      ...currentBlock,
      c: color,
    }
    dispatch(setCurrentBlock(updateBlock))
  }

  return (
    <RightPanelWrapper shouldShow={!!currentBlock}>
      <Label>
        X{' '}
        <input
          type='number'
          min={0}
          max={999}
          value={currentBlock?.x ?? 0}
          onChange={e => handleNumberChange(e, 'x')}
        />
      </Label>
      <Label>
        Y{' '}
        <input
          type='number'
          min={0}
          max={999}
          value={currentBlock?.y ?? 0}
          onChange={e => handleNumberChange(e, 'y')}
        />
      </Label>
      <Label>
        O{' '}
        <input
          type='number'
          min={0}
          max={100}
          value={currentBlock?.o ?? 1}
          onChange={e => handleNumberChange(e, 'o')}
        />
        <input
          type='range'
          min={0}
          max={100}
          value={currentBlock?.o ? currentBlock?.o * 100 : 100}
          onChange={handleRangeChange}
        />
      </Label>
      <Label>
        B{' '}
        <ColorPicker
          defaultColor={currentBlock?.c}
          onColorChange={color => handleColorChange(color)}
          shouldShowText={true}
        />
      </Label>
    </RightPanelWrapper>
  )
}

export default RightPanel

const RightPanelWrapper = styled.div<{ shouldShow: boolean }>`
  padding: 8px;
  visibility: ${props => (props.shouldShow ? 'visible' : 'hidden')};
`

const Label = styled.label`
  display: grid;
  grid-template-columns: 16px auto minmax(0, 1fr);
  grid-gap: 8px;
`
