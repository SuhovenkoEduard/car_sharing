export enum CarSharingRoutes {
  index = '/',
  cars = '/cars',
  home = '/home',
  about = '/about',
  comments = '/comments',
  signIn = '/sign-in',
  signUp = '/sign-up',
  default = '*'
}

export enum CarTypes {
  coupe = 'Coupe',
  hatchback = 'Hatchback',
  sedan = 'Sedan',
  mpv = 'MPV',
  suv = 'SUV'
}

export enum CarTransmissions {
  manual = 'Механика',
  automatic = 'Автомат'
}

export interface Car {
  name: string
  type: CarTypes
  capacity: number
  transmission: CarTransmissions
  costPerDay: number
  imageUrl: string
  active: boolean
}
