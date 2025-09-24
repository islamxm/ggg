declare global {
  type StoreType = import('./app/providers/redux').RootState
  type DispatchType = import('./app/providers/redux').AppDispatch
  type DefFunc = (...args:any[]) => any
}
export {}