import React from 'react'
import styled from 'styled-components'
import Pages from '@/components/Pages'
import Elements from '@/components/Elements'

const LeftPanel: React.FC = () => {
  return (
    <LeftPanelWrapper>
      <Pages />
      <Elements />
    </LeftPanelWrapper>
  )
}

export default LeftPanel

const LeftPanelWrapper = styled.div`
  padding: 8px;
`
