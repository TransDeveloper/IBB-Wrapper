/*  FOR PUBLIC USE  */
/* Author: Sophia Avigail Brooks <scross@finnacloud.net>                                        */
/* Description: A wrapper for the IBB api to get data from the Istanbul Municipality's APIs.    */
/* Copyright (c) 2024 Thefinnacompany Ltd, All rights reserved.                                 */

import soap from "soap";
import {SoapKit} from "./SoapKit.js";

export class Duyurular {
  constructor() {
    this.endpoint = 'https://api.ibb.gov.tr/iett/UlasimDinamikVeri/Duyurular.asmx?wsdl';
    this.soapKit = new SoapKit(this.endpoint);
  }

  async duyurular(){
    return this.soapKit.execMethod('GetDuyurular_json');
  }
}