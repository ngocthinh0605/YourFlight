import moment from 'moment';

enum FormatType {
  DATE = 'dd, D MMM, YYYY',
  TIME = 'HH:mm',
  DATE_SORT = 'D MMM'
}
export const FormatDate = (date: string) => {
  const Date = moment(date).format(FormatType.DATE);
  const Time = moment(date).format(FormatType.TIME);
  const DateSort = moment(date).format(FormatType.DATE_SORT);
  return { Date, Time, DateSort };
};
export const FormatHour = (hour: number) => {
  var hours = Math.floor(hour / 60);
  var minutes = hour % 60;
  var minutesStr = minutes.toString();
  if (minutes + ''.length < 2) {
    minutesStr = '0' + minutes.toString();
  }
  return hours + 'h ' + minutesStr + 'm';
};

export const numberToCurrency = (number: number): string => {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  })
    .format(number)
    .toLocaleLowerCase();
};
