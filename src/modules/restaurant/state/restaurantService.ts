import apiClient from '../../../api'
import { Restaurant, Schedule } from './restaurantSlice'

export type AddRestaurantInput = Omit<Restaurant, 'id' | 'schedule'> & {
  schedule: Omit<Schedule, 'id'>[]
}

export type UpdateRestaurantInput = Omit<Restaurant, 'schedule'> & {
  schedule: (Omit<Schedule, 'id'> | Schedule)[]
}

const getRestaurants = async () => {
  return apiClient.get<Restaurant[]>('/restaurants').then((res) => res.data)
}

const getRestaurant = async (id: number) => {
  return apiClient.get<Restaurant>(`/restaurants/${id}`).then((res) => res.data)
}

const addRestaurant = async (input: AddRestaurantInput) => {
  // Any created resto is open by default unless its manager closes it manually
  return apiClient
    .post<Restaurant>('/restaurants', { ...input, open: true })
    .then((res) => res.data)
}

const updateRestaurant = async (input: UpdateRestaurantInput) => {
  return apiClient
    .put<Restaurant>(`/restaurants/${input.id}`, input)
    .then((res) => res.data)
}

const deleteRestaurant = async (id: string) => {
  return apiClient
    .delete<Restaurant>(`/restaurants/${id}`)
    .then((res) => res.data)
}

export const restaurantService = {
  getRestaurants,
  addRestaurant,
  updateRestaurant,
  getRestaurant,
  deleteRestaurant,
}

export default restaurantService
