import { http, HttpResponse } from 'msw'

import type {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: '1',
        priceInCents: 12.99,
        product: { name: 'Pepperoni Pizza' },
        quantity: 2,
      },
      {
        id: '2',
        product: { name: 'Margherita Pizza' },
        priceInCents: 10.99,
        quantity: 1,
      },
    ],
    totalInCents: 36.97,
  })
})
