export const idCodeValidation = "^[0-9]{10}$";

export const phoneNumberValidation = "^[0]?[9][0|3|1|9|2]+[0-9]{8}$";

export const emailValidation = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"

export const homePhoneNumberValidation = "^[0][^9][^2|^9][0-9]{8}$"

export const ipAddressValidation = "^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$"

export const macAddressValidation = "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$"

export const clockValidation = "^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$"

export const dataValidation = "^[1][1-4][0-9]{2}\/((0[1-6]\/(0[1-9]|[1-2][0-9]|3[0-1]))|(0[7-9]\/(0[1-9]|[1-2][0-9]|30))|(1[0-1]\/(0[1-9]|[1-2][0-9]|30))|(12\/(0[1-9]|[1-2][0-9])))"

export const geoLocationValidation = {
    lat : "^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$",
    lon : "^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$"
}

export const IMEIvalidation = (imei) => {

    let arrayIMEI = [];
    let sum = 0;
    let multiply = 0;
    arrayIMEI = imei.split('');
    
    for(let i =0 ; i< imei.length ; i++){
        if (i % 2 === 0 ){
            sum += parseInt(arrayIMEI[i]);
        }else{
            
            multiply = parseInt(arrayIMEI[i]) * 2;
            if (multiply > 9 ) {
                
                sum += multiply % 10 + Math.floor(multiply / 10) ;
            }else {
                sum += multiply;
            }
        }
    }

    if (sum % 10 === 0 ) {
        return true;
    } else {
        return false;
    }
}

