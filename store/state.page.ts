import { PAGE } from '@/api/schema'

type PageState = {
  pages: PAGE[]
}

export const initialState: PageState = {
  pages: [],
}

const actionTypes = {
  SET_PAGES: 'SET_PAGES',
}

export const pageActions = {
  setPages: (pages: PAGE[]) => {
    const action = {
      type: actionTypes.SET_PAGES,
      pages,
    }

    return action
  },
}

export const pageReducer = (
  state: PageState = initialState,
  action,
): PageState => {
  switch (action.type) {
    case actionTypes.SET_PAGES: {
      return {
        ...state,
        pages: action.pages,
      }
    }
  }
  return state
}
