import {HatGuzergah} from "./HatGuzergah.js";

(async () => {
  const hatGuzergah = new HatGuzergah();
  try {
    console.log(await hatGuzergah.hatSorgula({HatKodu: 151}));
  } catch (error) {
    console.error('Error:', error);
  }
})();
