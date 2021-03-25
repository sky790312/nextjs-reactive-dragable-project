import React, { useState } from 'react'
import styled from 'styled-components'

interface Props {
  defaultColor?: string
  shouldShowText?: boolean
  onColorChange: (color: string) => void
}

const ColorPicker: React.FC<Props> = React.memo(
  ({ defaultColor = '#008800', shouldShowText = true, onColorChange }) => {
    const [color, setColor] = useState(defaultColor)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const updateColor = e.target.value
      setColor(updateColor)
      onColorChange(updateColor)
    }

    return (
      <>
        <ColorPickerWrapper color={color}>
          <ColorInput value={color} type='color' onChange={onChange} />
        </ColorPickerWrapper>
        {shouldShowText && color}
      </>
    )
  },
)

export default ColorPicker

const ColorPickerWrapper = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  align-self: center;
  overflow: hidden;
  background-color: ${props => props.color};
`

const ColorInput = styled.input`
  opacity: 0;
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  cursor: pointer;
`
