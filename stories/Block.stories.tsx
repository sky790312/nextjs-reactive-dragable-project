import React from 'react'
import Block from '@/components/Block'
import { FAKE_BLOCKS } from '@/api/fakeData'

export default {
  title: 'Block',
  component: Block,
}

export const drabbableBlock = () => <Block block={FAKE_BLOCKS[0]} />
