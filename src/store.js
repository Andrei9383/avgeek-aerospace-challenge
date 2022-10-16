import { createStore, createHook } from 'react-sweet-state'

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    dark: false
  },
  // actions that trigger store mutation
  actions: {
    switch:
      () =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          dark: !getState().dark
        })
      }
  },
  // optional, mostly used for easy debugging
  name: 'switch'
})

export const useCounter = createHook(Store)
