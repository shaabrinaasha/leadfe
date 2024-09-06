import React from "react";

import dynamic from "next/dynamic";

export const DashboardFilter = dynamic(
  () => import("@/app/components/pages/dashboard/filter-dropdown"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const ClosedSales = dynamic(
  () => import("@/app/components/pages/dashboard/closed-sales"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const ActiveSales = dynamic(
  () => import("@/app/components/pages/dashboard/active-sales"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const MonthlyTotal = dynamic(
  () => import("@/app/components/pages/dashboard/monthly-total"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const YearToDateTotal = dynamic(
  () => import("@/app/components/pages/dashboard/ytd-total"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const YearToDateTrend = dynamic(
  () => import("@/app/components/pages/dashboard/ytd-trend"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const TopSales = dynamic(
  () => import("@/app/components/pages/dashboard/top-sales"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

