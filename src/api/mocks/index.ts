import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order.mock'
import { cancelOrderMock } from './cancel-order.mock'
import { deliverOrderMock } from './deliver-order.mock'
import { dispatchOrderMock } from './dispatch-order.mock'
import { getMonthCanceledOrdersAmountMock } from './get-canceled-month-orders-amount.mock'
import { getDailyRevenueInPeriodMock } from './get-daily-in-period.mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount.mock'
import { getManagedRestaurantMock } from './get-managed-restaurant.mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount.mock'
import { getPopularProductsMock } from './get-month-popular-products.mock'
import { getMonthRevenuetMock } from './get-month-revenue.mock'
import { getOrderMock } from './get-orders'
import { getOrderDetailsMock } from './get-orders-details.mock'
import { getProfileMock } from './get-profile.mock'
import { registerRestaurantMock } from './register-restaurant.mock'
import { signInMock } from './sign-in.mock'
import { updateProfileMock } from './update-profile.mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenuetMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrderMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMsw() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
