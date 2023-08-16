"use strict";

const position = (pos)=>{
    console.log(pos);
}

const err = ()=> console.log(e);

const option = {
    maximumAge:0,
    timeout: 3000,
    enableHighAccuracy: true
}

const geolocation = navigator.geolocation.getCurrentPosition(position, err, option);



