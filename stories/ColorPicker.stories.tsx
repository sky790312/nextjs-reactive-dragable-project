/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react'
import ColorPicker from '@/components/ColorPicker'

export default {
  title: 'ColorPicker',
  component: ColorPicker,
}

export const defaultColorPicker = () => <ColorPicker onColorChange={() => {}} />

export const givenColorPicker = () => (
  <ColorPicker defaultColor={'#000000'} onColorChange={() => {}} />
)

export const noTextColorPicker = () => (
  <ColorPicker shouldShowText={false} onColorChange={() => {}} />
)
