const request = require('request');

export default class http {
    public UrlOrConfig: string | object
    constructor(UrlOrConfig: string | object) {
        this.UrlOrConfig = UrlOrConfig;
    }
    request() {
       return new Promise((resolve, reject) =>
            request(this.UrlOrConfig, (err, response, body) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(body);
                }
            })).catch((reason) => {
                // 有选择性的在此处抛出错误或不抛出
                console.log('catch:', reason);
            });
    }
}