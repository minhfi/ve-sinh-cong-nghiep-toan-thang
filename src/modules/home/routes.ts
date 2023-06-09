import { IRouterOption } from 'src/interfaces'
import Home from '.'

export enum EHomeRoutes {
  HOME = 'Home'
}

export const HomeRoutes: IRouterOption[] = [
  {
    path: '/:type(home)?',
    exact: true,
    name: EHomeRoutes.HOME,
    component: Home
  }
]
