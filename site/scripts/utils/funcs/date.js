const formatDate = (uDate, option) => {
  let date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
  return date;
};

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);

  return result;
};

export const getDate = (date) => {
  return {
    day: formatDate(date, { day: "2-digit" }),
    month: formatDate(date, { month: "numeric" }),
    monthTitle: formatDate(date, { month: "long" }),
    year: formatDate(date, { year: "numeric" }),
    dayWeek: formatDate(date, { weekday: "long" }),
  };
};
