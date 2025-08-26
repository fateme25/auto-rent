export const convertToPersianDate = (dateStr) => {
  const formattedDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateStr));

  return formattedDate;
};



// export function toPersianDigits(str) {
//   const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
//   return str
//     ? str.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)])
//     : "";
// }