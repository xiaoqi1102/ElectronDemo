/**
 * Created by xiaoqi on 2017/3/13.
 */
import {app,globalShortcut,BrowserWindow} from 'electron';
app.on('ready',()=>{
    let win =new BrowserWindow({width:1400,height:800});
   /* globalShortcut.register('CommandOrControl+Y',()=>{

    })*/
   win.loadURL('http://admin.xxs120.com')
});
app.on('window-all-closed',()=>{
    if (process.platform != 'darwin') {
        app.quit();
    }
});
