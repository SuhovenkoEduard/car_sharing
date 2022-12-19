import { CarSharingRoutes } from '../types/types'

export const TABS = [
  {
    title: 'Главная',
    name: 'home',
    top: 25,
    left: 250,
    width: 57,
    height: 17,
    navigatePath: CarSharingRoutes.home,
    imageUrl: '',
    imageWidth: 1440,
    imageHeight: 2060,
    isDisplayBackgroundImage: true
  },
  {
    title: 'Машины',
    name: 'cars',
    top: 25,
    left: 341,
    width: 68,
    height: 17,
    navigatePath: CarSharingRoutes.cars,
    imageUrl: '../images/cars-page.png',
    imageWidth: 1440,
    imageHeight: 1269,
    isDisplayBackgroundImage: false
  },
  {
    title: 'О нас',
    name: 'about',
    top: 25,
    left: 443,
    width: 45,
    height: 17,
    navigatePath: CarSharingRoutes.about,
    imageUrl: '..images/about-page.png',
    imageWidth: 1440,
    imageHeight: 1269,
    isDisplayBackgroundImage: true
  },
  {
    title: 'Комментарии',
    name: 'comments',
    top: 25,
    left: 530,
    width: 113,
    height: 17,
    navigatePath: CarSharingRoutes.comments,
    imageUrl: '..images/comments-page.png',
    imageWidth: 1440,
    imageHeight: 1269,
    isDisplayBackgroundImage: true
  }
]
