const grades = [
  { id: 1, value: "A,B" },
  { id: 2, value: "C" },
];

const garuntees = [{ id: 1 }];

const banks = [
  {
    id: 1,
    name: "melli",
    displayName: "بانک ملی ایران",
    interestRate: 23,
    maxLoan: 200,
    returnOptions: [12, 24, 36],
    garunteeCalculation: (creditScore) => {
      switch (creditScore) {
        case "A,B": {
          return [
            {
              id: 1,
              type: "check",
              price: 350,
              cashTo: "شرکت هما توسعه",
              amount: 1,
              monthsAhead: 6,
            },
            {
              id: 2,
              type: "check",
              price: 350,
              cashTo: "بانک ملی ایران",
              amount: 1,
              monthsAhead: 6,
            },
          ];
        }
        case "C": {
          return [
            {
              id: 1,
              type: "check",
              price: 350,
              cashTo: "شرکت هما توسعه",
              amount: 1,
              monthsAhead: 6,
            },
            {
              id: 2,
              type: "check",
              price: 350,
              cashTo: "شرکت هما توسعه",
              amount: 1,
              monthsAhead: 9,
            },
            {
              id: 3,
              type: "check",
              price: 350,
              cashTo: "بانک ملی ایران",
              amount: 1,
              monthsAhead: 6,
            },
          ];
        }
        default:
          return [];
      }
    },
    alerts: (creditScore) => {
      if (creditScore === "C") {
        return "شخص وام گیرنده نیازمند یک ضامن با گرید اعتباری A یا B جهت ارائه چک ضمانت می باشد.";
      }
    },
  },
  {
    id: 2,
    name: "blu",
    displayName: "بلوبانک",
    interestRate: 23,
    maxLoan: 100,
    returnOptions: [18],
    garunteeCalculation: (creditScore) => {
      switch (creditScore) {
        case "A,B": {
          return [
            {
              id: 1,
              type: "check",
              price: 350,
              cashTo: "شرکت هما توسعه",
              amount: 1,
              monthsAhead: 0,
            },
          ];
        }
        case "C": {
          return [
            {
              id: 1,
              type: "check",
              price: 350,
              cashTo: "شرکت هما توسعه",
              amount: 1,
              monthsAhead: 0,
            },
            {
              id: 1,
              type: "check",
              price: 350,
              cashTo: "شرکت هما توسعه",
              amount: 1,
              monthsAhead: 6,
            },
          ];
        }
        default:
          return [];
      }
    },
  },
];

const calculateLoanPayment = (loanPrice, annualInterestRate, returnMonths) => {
  const monthlyInterestRate = annualInterestRate / 12 / 100;

  const monthlyPayment =
    (loanPrice *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, returnMonths)) /
    (Math.pow(1 + monthlyInterestRate, returnMonths) - 1);

  const totalPayment = monthlyPayment * returnMonths;
  const totalInterest = totalPayment - loanPrice;
  const garunteeCheckPrice = totalPayment + totalPayment * (25 / 100);

  return {
    monthlyPayment: +monthlyPayment.toFixed(0),
    totalPayment: +totalPayment.toFixed(0),
    totalInterest: +totalInterest.toFixed(0),
    garunteeCheckPrice: Math.ceil(garunteeCheckPrice),
  };
};

console.log(calculateLoanPayment(800_000_000, 23, 18));
