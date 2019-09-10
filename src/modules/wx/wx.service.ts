import { Injectable } from '@nestjs/common';
import  http  from '../../common/http';
//const sign = require('../../common/sign');

@Injectable()
export class WxService {

  //获取openid
  async getOpenId(code: string): Promise<string> {
    const appID = process.env.APPID;
    const appSecret = process.env.APPSECRET;
    let result;
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appID}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
    let requisition = new http(url);
    await requisition.request().then(res => {
      result = res
    });
    return result
  }

  //计算签名 (暂待改写)
  // async signture(body): Promise<any> {
  //   const appID = process.env.APPID;
  //   const appSecret = process.env.APPSECRET;
  //   // 获取access_token
  //   let tokenUrl = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`;
  //   let access_token;
  //   let jsapi_ticket;
  //   let deadline;
  //   request(tokenUrl, function (error, response, body) {
  //     if (response.statusCode === 200) {
  //       body = JSON.parse(body);
  //       access_token = body.access_token;
  //       console.log('access_token============' + access_token);
  //       // 获取jsapi_ticket
  //       var ticketUrl = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${body.access_token}&type=jsapi`;
  //       request(ticketUrl, function (err, response, content) {
  //         content = JSON.parse(content);
  //         if (content.errcode == 0) {
  //           jsapi_ticket = content.ticket;
  //           console.log('jsapi_ticket============' + jsapi_ticket);
  //           // 计算signature
  //           deadline = new Date().getTime();
  //           // 通过调用计算签名方法
  //           console.log(body);
  //           console.log(body.url);
  //           var signatureStr = sign(content.ticket, body.url);
  //           // 当前时间戳
  //           signatureStr.deadline = new Date().getTime();
  //           console.log('signatureStr============' + signatureStr);
  //           // 返回给页面
  //           reqJson(200, null, signatureStr);
  //         }
  //         reqJson(200, null, '其他情况');
  //       });
  //     } else {
  //       console.log('request请求失败');
  //       reqJson(200, null, 'request请求失败');
  //     }
  //   });

  // }

}
