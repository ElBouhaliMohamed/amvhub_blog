import { getValue } from 'firebase/remote-config'
import { remoteConfig } from './firebase.client'

class FirebaseService {
  constructor (remoteConfig) {
    this.remoteConfig = remoteConfig
  }

  getConfigValue (key) {
    return getValue(remoteConfig, key)._value
  }
}

export default ({ app }, inject) => {
  inject('firebase', new FirebaseService(remoteConfig))
}
