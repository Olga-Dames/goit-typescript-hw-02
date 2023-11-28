/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
const enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thusday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: Week): boolean {
  return day === Week.Saturday || day === Week.Sunday
}