/*  FOR PUBLIC USE  */
/* Author: Sophia Avigail Brooks <scross@finnacloud.net>                                        */
/* Description: A wrapper for the IBB api to get data from the Istanbul Municipality's APIs.    */
/* Copyright (c) 2024 Thefinnacompany Ltd, All rights reserved.                                 */

import {SoapKit} from "./SoapKit.js";

export class SeferGeceikme {
  constructor() {
    this.endpoint = 'https://api.ibb.gov.tr/iett/FiloDurum/SeferGerceklesme.asmx?wsdl';
    this.soapKit = new SoapKit(this.endpoint);
  }

  async aracFiloKonum(){
    return this.soapKit.execMethod('GetFiloAracKonum_json');
  }

  async bozukSatih(){
    return this.soapKit.execMethod('GetBozukSatih_json');
  }
  async hatOtoKonum(options = { HatKodu: '' }) {
    if (!options.HatKodu) options = { HatKodu: '' };
    return this.soapKit.execMethod('GetHatOtoKonum_json', options);
  }
  async kazaLokasyon(){
    // requires date (string) - add later.
    // TODO: finish kaza lokasyon data validation
    return this.soapKit.execMethod('GetKazaLokasyon_json');
  }
}