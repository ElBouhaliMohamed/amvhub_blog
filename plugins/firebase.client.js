import { initializeApp, getApps, getApp } from 'firebase/app'
import { getRemoteConfig, fetchAndActivate } from 'firebase/remote-config'
import firebaseConfig from '../firebaseConfig.json'

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const remoteConfig = getRemoteConfig(app)

remoteConfig.settings.minimumFetchIntervalMillis = 3600000

const PREFIX = process.env.NODE_ENV.toUpperCase()

remoteConfig.defaultConfig[PREFIX + '_MAIN_URL'] = (PREFIX === 'DEVELOPMENT' ? 'http://localhost:8080/' : 'https:/amvhub.org/')
remoteConfig.defaultConfig[PREFIX + '_BLOG_URL'] = (PREFIX === 'DEVELOPMENT' ? 'http://localhost:3000/' : 'https:/blog.amvhub.org/')

fetchAndActivate(remoteConfig)
  .then(() => {
    console.log('Fetched remote config')
  }).catch((err) => {
    console.log(err)
  })

export { remoteConfig }
