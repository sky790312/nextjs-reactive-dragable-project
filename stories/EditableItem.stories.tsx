/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react'
import EditableItem from '@/components/EditableItem'

export default {
  title: 'EditableItem',
  component: EditableItem,
}

export const defaultEditableItem = () => (
  <EditableItem
    text={'try double click'}
    handleClick={() => {}}
    handleEditConfirm={() => {}}
  />
)

export const highLightEditableItem = () => (
  <EditableItem
    text={'try double click'}
    handleClick={() => {}}
    handleEditConfirm={() => {}}
    shouldHighlight={true}
  />
)
