import { useState } from 'react'

interface ItemPosition {
  position: 'absolute'
  left: string
  top: string
}

export const useDrag = (startingPosition, element) => {
  const [dragInfo, setDragInfo] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    position: startingPosition,
  })

  const { isDragging } = dragInfo
  const handleMouseDown = ({ clientX, clientY }) => {
    if (!isDragging)
      setDragInfo({
        ...dragInfo,
        isDragging: true,
        origin: {
          x: element.current.offsetLeft - clientX,
          y: element.current.offsetTop - clientY,
        },
      })
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    if (isDragging) {
      const { origin } = dragInfo
      setDragInfo({
        ...dragInfo,
        position: {
          x: Math.abs(clientX + origin.x),
          y: Math.abs(clientY + origin.y),
        },
      })
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setDragInfo({
        ...dragInfo,
        isDragging: false,
      })
    }
  }

  const itemPosition: ItemPosition = {
    position: 'absolute',
    left: `${dragInfo.position.x}px`,
    top: `${dragInfo.position.y}px`,
  }

  return {
    isDragging,
    itemPosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  }
}
