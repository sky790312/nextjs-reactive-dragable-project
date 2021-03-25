import { FAKE_PAGES, FAKE_BLOCKS } from '@/api/fakeData'
import { PAGE, BLOCK } from '@/api/schema'

export const fetchPages = async () => {
  const data: PAGE[] = await FAKE_PAGES
  return data
}

export const fetchBlocks = async () => {
  const data: BLOCK[] = await FAKE_BLOCKS
  return data
}
