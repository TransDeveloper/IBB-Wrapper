/*  FOR PUBLIC USE  */
/* Author: Sophia Avigail Brooks <scross@finnacloud.net>                                        */
/* Description: A wrapper for the IBB api to get data from the Istanbul Municipality's APIs.    */
/* Copyright (c) 2024 Thefinnacompany Ltd, All rights reserved.                                 */

import {SoapKit} from "./SoapKit.js";

export class HatGuzergah {
  constructor() {
    this.endpoint = 'https://api.ibb.gov.tr/iett/UlasimAnaVeri/HatDurakGuzergah.asmx?wsdl';
    this.soapKit = new SoapKit(this.endpoint);
  }
  async hatSorgula(options = { HatNo: '' }) {
    if (!options.HatNo) options = { HatNo: '' };
    return this.soapKit.execMethod('GetHat_json', options);
  }

  async durakSorgula(options = { DurakKodu: '' }){
    if (!options.DurakKodu) options = { DurakKodu: '' };
    return this.soapKit.execMethod('GetDurak_json', options);
  }

  async garajSorgula(){
    return this.soapKit.execMethod('GetGaraj_json');
  }
}