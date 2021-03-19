export const now: number = new Date().getTime();

export const updateTime = (date: string): number => {
  const [day, month, year] = date.split("/");
  return new Date(`${year}-${month}-${day}`).getTime();
};

export const verifyAge = (birthDate: string): boolean => {
  const birthDateTime: number = updateTime(birthDate);
  const ageInMilli: number = (now - birthDateTime) / 1000;
  const age: number = ageInMilli / (60 * 60 * 24 * 365);
  return age > 18;
};

// Day.JS NÃO CONSEGUI UTILIZAR
// export const date1: any = dayjs().format("DD/MM/YYYY");
// const date2: any = dayjs(birthDate).format("DD/MM/YYYY");
// console.log(date1);
// console.log(date2);
// const age = date1.diff(date2, "year");
// console.log(age);

// return age > 18;
