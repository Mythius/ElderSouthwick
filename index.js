const { app, BrowserWindow } = require('electron');
const createDesktopShortcut = require('create-desktop-shortcuts');

const name = "";


if (process.argv.length > 1 && process.argv[1] != '.') {
    const shortcutsCreated = createDesktopShortcut({
        windows: { 
            filePath: `%appdata%\\..\\local\\${name}\\${name}.exe`,
            icon: __dirname + '\\favicon.ico'
        }
    });
}


function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
    // icon: __dirname + '/site/favicon.ico'
  })

  win.loadFile('site/index.html')

  win.setMenu(null);
}

app.on('ready', createWindow)