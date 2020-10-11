import 'react-redux'
import { RootState } from './src/reducers'

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}
