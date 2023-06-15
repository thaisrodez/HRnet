export interface Employee {
  id: number
  firstname: string
  lastname: string
  dateOfBirth: Date
  startDate: Date
  street: string
  city: string
  zipCode: string
  state: string
  department: string
}

export const mockEmployees = [
  {
    id: 1,
    firstname: 'Tony',
    lastname: 'Stark',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '45 boulevard Michel',
    city: 'New-York',
    zipCode: '3456',
    state: 'USA',
    department: 'Sales',
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Marley',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '45 Hollywood Bd',
    city: 'Los Angeles',
    zipCode: '3456',
    state: 'USA',
    department: 'Marketing',
  },
  {
    id: 3,
    firstname: 'Wonder',
    lastname: 'Women',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: 'dans le ciel',
    city: 'Los Angeles',
    zipCode: '3456',
    state: 'USA',
    department: 'Engineering',
  },
]
