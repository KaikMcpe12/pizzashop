import { http, HttpResponse } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '2025-02-18',
      receipt: 200,
    },
    {
      date: '2025-02-19',
      receipt: 190,
    },
    {
      date: '2025-02-20',
      receipt: 300,
    },
    {
      date: '2025-02-21',
      receipt: 160,
    },
    {
      date: '2025-02-22',
      receipt: 400,
    },
    {
      date: '2025-02-23',
      receipt: 300,
    },
    {
      date: '2025-02-24',
      receipt: 220,
    },
  ])
})
