/**
 * Created by xiaoqi on 2017/3/13.
 */
import {app,globalShortcut,BrowserWindow} from 'electron';
app.on('ready',()=>{
    let win =new BrowserWindow({width:800,height:600});
   /* globalShortcut.register('CommandOrControl+Y',()=>{

    })*/
   win.loadURL('http://github.com')
});
app.on('window-all-closed',()=>{
    if (process.platform != 'darwin') {
        app.quit();
    }
});