export const newDate = () => {
  const today = new Date();
  const day = today.getDate();
  const year = today.getFullYear();
  const month = today.toLocaleString("en-US", { month: "long" });
  const newDate = day + " " + month + " " + year;
  return newDate;
};
