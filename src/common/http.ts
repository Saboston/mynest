const request = require('request');

export const http = (UrlOrConfig: string | object) =>
    new Promise((resolve, reject) =>
        request(UrlOrConfig, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })).catch((reason) => {
            // 有选择性的在此处抛出错误或不抛出
            console.log('catch:', reason);
        });