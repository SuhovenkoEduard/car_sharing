import { Car, CarSharingRoutes, CarTransmissions, CarTypes } from '../types/types'

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

export const CARS: Car[] = [
  {
    name: 'Porsche 718 Cayman S',
    type: CarTypes.coupe,
    capacity: 2,
    transmission: CarTransmissions.manual,
    costPerDay: 400,
    imageUrl: './images/cars/porsche-718-cayman-s.svg',
    active: true
  },
  {
    name: 'Mini Cooper 5-DOOR',
    type: CarTypes.hatchback,
    capacity: 4,
    transmission: CarTransmissions.manual,
    costPerDay: 364,
    imageUrl: './images/cars/mini-cooper-5-door.svg',
    active: true
  },
  {
    name: 'Toyota GR Supra',
    type: CarTypes.coupe,
    capacity: 2,
    transmission: CarTransmissions.manual,
    costPerDay: 360,
    imageUrl: './images/cars/toyota-gr-supra.svg',
    active: true
  },
  {
    name: 'Porsche 911 Turbo',
    type: CarTypes.coupe,
    capacity: 2,
    transmission: CarTransmissions.manual,
    costPerDay: 468,
    imageUrl: './images/cars/porsche-911-turbo.svg',
    active: false
  },
  {
    name: 'Porsche Taycan 4S',
    type: CarTypes.coupe,
    capacity: 2,
    transmission: CarTransmissions.manual,
    costPerDay: 424,
    imageUrl: './images/cars/porsche-taycan-4s.svg',
    active: false
  },
  {
    name: 'Mini Cooper WORKS...',
    type: CarTypes.hatchback,
    capacity: 4,
    transmission: CarTransmissions.manual,
    costPerDay: 360,
    imageUrl: './images/cars/mini-cooper.svg',
    active: false
  }
]
