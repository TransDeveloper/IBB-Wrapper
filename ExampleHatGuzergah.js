import {HatGuzergah} from "./HatGuzergah.js";
import {Duyurular} from "./Duyurular.js";
import {SeferGeceikme} from "./SeferGeceikme.js";

(async () => {
  const hatGuzergah = new HatGuzergah();
  const duyurular = new Duyurular();
  const seferler = new SeferGeceikme()

  try {
    // console.log(await duyurular.duyurular());
    seferler.hatOtoKonum({HatKodu:151}).then(console.log)

    // console.log(await hatGuzergah.hatSorgula({HatKodu: 151}));
  } catch (error) {
    console.error('Error:', error);
  }
})();
