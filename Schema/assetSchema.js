const mongoose = require('mongoose')
const assetSchema = mongoose.Schema({
    profileid:{
        type:String,
    },
    profilename:{
        type:String,
    },
    profiledesignation:{
        type:String,
    },
    profileunit:{
        type:String,
    },
    profilelocation:{
        type:String,
    },
    profilemobile:{
        type:String,
    },
    // profile
    dasktophdd:{
        type:String,
    },
    dasktopssd:{
        type:String,
    },
    dasktopram:{
        type:String,
    },
    dasktopprocessor:{
        type:String,
    },
    dasktopmodel:{
        type:String,
    },
    dasktopserial:{
        type:String,
    },
    dasktopkeybord:{
        type:String,
    },
    dasktopmouse:{
        type:String,
    },
    dasktoprecevedate:{
        type:String,
    },
    dasktopwarranty:{
        type:String,
    },
    dasktopPurchasevendor:{
        type:String,
    },
    dasktopdamage:{
        type:String,
    },
    // Desktop 
    monitorbrand:{
        type:String,
    },
    monitorinch:{
        type:String,
    },
    monitormodel:{
        type:String,
    },
    monitorserial:{
        type:String,
    },
    monitorreceivedate:{
        type:String,
    },
    monitorwarranty:{
        type:String,
    },
    monitorpurchesevendor:{
        type:String,
    },
    monitordamage:{
        type:String,
    },
    // Monitor 
    laptopbrand:{
        type:String,
    },
    laptopmodel:{
        type:String,
    },
    laptopcolor:{
        type:String,
    },
    laptophdd:{
        type:String,
    },
    laptopssd:{
        type:String,
    },
    laptopram:{
        type:String,
    },
    laptopprocessor:{
        type:String,
    },
    laptopserial:{
        type:String,
    },
    laptopkeybord:{
        type:String,
    },
    laptopmouse:{
        type:String,
    },
    laptopreceivedate:{
        type:String,
    },
    laptopwarranty:{
        type:String,
    },
    laptoppurchasevendor:{
        type:String,
    },
    laptopdamage:{
        type:String,
    },
    // laptop 
    printerbrand:{
        type:String
    },
    printermodel:{
        type:String
    },
    printerserial:{
        type:String
    },
    printerreceivedate:{
        type:String
    },
    printerwarranty:{
        type:String
    },
    printerpurchasevendor:{
        type:String
    },
    printertonernumber:{
        type:String
    },
    printertonerdate:{
        type:String
    },
    printerdamage:{
        type:String
    },
    // Pinter 
    scannerbrand:{
        type:String
    },
    scannermodel:{
        type:String
    },
    scannerserial:{
        type:String
    },
    scannerrecevedate:{
        type:String
    },
    scannerwarranty:{
        type:String
    },
    scannerpurchesevendor:{
        type:String
    },
    scannerdamage:{
        type:String
    },
    // Scenner 
    othersphdd:{
        type:String
    },
    otherspendrive:{
        type:String
    },
    othersreceivedate:{
        type:String
    },
    otherswarranty:{
        type:String
    },
    otherspurchesevendor:{
        type:String
    },
    // Others 
    previousId:{
        type:String
    },
    previousName:{
        type:String
    },
    previousdesignation:{
        type:String
    },
    previousunit:{
        type:String
    },
    previouslocation:{
        type:String
    },
    previousmobilenumber:{
        type:String
    },
    // previous 
    upsbrand:{
        type:String
    },
    upsmodel:{
        type:String
    },
    upsserial:{
        type:String
    },
    upsreceivedate:{
        type:String
    },
    upswarranty:{
        type:String
    },
    upsvendorname:{
        type:String
    },
    upsdamageinfo:{
        type:String
    },

    

})

module.exports = assetSchema