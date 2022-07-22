export const dateFormat = 'DD.MM.YYYY';
export const serverDateFormat = 'YYYY-MM-DD';

export const currencySymbol = (currency) => {
  if(currency=='TL'){
      return '₺';
  }else if(currency=='USD'){
      return '$';
  }else if(currency=='EURO'){
      return '€';
  }else if(currency=='GBP'){
      return '£';
  }else{
      return '';
  }
}