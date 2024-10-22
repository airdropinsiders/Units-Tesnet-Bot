  import { Twisters } from 'twisters';
  import a7_0x549670 from './logger.js';
  import a7_0x381018 from '../core/core.js';
  import { privateKey } from '../../accounts/accounts.js';
  import { Helper } from './helper.js';
  export class Twist {
    constructor() {
      this.twisters = new Twisters();
    }
    ['log'](_0x4e8114 = '', _0x3b8c93 = '', _0x5f1cbd = new a7_0x381018(), _0x2cc6a8) {
      const _0x52b8c8 = privateKey.indexOf(_0x3b8c93);
      if (_0x2cc6a8 == undefined) {
        a7_0x549670.info("Account " + (_0x52b8c8 + 0x1) + " - " + _0x4e8114);
        _0x2cc6a8 = '-';
      }
      const _0x571788 = _0x5f1cbd.address ?? '-';
      const _0x4d1ef9 = _0x5f1cbd.balance ?? '-';
      const _0x25baa9 = _0x5f1cbd.user ?? {};
      const _0x5bfccc = _0x25baa9.up ?? {};
      const _0x425251 = _0x5bfccc.balance ?? '-';
      const _0x4ef2ed = {
        'balance': _0x4d1ef9,
        'up': _0x425251
      };
      this.twisters.put(_0x3b8c93.pk, {
        'text': "\n================== Account " + (_0x52b8c8 + 0x1) + " =================\n" + Helper.spinnerContent(_0x571788, _0x4e8114, _0x2cc6a8, _0x4ef2ed) + "\n==============================================\n      "
      });
    }
    ['info'](_0x4bd9b3 = '') {
      this.twisters.put(0x2, {
        'text': "\n==============================================\nInfo : " + _0x4bd9b3 + "\n=============================================="
      });
      return;
    }
    ["clearInfo"]() {
      this.twisters.remove(0x2);
    }
    ['clear'](_0x47c31c) {
      this.twisters.remove(_0x47c31c);
    }
  }