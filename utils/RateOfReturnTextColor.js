const RateOfReturnTextColor = (text) => {
  if (text.indexOf('+') >= 0) return '#f02654';
  if (text.indexOf('-') >= 0) return '#262ff0';

  return '#b5b5b5';
};

export default RateOfReturnTextColor;
