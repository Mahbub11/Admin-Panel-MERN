import {
  dataOverallStat as overallStat,
  dataTransaction as transactions,
} from "../data";

// hardcoded values
const currentMonth = "November";
const currentYear = 2021;
const currentDay = "2021-11-15";

const {
  totalCustomers,
  yearlyTotalSoldUnits,
  yearlySalesTotal,
  monthlyData,
  salesByCategory,
} = overallStat[0];

const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
  return month === currentMonth;
});

const todayStats = overallStat[0].dailyData.find(({ date }) => {
  return date === currentDay;
});

export const data = {
  totalCustomers: totalCustomers,
  yearlyTotalSoldUnits: yearlyTotalSoldUnits,
  yearlySalesTotal: yearlySalesTotal,
  salesByCategory:salesByCategory,
  monthlyData: monthlyData,
  thisMonthStats: thisMonthStats,
  transactions: transactions,
  todayStats
};
