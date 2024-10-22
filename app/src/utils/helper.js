  import a5_0x547d11 from 'bip39';
  import a5_0x2662f5 from 'moment-timezone';
  import { ethers } from 'ethers';
  import { Bless } from './bless.js';
  import { Config } from '../../config/config.js';
  import { Twist } from './twist.js';
  import { RPC } from '../core/network/rpc.js';
  export class Helper {
    static ['display'] = Config.DISPLAY;
    static ['twist'] = this.display == 'TWIST' ? new Twist() : new Bless();
    static ['spinnerContent'] = (_0x59f7be, _0x29066d, _0x3042e1, _0x579337) => "\nAddress      : " + _0x59f7be + "\nBalance      : " + _0x579337.balance + " " + RPC.SYMBOL + " | " + _0x579337.up + " UP\n\n               \nStatus : " + _0x29066d + "\nDelay : " + _0x3042e1 + "\n";
    static ['delay'] = (_0x18f3c2, _0x4aee8d, _0x36dd96, _0x26506f) => {
      return new Promise(_0x1c7186 => {
        let _0x33f16d = _0x18f3c2;
        if (_0x4aee8d != undefined) {
          this.twist.log(_0x36dd96, _0x4aee8d, _0x26506f, "Delaying for " + this.msToTime(_0x18f3c2));
        } else {
          this.twist.info("Delaying for " + this.msToTime(_0x18f3c2));
        }
        const _0x369817 = setInterval(() => {
          _0x33f16d -= 0x3e8;
          if (_0x4aee8d != undefined) {
            this.twist.log(_0x36dd96, _0x4aee8d, _0x26506f, "Delaying for " + this.msToTime(_0x33f16d));
          } else {
            this.twist.info("Delaying for " + this.msToTime(_0x33f16d));
          }
          if (_0x33f16d <= 0x0) {
            clearInterval(_0x369817);
            _0x1c7186();
          }
        }, 0x3e8);
        setTimeout(async () => {
          clearInterval(_0x369817);
          await this.twist.clearInfo();
          if (_0x4aee8d) {
            this.twist.log(_0x36dd96, _0x4aee8d, _0x26506f);
          }
          _0x1c7186();
        }, _0x18f3c2);
      });
    };
    static ["randomUserAgent"]() {
      const _0x407eef = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
      return _0x407eef[Math.floor(Math.random() * _0x407eef.length)];
    }
    static ['readTime'](_0x514202) {
      const _0x35d7f3 = a5_0x2662f5.unix(_0x514202);
      return _0x35d7f3.format("YYYY-MM-DD HH:mm:ss");
    }
    static ["getCurrentTimestamp"]() {
      const _0x41953a = a5_0x2662f5().tz('Asia/Singapore').unix();
      return _0x41953a.toString();
    }
    static ["random"](_0x3c9ddf, _0x1ab266) {
      const _0x276eff = Math.floor(Math.random() * (_0x1ab266 - _0x3c9ddf + 0x1)) + _0x3c9ddf;
      return _0x276eff;
    }
    static ['randomFloat'](_0x25bf98, _0x57a564, _0x5d2274 = 0x4) {
      const _0x5735dc = Math.random() * (_0x57a564 - _0x25bf98) + _0x25bf98;
      return parseFloat(_0x5735dc.toFixed(_0x5d2274));
    }
    static ["msToTime"](_0x551bb9) {
      const _0x10deff = Math.floor(_0x551bb9 / 3600000);
      const _0x3c5da3 = _0x551bb9 % 3600000;
      const _0x34f3b1 = Math.floor(_0x3c5da3 / 60000);
      const _0xb02695 = _0x3c5da3 % 60000;
      const _0xe82e72 = Math.round(_0xb02695 / 0x3e8);
      return _0x10deff + " Hours " + _0x34f3b1 + " Minutes " + _0xe82e72 + " Seconds";
    }
    static ["generateRandomString"](_0x27d79b) {
      let _0x1a7ecf = '';
      const _0xd42979 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.length;
      for (let _0x9045ef = 0x0; _0x9045ef < _0x27d79b; _0x9045ef++) {
        _0x1a7ecf += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * _0xd42979));
      }
      return _0x1a7ecf;
    }
    static ["serializeBigInt"] = _0x2d804a => {
      return JSON.parse(JSON.stringify(_0x2d804a, (_0x5e5908, _0x430b06) => typeof _0x430b06 === "bigint" ? _0x430b06.toString() : _0x430b06));
    };
    static ['isMnemonic'](_0x15c6fb) {
      return a5_0x547d11.validateMnemonic(_0x15c6fb);
    }
    static ["isPrivateKey"](_0x29ffc1) {
      const _0x532885 = _0x29ffc1.replace(/^0x/, '');
      const _0x1700dd = /^[a-fA-F0-9]{64}$/;
      return _0x1700dd.test(_0x532885);
    }
    static ["determineType"](_0x3852e1) {
      if (this.isMnemonic(_0x3852e1)) {
        return "Secret Phrase";
      } else {
        if (this.isPrivateKey(_0x3852e1)) {
          return "Private Key";
        } else {
          return 'Unknown';
        }
      }
    }
    static ['generateNonce']() {
      return ethers.hexlify(ethers.randomBytes(0x10));
    }
    static ["isToday"](_0x339f6c) {
      const _0x6ec6b0 = new Date(_0x339f6c);
      const _0x65a31c = new Date();
      _0x65a31c.setHours(0x0, 0x0, 0x0, 0x0);
      const _0x23fd11 = new Date(_0x6ec6b0);
      _0x23fd11.setHours(0x0, 0x0, 0x0, 0x0);
      if (_0x23fd11.getTime() === _0x65a31c.getTime()) {
        return true;
      } else {
        return false;
      }
    }
    static ['findFunctionBySelector'](_0x56d12c, _0x5e9891) {
      for (const _0x24c212 of _0x5e9891) {
        for (const _0x194fe0 of _0x24c212) {
          if (_0x194fe0.type === 'function') {
            const _0x542870 = _0x194fe0.name + '(' + _0x194fe0.inputs.map(_0x5830b2 => _0x5830b2.type).join(',') + ')';
            const _0x27e87b = '0x' + ethers.keccak256(ethers.toUtf8Bytes(_0x542870)).slice(0x0, 0x8);
            if (_0x27e87b.includes(_0x56d12c)) {
              console.log("Function found: " + _0x542870);
              return _0x542870;
            }
          }
        }
      }
      console.log("Function not found");
      return null;
    }
    static ["convertQueryString"](_0x7539ea) {
      const _0x419521 = new URLSearchParams(_0x7539ea);
      const _0x450e84 = {};
      for (const [_0x594abf, _0x4f4ba5] of _0x419521.entries()) {
        _0x450e84[_0x594abf] = decodeURIComponent(_0x4f4ba5);
      }
      const _0x503298 = JSON.stringify(_0x450e84);
      return encodeURIComponent(_0x503298);
    }
    static ['showSkelLogo']() {
      console.log("AIRDROP INSIDER");
    }
  }