export const dateFormat = 'DD.MM.YYYY';
export const serverDateFormat = 'YYYY-MM-DD';

export const currencySymbol = (currency) => {
  if(currency=='TRY'){
      return '₺';
  }else if(currency=='USD'){
      return '$';
  }else if(currency=='EUR'){
      return '€';
  }else if(currency=='GBP'){
      return '£';
  }else{
      return '';
  }
}

export const pricePeriod = (key) => {
    if(key=='Gunluk'){
        return 'Günlük';
    }
}