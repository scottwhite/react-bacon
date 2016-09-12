import Polyglot from 'node-polyglot'
import Api from './api'
import translations from './locales/all'

export default (function(){
  let p;
  console.debug("only once")

  function setup(locale){
    //en test
    if(locale && /^en/.test(locale)){
      locale = 'en';
    }
    return new Promise(function(resolve, reject){
      let data = translations[locale];
      if(!data){
        reject(new Error('no translation found'))
        p = null;
      }
      p = new Polyglot({phrases: data});
      resolve(p);
    })
  }

  function setupTest(phrases){
    p = new Polyglot({phrases: phrases});
  }

  function _t(key, options){
    if(!p){
      throw new Error('need to call setup')
    }
    if(options !== undefined){
      return p.t(key, options)
    }
    return p.t(key)
  }

  return {
    polyglot: p,
    setup: setup,
    setupTest: setupTest,
    _t: _t
  }
})()
