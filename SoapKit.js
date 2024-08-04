import soap from "soap";

export class SoapKit{
  constructor(endpoint) {
    this.endpoint = endpoint;
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

          const parsedResult = JSON.parse(jsonResult);
          resolve(parsedResult);
        }
      });
    });
  }
}