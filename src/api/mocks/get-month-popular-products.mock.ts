import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza', amount: 10 },
    { product: 'Burger', amount: 5 },
    { product: 'Salad', amount: 3 },
    { product: 'Pasta', amount: 2 },
    { product: 'Pasta', amount: 2 },
  ])
})
