  import { Helper } from '../utils/helper.js';
  import a1_0x3c6095 from '../utils/logger.js';
  import a1_0x2c0a27 from 'node-fetch';
  import { HttpsProxyAgent } from 'https-proxy-agent';
  export class API {
    constructor(_0x35a431, _0x2c7ff0, _0x25f8aa, _0xf2eab6) {
      this.url = _0x35a431;
      this.ua = Helper.randomUserAgent();
      this.proxy = _0x2c7ff0;
      this.origin = _0x25f8aa;
      this.something = _0xf2eab6;
    }
    ["generateHeaders"](_0x228369) {
      const _0x27effe = {
        'Accept': "application/json",
        'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
        'Content-Type': "application/json",
        'Sec-Fetch-Dest': "empty",
        'Sec-Fetch-Site': "same-site",
        'Sec-Fetch-Mode': "cors",
        'Cache-Control': "no-cache",
        'Connection': "keep-alive",
        'Pragma': "no-cache",
        'Origin': this.origin
      };
      if (_0x228369) {
        _0x27effe.Authorization = "Bearer " + _0x228369;
      }
      return _0x27effe;
    }
    ["replaceSensitiveData"](_0xb4bb2d) {
      if (this.something) {
        if (typeof this.something === "string") {
          const _0x655e7d = new RegExp(this.something, 'g');
          return _0xb4bb2d.replace(_0x655e7d, '?????');
        } else {
          if (Array.isArray(this.something)) {
            this.something.forEach(_0xddd6e1 => {
              const _0x5098e1 = new RegExp(_0xddd6e1, 'g');
              _0xb4bb2d = _0xb4bb2d.replace(_0x5098e1, "?????");
            });
          }
        }
      }
      return _0xb4bb2d;
    }
    async ['fetch'](_0x251cd6, _0x7a7254, _0x396cea, _0x59cb70 = {}, _0x31daef = {}, _0x3733dc = false) {
      const _0x409154 = _0x3733dc ? _0x251cd6 : '' + this.url + _0x251cd6;
      try {
        const _0x3b8e53 = {
          ...this.generateHeaders(_0x396cea),
          ..._0x31daef
        };
        const _0x4d9378 = {
          'headers': _0x3b8e53,
          'method': _0x7a7254,
          'referer': this.origin + '/'
        };
        a1_0x3c6095.info(_0x7a7254 + " : " + this.replaceSensitiveData(_0x409154) + " " + (this.proxy ? this.proxy : ''));
        for (let _0x2bad33 in _0x3b8e53) {
          _0x3b8e53[_0x2bad33] = this.replaceSensitiveData(_0x3b8e53[_0x2bad33]);
        }
        a1_0x3c6095.info("Request Header : " + JSON.stringify(_0x3b8e53));
        if (_0x7a7254 !== "GET") {
          _0x4d9378.body = '' + JSON.stringify(_0x59cb70);
          const _0x4e0e96 = this.replaceSensitiveData(_0x4d9378.body);
          a1_0x3c6095.info("Request Body : " + _0x4e0e96);
        }
        if (this.proxy) {
          _0x4d9378.agent = new HttpsProxyAgent(this.proxy, {
            'rejectUnauthorized': false
          });
        }
        const _0xe5378e = await a1_0x2c0a27(_0x409154, _0x4d9378);
        a1_0x3c6095.info("Response : " + _0xe5378e.status + " " + _0xe5378e.statusText);
        if (_0xe5378e.ok || _0xe5378e.status == 0x190 || _0xe5378e.status == 0x193) {
          const _0x5df36c = _0xe5378e.headers.get('content-type');
          let _0x22fa7d;
          if (_0x5df36c && _0x5df36c.includes('application/json')) {
            _0x22fa7d = await _0xe5378e.json();
            _0x22fa7d.status = _0xe5378e.status;
          } else {
            _0x22fa7d = {
              'status': _0xe5378e.status,
              'message': await _0xe5378e.text()
            };
          }
          if (_0xe5378e.ok) {
            _0x22fa7d.status = 0xc8;
          }
          let _0xe08256 = JSON.stringify(_0x22fa7d);
          _0xe08256 = this.replaceSensitiveData(_0xe08256);
          if (_0xe08256.length > 0xc8) {
            _0xe08256 = _0xe08256.substring(0x0, 0xc8) + '...';
          }
          a1_0x3c6095.info("Response Data : " + _0xe08256);
          return _0x22fa7d;
        } else {
          throw _0xe5378e;
        }
      } catch (_0x3bc282) {
        if (_0x3bc282.response.status == 0x194 || _0x3bc282.response.status == 0x193 || _0x3bc282.response.status == 0x1f7) {
          console.error("Detect API Change Stopping bot");
          throw Error("Detect API Change Stopping bot");
        }
        throw _0x3bc282;
      }
    }
  }