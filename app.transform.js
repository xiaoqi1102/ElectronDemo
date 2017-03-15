'use strict';

var _electron = require('electron');

_electron.app.on('ready', function () {
    var win = new _electron.BrowserWindow({ width: 1400, height: 800 });
    /* globalShortcut.register('CommandOrControl+Y',()=>{
       })*/
    win.loadURL('http://admin.xxs120.com');
}); /**
     * Created by xiaoqi on 2017/3/13.
     */

_electron.app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        _electron.app.quit();
    }
});
