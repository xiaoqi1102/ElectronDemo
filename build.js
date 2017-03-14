/**
 * Created by xiaoqi on 2017/3/14.
 */
const builder = require('electron-builder');
const Platform = builder.Platform

builder.build({
    targets: Platform.WINDOWS.createTarget(),
    config: {
        "category":"Network"
    }
}).then((result)=> {
    console.log('result:',result)
}).catch((error)=> {
    console.log('error:',error);
})