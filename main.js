{
  "name": "proyecto-poesia",
  "version": "1.0.0",
  "description": "Aplicación de Escritorio de Poesía",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "author": "Dani",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "https://github.com/danisuarezinef-ai/diccionario.json.git"
  },
  "devDependencies": {
    "electron": "^30.0.0",
    "electron-builder": "^24.13.3"
  },
  "dependencies": {
    "electron-updater": "^6.1.7"
  },
  "build": {
    "appId": "com.danisuarez.proyectopoesia",
    "productName": "Proyecto Poesía",
    "publish": [
      {
        "provider": "github",
        "owner": "danisuarezinef-ai",
        "repo": "diccionario.json"
      }
    ],
    "win": {
      "target": "nsis"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "createDesktopShortcut": true
    }
  }
}
