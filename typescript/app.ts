const age: boolean | number = 12;
console.log(age);

let myarr: ((number | { id: number }[])[] | { id: string })[] = [
  [[{ id: 1 }], 12],
  { id: "string" },
];

const isAdmin = (userName: string, password: string): boolean => {
  if (userName === "Matin" && password === "1234") return true;
  return false;
};

const sum = (a: string | number, b: string | number): string => {
  return a + b;
};
