import React, { useState } from 'react'
import { useRouter } from 'next/router'
import EditableItem from '@/components/EditableItem'
import { PAGE } from '@/api/schema'
import { Dispatch } from 'redux'
import { blockActions } from '@/store/state.block'
import { useDispatch } from 'react-redux'

interface Props {
  page: PAGE
}

const Page: React.FC<Props> = React.memo(({ page }) => {
  const dispatch: Dispatch = useDispatch()
  const { clearCurrentBlock } = blockActions
  const router = useRouter()
  const currentPageId = Number(router.query.id)
  const isCurrentPage = page.id === currentPageId
  const [pageName, setPageName] = useState(page.name)

  const handleClick = () => {
    if (isCurrentPage) {
      return
    }

    dispatch(clearCurrentBlock())
    router.push(page.url)
  }

  const handleEditConfirm = (newName: string) => {
    setPageName(newName)
  }

  return (
    <EditableItem
      text={pageName}
      shouldHighlight={isCurrentPage}
      handleClick={handleClick}
      handleEditConfirm={handleEditConfirm}
    />
  )
})

export default Page
