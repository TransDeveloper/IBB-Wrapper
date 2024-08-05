# IBB Wrapper
Who the fuck uses SOAP WSDL in 2024. A wrapper for the Istanbul Municipality's APIs is needed.

```javascript
// most broken down example; for most applications
import {SeferGeceikme, HatGuzergah, Duyurular} from './IBBWrapper.js'

await duyurular.duyurular();
await seferler.hatOtoKonum({ HatKodu: 151 })
await hatGuzergah.durakSorgula({ HatKodu: 151 })
```