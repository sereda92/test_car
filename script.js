'use strict'
const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS:function(){
        return navigator.userAgent.match(/IOS/i);
    },
    Opera:function(){
        return navigator.userAgent.match(/Opera/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/Windows/i);
    },
    any: function(){
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if(isMobile.any()){
    document.body.classList.add('_touch')
}else{
    document.body.classList.add('_pc')
}