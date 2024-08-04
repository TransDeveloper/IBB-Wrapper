/*  FOR PUBLIC USE  */
/* Author: Sophia Avigail Brooks <scross@finnacloud.net>                                        */
/* Description: A wrapper for the IBB api to get data from the Istanbul Municipality's APIs.    */
/* Copyright (c) 2024 Thefinnacompany Ltd, All rights reserved.                                 */

import soap from "soap";

export class HatGuzergah {
	constructor() {
		this.endpoint = 'https://api.ibb.gov.tr/iett/UlasimAnaVeri/HatDurakGuzergah.asmx?wsdl';
	}

	doSoapRequest(responseMethod, options = { HatKodu: '' }, callback) {
		soap.createClient(this.endpoint, { wsdl_headers: { connection: 'keep-alive' } }, (err, client) => {
			if (err) return callback(err);

			client[responseMethod](options, async (err, result) => {
				await callback(err, result);
			});
		});
	}

	async execMethod(method, options = { HatKodu: '', DurakKodu: '', }) {
		return new Promise((resolve, reject) => {
			this.doSoapRequest(method, options, (err, result) => {
				if (err) {
					reject(err);
				} else {
					const jsonResult = result[`${method}Result`];
                    if (!jsonResult) reject(new Error(`Invalid response from ${method}`));

                    // Parse JSON and return the result
                    const parsedResult = JSON.parse(jsonResult);
                    resolve(parsedResult);
				}
			});
		});
	}

	async hatSorgula(options = { HatKodu: '' }) {
		if (!options.HatKodu) throw new Error('HatKodu was not specified')
		return this.execMethod('GetHat_json', options);
	}

	async durakSorgula(options = { DurakKodu: '' }){
		if (!options.DurakKodu) throw new Error('DurakKodu was not specified')
		return this.execMethod('GetDurak_json', options);
	}

	async garajSorgula(){
		return this.execMethod('GetGaraj_json');
	}
}