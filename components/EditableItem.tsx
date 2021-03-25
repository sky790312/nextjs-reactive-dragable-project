import React, { useState, useEffect, useRef } from 'react'
import { useDoubleClick } from '@/hooks/useDoubleClick'
import styled from 'styled-components'

interface Props {
  text: string
  shouldHighlight?: boolean
  handleClick: () => void
  handleDoubleClick?: () => void
  handleEditConfirm: (text: string) => void
}

const EditableItem: React.FC<Props> = React.memo(
  ({
    text,
    shouldHighlight = false,
    handleClick,
    handleDoubleClick,
    handleEditConfirm,
  }) => {
    const inputRef = useRef(null)
    const [isEditing, setIsEditing] = useState(false)

    const onClick = () => {
      if (isEditing) {
        return
      }

      handleClick()
    }

    const onDoubleClick = () => {
      setIsEditing(true)
      handleDoubleClick && handleDoubleClick()
    }

    const onItemClick = useDoubleClick(
      () => onClick(),
      () => onDoubleClick(),
    )

    const onEditConfirm = () => {
      setIsEditing(false)
      handleEditConfirm(inputRef.current.value)
    }

    useEffect(() => {
      if (isEditing) {
        inputRef.current.focus()
      }
    }, [isEditing])

    return (
      <div onClick={onItemClick}>
        {isEditing ? (
          <>
            <input type='text' defaultValue={text} ref={inputRef} />
            <button onClick={onEditConfirm}>ok</button>
          </>
        ) : (
          <Text shouldHighlight={shouldHighlight}>{text}</Text>
        )}
      </div>
    )
  },
)

export default EditableItem

const Text = styled.div<{ shouldHighlight: boolean }>`
  ${props => {
    if (props.shouldHighlight) {
      return `
        cursor: default;
        font-weight: bold;
      `
    } else {
      return `
        cursor: pointer;
      `
    }
  }}
`
