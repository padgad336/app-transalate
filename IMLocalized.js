import React from 'react'
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';

export const translationGetters = {
  'en': () => require('./transalate/en.json'),
  'en-US': () => require('./transalate/en.json'),
  'en-TH': () => require('./transalate/en.json'),
  'th-TH': () => require('./transalate/th.json'),
  'th': () => require('./transalate/th.json'),
};

export const trans = memoize(
  (key, config) =>
    i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const init = () => {
  try{
    
    const [localelang,setLocalelang]=React.useState('en-Us')
    React.useMemo(
        ()=>{
            if(Localization?.locale){
                const langMachine=Localization?.locale
                const langs =['en','en-US','en-TH','th-TH','th']
                const langShow =langs?.filter((lang)=>lang===langMachine)
                setLocalelang(langShow[0]||'en')
            }
        },[Localization]
    )
  // let localelang = Localization.locale;
  let isRTL = Localization.isRTL;
console.log(localelang)
  trans.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {
    
    [localelang]: translationGetters[localelang](),
    // [localelang]: translationGetters['th'](),
  };
  i18n.locale = localelang;
  }catch(Error){
    console.log(Error)
  }
};