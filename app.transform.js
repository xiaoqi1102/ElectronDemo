'use strict';

var _electron = require('electron');

_electron.app.on('ready', function () {
    var win = new _electron.BrowserWindow({ width: 800, height: 600 });
    /* globalShortcut.register('CommandOrControl+Y',()=>{
       })*/
    win.loadURL('http://github.com');
}); /**
     * Created by xiaoqi on 2017/3/13.
     */

_electron.app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        _electron.app.quit();
    }
});
