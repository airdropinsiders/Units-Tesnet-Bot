const _0x10d5e1=_0x377c;(function(_0x5ae00b,_0x688b7e){const _0xc2af86=_0x377c,_0x57c1fa=_0x5ae00b();while(!![]){try{const _0x3962c5=-parseInt(_0xc2af86(0x188))/0x1*(parseInt(_0xc2af86(0x141))/0x2)+-parseInt(_0xc2af86(0x16f))/0x3+parseInt(_0xc2af86(0x184))/0x4+parseInt(_0xc2af86(0x18c))/0x5*(-parseInt(_0xc2af86(0x193))/0x6)+parseInt(_0xc2af86(0x16b))/0x7+parseInt(_0xc2af86(0x159))/0x8+parseInt(_0xc2af86(0x147))/0x9*(parseInt(_0xc2af86(0x1b2))/0xa);if(_0x3962c5===_0x688b7e)break;else _0x57c1fa['push'](_0x57c1fa['shift']());}catch(_0x463cfa){_0x57c1fa['push'](_0x57c1fa['shift']());}}}(_0x3730,0x76da2));import{ethers}from'ethers';import{API}from'../api/api.js';import{privateKey}from'../../accounts/accounts.js';import{Helper}from'../utils/helper.js';function _0x3730(){const _0x216753=['status','info','formatEther','Successfully\x20connect\x20to\x20Unit0...','connectWallet','message','pending','Connecting\x20to\x20account\x20:\x20','Failed\x20to\x20check\x20Daily\x20Check\x20In\x20info\x20-\x20','refreshToken','acc','Getting\x20Missions\x20list...','signMessage','getUserInfo','4502043NlbWXD','TX\x20DATA\x20','Successfully\x20get\x20missions','https://backend.unitsapp.net/user-auth/login?strategy=ETHEREUM_SIGNATURE&token=','2444100PnLypz','transfer','Wallet','preLoginUnit0','loginMessage','Try\x20to\x20claim\x20Mission\x20','indexOf','EXPLORER','determineType','Failed\x20to\x20request\x20faucet\x20-\x20','trading','Checking\x20Daily\x20Check\x20In\x20Info...','You\x20already\x20Check\x20In','Successfully\x20get\x20user\x20information','completeMissions','msToTime','getMissions','serializeBigInt','getUserScoreBoard','Failed\x20to\x20Check\x20In\x20-\x20','startTrading','489508xDpebm','Successfully\x20Trade','Account\x20Type\x20:\x20','Invalid\x20account\x20Secret\x20Phrase\x20or\x20Private\x20Key','587gRgcEq','/game-clicker/trend-history','tx/','Tx\x20Executed\x20Waiting\x20For\x20Block\x20Confirmation...','4606585kfJQFA','address','executeTx','hash','loginUnit0','parseEther','something','6iDcqvI','fetch','sendTransaction','\x20-\x20','tokens','getOptimalNonce','user','wallet','Successfully\x20request\x20faucet','GET','Failed\x20to\x20get\x20missions\x20-\x20','Connecting\x20to\x20Unit0...','currentStatus','Private\x20Key','gwei','Wallet\x20connected\x20','parseUnits','provider','Tx\x20Executed\x20\x0a','Successfully\x20Claim\x20Missions\x20','/game-clicker/submit','token','stringify','Successfully\x20Check\x20In','RPCURL','Failed\x20to\x20Complete\x20Missions\x20-\x20','Failed\x20to\x20Trade\x20-\x20','&address=','maincode','delay','Try\x20to\x20requesting\x20faucet...','180790lxMYqX','\x20to\x20','trim','Trying\x20to\x20transfer\x20','label','Executing\x20TX...','tradingTime','POST','access_token','checkIn','/user-auth/me','Failed\x20to\x20connect\x20to\x20Unit0\x20-\x20','https://backend.unitsapp.net/user-auth/login-request?strategy=ETHEREUM_SIGNATURE&address=','/faucet/claim','Try\x20to\x20Check\x20In...','2832yUPNIp','Successfully\x20login\x20to\x20Unit0','Tx\x20Confirmed\x20and\x20Finalizing:\x20','data','getFeeData','0.1','846MTrwOY','Failed\x20to\x20login\x20-\x20','getTransactionCount','CHAINID','wait','Checking\x20faucet\x20await\x20time...','getBalance','JsonRpcProvider','/daily-rewards/today-info','latest','fromPhrase','attemptAwaitSeconds','coolingSpeed','/scoreboard/me','https://backend.unitsapp.net','getFaucet','Failed\x20Check\x20Faucet\x20-\x20','...','4712600EAvNTN','checkDailyCheckIn','balance','todayClaimed'];_0x3730=function(){return _0x216753;};return _0x3730();}import _0x2163cb from'../utils/logger.js';import{RPC}from'./network/rpc.js';import{Config}from'../../config/config.js';function _0x377c(_0x2155a0,_0x7ad69c){const _0x3730a4=_0x3730();return _0x377c=function(_0x377ca3,_0x197adc){_0x377ca3=_0x377ca3-0x136;let _0x1ee9a9=_0x3730a4[_0x377ca3];return _0x1ee9a9;},_0x377c(_0x2155a0,_0x7ad69c);}export default class Core extends API{constructor(_0x1f3c71,_0x23e46a){const _0x117dc2=_0x377c;super(_0x117dc2(0x155),_0x23e46a,'https://app.unitsapp.net','ca764a4b-b720-4130-905d-e7a5c86525b5'),this[_0x117dc2(0x1af)]=this[_0x117dc2(0x192)],this['acc']=_0x1f3c71,this['provider']=new ethers[(_0x117dc2(0x14e))](RPC[_0x117dc2(0x1ab)],RPC[_0x117dc2(0x14a)]),this['tradingTime']=0x0;}async[_0x10d5e1(0x161)](){const _0x5edf68=_0x10d5e1;try{const _0xe094e0=this['acc']['pk'],_0x1e29ac=privateKey[_0x5edf68(0x175)](this[_0x5edf68(0x167)]);await Helper['delay'](0x3e8,this[_0x5edf68(0x167)],_0x5edf68(0x164)+(_0x1e29ac+0x1),this);const _0x4b1cdf=Helper[_0x5edf68(0x177)](_0xe094e0);_0x2163cb[_0x5edf68(0x15e)](_0x5edf68(0x186)+_0x4b1cdf);if(_0x4b1cdf=='Secret\x20Phrase')this['wallet']=new ethers[(_0x5edf68(0x171))][(_0x5edf68(0x151))](_0xe094e0,this[_0x5edf68(0x1a4)]);else{if(_0x4b1cdf==_0x5edf68(0x1a0))this[_0x5edf68(0x19a)]=new ethers[(_0x5edf68(0x171))](_0xe094e0[_0x5edf68(0x1b4)](),this[_0x5edf68(0x1a4)]);else throw Error(_0x5edf68(0x187));}this['address']=this['wallet'][_0x5edf68(0x18d)],await Helper['delay'](0x3e8,this[_0x5edf68(0x167)],_0x5edf68(0x1a2)+JSON[_0x5edf68(0x1a9)](this['wallet']['address']),this);}catch(_0x5b74d5){throw _0x5b74d5;}}async[_0x10d5e1(0x170)](){const _0x2e850a=_0x10d5e1,_0x486c73=Helper['randomFloat'](Config['ONCHAINTXAMOUNTMIN'],Config['ONCHAINTXAMOUNTMAX']);try{await Helper[_0x2e850a(0x1b0)](0x3e8,this[_0x2e850a(0x167)],_0x2e850a(0x1b5)+_0x486c73+_0x2e850a(0x1b3)+this[_0x2e850a(0x18d)],this);const _0x1625b2=await this[_0x2e850a(0x198)](),_0x48213a=await this['provider'][_0x2e850a(0x145)](),_0x507a15={'to':this['address'],'value':ethers[_0x2e850a(0x191)](_0x486c73['toString']()),'nonce':_0x1625b2,'gasLimit':_0x48213a['maxFeePerGas'],'gasPrice':ethers[_0x2e850a(0x1a3)](_0x2e850a(0x146),_0x2e850a(0x1a1))};await this['executeTx'](_0x507a15);}catch(_0x117768){await Helper[_0x2e850a(0x1b0)](0x3e8,this['acc'],'Error\x20during\x20transfer\x20'+_0x486c73+_0x2e850a(0x1b3)+this[_0x2e850a(0x18d)]+_0x2e850a(0x196)+_0x117768['message'],this);}}async[_0x10d5e1(0x198)](){const _0xb3ffe8=_0x10d5e1;try{const _0x5e3ab3=await this[_0xb3ffe8(0x1a4)]['getTransactionCount'](this[_0xb3ffe8(0x19a)][_0xb3ffe8(0x18d)],_0xb3ffe8(0x150)),_0x2bb304=await this['provider'][_0xb3ffe8(0x149)](this['wallet'][_0xb3ffe8(0x18d)],_0xb3ffe8(0x163)),_0x5c965d=_0x2bb304>_0x5e3ab3?_0x2bb304:_0x5e3ab3;return _0x5c965d;}catch(_0x51cb74){throw _0x51cb74;}}async[_0x10d5e1(0x14d)](_0x43b244=![]){const _0x4bbca1=_0x10d5e1;try{!_0x43b244&&await Helper[_0x4bbca1(0x1b0)](0x1f4,this[_0x4bbca1(0x167)],'Getting\x20wallet\x20balance\x20of\x20'+this[_0x4bbca1(0x19a)][_0x4bbca1(0x18d)],this);const _0x127f3c=ethers[_0x4bbca1(0x15f)](await this[_0x4bbca1(0x1a4)]['getBalance'](this[_0x4bbca1(0x19a)][_0x4bbca1(0x18d)]));this[_0x4bbca1(0x15b)]=_0x127f3c,await Helper[_0x4bbca1(0x1b0)](0x1f4,this['acc'],'Balance\x20updated',this);}catch(_0xa7334c){throw _0xa7334c;}}async[_0x10d5e1(0x18e)](_0x2a7523){const _0x3e7a6d=_0x10d5e1;_0x2163cb[_0x3e7a6d(0x15e)](_0x3e7a6d(0x16c)+JSON[_0x3e7a6d(0x1a9)](Helper[_0x3e7a6d(0x180)](_0x2a7523))),await Helper['delay'](0x1f4,this['acc'],_0x3e7a6d(0x137),this);const _0x17c3fd=await this['wallet'][_0x3e7a6d(0x195)](_0x2a7523);await Helper[_0x3e7a6d(0x1b0)](0x1f4,this[_0x3e7a6d(0x167)],_0x3e7a6d(0x18b),this);const _0x183496=await _0x17c3fd[_0x3e7a6d(0x14b)]();_0x2163cb['info'](_0x3e7a6d(0x143)+JSON[_0x3e7a6d(0x1a9)](_0x183496)),await Helper['delay'](0x1388,this[_0x3e7a6d(0x167)],_0x3e7a6d(0x1a5)+RPC[_0x3e7a6d(0x176)]+_0x3e7a6d(0x18a)+_0x183496[_0x3e7a6d(0x18f)],this),await this[_0x3e7a6d(0x14d)](!![]);}async[_0x10d5e1(0x172)](){const _0x2a3380=_0x10d5e1;try{await Helper[_0x2a3380(0x1b0)](0x1f4,this['acc'],_0x2a3380(0x19e),this);const _0x76264e=await this[_0x2a3380(0x194)](_0x2a3380(0x13e)+this['address'],'GET',undefined,undefined,undefined,!![]);if(_0x76264e[_0x2a3380(0x15d)]==0xc8)this[_0x2a3380(0x173)]=_0x76264e[_0x2a3380(0x162)],this[_0x2a3380(0x1a8)]=_0x76264e[_0x2a3380(0x1a8)],await Helper['delay'](0x1f4,this[_0x2a3380(0x167)],_0x2a3380(0x160),this),await this[_0x2a3380(0x190)]();else throw Error(_0x2a3380(0x13d)+_0x76264e[_0x2a3380(0x162)]);}catch(_0x188cb0){throw _0x188cb0;}}async[_0x10d5e1(0x190)](){const _0x49d746=_0x10d5e1;try{await Helper[_0x49d746(0x1b0)](0x1f4,this[_0x49d746(0x167)],'Try\x20to\x20login...',this);const _0x5ec77c=await this[_0x49d746(0x19a)][_0x49d746(0x169)](this[_0x49d746(0x173)]),_0xf19d56=await this[_0x49d746(0x194)](_0x49d746(0x16e)+this[_0x49d746(0x1a8)]+_0x49d746(0x1ae)+this[_0x49d746(0x18d)]+'&signature='+_0x5ec77c,_0x49d746(0x19c),undefined,undefined,undefined,!![]);if(_0xf19d56[_0x49d746(0x15d)]==0xc8)this[_0x49d746(0x1a8)]=_0xf19d56[_0x49d746(0x197)][_0x49d746(0x13a)],this[_0x49d746(0x166)]=_0xf19d56[_0x49d746(0x197)]['refresh_token'],this[_0x49d746(0x199)]=_0xf19d56[_0x49d746(0x199)],await Helper[_0x49d746(0x1b0)](0x3e8,this[_0x49d746(0x167)],_0x49d746(0x142),this);else throw Error(_0x49d746(0x148)+_0xf19d56[_0x49d746(0x162)]);}catch(_0x3bc153){throw _0x3bc153;}}async[_0x10d5e1(0x16a)](_0x1f65b6=![]){const _0x2149e4=_0x10d5e1;try{_0x1f65b6&&await Helper[_0x2149e4(0x1b0)](0x1f4,this['acc'],'Getting\x20user\x20info...',this);const _0x4ce64b=await this[_0x2149e4(0x194)](_0x2149e4(0x13c),'GET',this[_0x2149e4(0x1a8)]);if(_0x4ce64b[_0x2149e4(0x15d)]==0xc8)this[_0x2149e4(0x199)]=_0x4ce64b,_0x1f65b6&&await Helper[_0x2149e4(0x1b0)](0x3e8,this['acc'],_0x2149e4(0x17c),this),await this[_0x2149e4(0x181)]();else throw Error(_0x2149e4(0x148)+_0x4ce64b['message']);}catch(_0x20c3f1){throw _0x20c3f1;}}async['getUserScoreBoard'](_0x2448b7=![]){const _0x5e6ed1=_0x10d5e1;try{const _0x29a631=await this[_0x5e6ed1(0x194)](_0x5e6ed1(0x154),_0x5e6ed1(0x19c),this[_0x5e6ed1(0x1a8)]);if(_0x29a631[_0x5e6ed1(0x15d)]==0xc8)this[_0x5e6ed1(0x199)]['up']=_0x29a631;else throw Error('Failed\x20to\x20login\x20-\x20'+_0x29a631[_0x5e6ed1(0x162)]);}catch(_0x460416){throw _0x460416;}}async['checkFaucet'](){const _0x1c328f=_0x10d5e1;try{await Helper[_0x1c328f(0x1b0)](0x1f4,this['acc'],_0x1c328f(0x14c),this);const _0x155628=await this[_0x1c328f(0x194)]('/faucet/timer',_0x1c328f(0x19c),this[_0x1c328f(0x1a8)]);if(_0x155628[_0x1c328f(0x15d)]==0xc8)_0x155628[_0x1c328f(0x152)]==0x0?await this[_0x1c328f(0x156)]():await Helper[_0x1c328f(0x1b0)](0xbb8,this['acc'],'Faucet\x20await\x20time\x20is\x20still\x20in\x20cooldown\x20for\x20'+Helper[_0x1c328f(0x17e)](_0x155628[_0x1c328f(0x152)]*0x3e8),this);else throw Error(_0x1c328f(0x157)+_0x155628[_0x1c328f(0x162)]);}catch(_0xbef6da){throw _0xbef6da;}}async[_0x10d5e1(0x156)](){const _0x507b63=_0x10d5e1;try{await Helper[_0x507b63(0x1b0)](0x1f4,this[_0x507b63(0x167)],_0x507b63(0x1b1),this);const _0x259fef=await this['fetch'](_0x507b63(0x13f),_0x507b63(0x139),this[_0x507b63(0x1a8)]);if(_0x259fef[_0x507b63(0x15d)]==0xc8)await Helper['delay'](0x3e8,this[_0x507b63(0x167)],_0x507b63(0x19b),this);else throw Error(_0x507b63(0x178)+_0x259fef['message']);}catch(_0x4d9043){throw _0x4d9043;}}async[_0x10d5e1(0x15a)](){const _0x135805=_0x10d5e1;try{await Helper[_0x135805(0x1b0)](0x1f4,this[_0x135805(0x167)],_0x135805(0x17a),this);const _0x5e6caa=await this[_0x135805(0x194)](_0x135805(0x14f),_0x135805(0x19c),this[_0x135805(0x1a8)]);if(_0x5e6caa[_0x135805(0x15d)]==0xc8)!_0x5e6caa[_0x135805(0x15c)]?await this['checkIn']():await Helper['delay'](0x3e8,this[_0x135805(0x167)],_0x135805(0x17b),this);else throw Error(_0x135805(0x165)+_0x5e6caa[_0x135805(0x162)]);}catch(_0x582b50){throw _0x582b50;}}async[_0x10d5e1(0x13b)](){const _0x436bb5=_0x10d5e1;try{await Helper[_0x436bb5(0x1b0)](0x1f4,this[_0x436bb5(0x167)],_0x436bb5(0x140),this);const _0x4e566a=await this[_0x436bb5(0x194)]('/daily-rewards/claim',_0x436bb5(0x139),this[_0x436bb5(0x1a8)]);if(_0x4e566a[_0x436bb5(0x15d)]==0xc8)await Helper[_0x436bb5(0x1b0)](0x3e8,this['acc'],_0x436bb5(0x1aa),this);else throw Error(_0x436bb5(0x182)+_0x4e566a['message']);}catch(_0x4b7d11){throw _0x4b7d11;}}async[_0x10d5e1(0x17f)](){const _0x573d7e=_0x10d5e1;try{await Helper[_0x573d7e(0x1b0)](0x1f4,this[_0x573d7e(0x167)],_0x573d7e(0x168),this);const _0x200fc5=await this[_0x573d7e(0x194)]('/missions?filter%5Bprogress%5D=true&filter%5Brewards%5D=true&filter%5BcompletedPercent%5D=true&filter%5Bhidden%5D=false&filter%5Btarget%5D=TELEGRAM&filter%5Bdate%5D=2024-10-22T09:32:09.802Z&filter%5Bgrouped%5D=true&filter%5Bstatus%5D=AVAILABLE&filter%5BexcludeCategories%5D=REFERRALS',_0x573d7e(0x19c),this[_0x573d7e(0x1a8)]);if(_0x200fc5[_0x573d7e(0x15d)]==0xc8)this['missions']=_0x200fc5[_0x573d7e(0x144)],await Helper[_0x573d7e(0x1b0)](0x3e8,this[_0x573d7e(0x167)],_0x573d7e(0x16d),this);else throw Error(_0x573d7e(0x19d)+_0x200fc5[_0x573d7e(0x162)]);}catch(_0x4c2c36){throw _0x4c2c36;}}async[_0x10d5e1(0x17d)](_0x547ffc){const _0x40fdd5=_0x10d5e1;try{await Helper[_0x40fdd5(0x1b0)](0x1f4,this[_0x40fdd5(0x167)],_0x40fdd5(0x174)+_0x547ffc[_0x40fdd5(0x136)]+_0x40fdd5(0x158),this);const _0x477775=await this[_0x40fdd5(0x194)]('/mission-reward/'+_0x547ffc['id'],_0x40fdd5(0x139),this['token']);if(_0x477775['status']==0xc8)await this[_0x40fdd5(0x16a)](),await Helper[_0x40fdd5(0x1b0)](0x3e8,this[_0x40fdd5(0x167)],_0x40fdd5(0x1a6)+_0x547ffc['label'],this);else throw Error(_0x40fdd5(0x1ac)+_0x477775[_0x40fdd5(0x162)]);}catch(_0x59b56c){throw _0x59b56c;}}async[_0x10d5e1(0x183)](_0x318d38=![],_0x339cdb=0x0){const _0x2340e8=_0x10d5e1;try{_0x318d38&&await Helper['delay'](0x1f4,this['acc'],'Starting\x20Trading...',this);const _0x535fa4=await this[_0x2340e8(0x194)](_0x2340e8(0x189),_0x2340e8(0x19c),this[_0x2340e8(0x1a8)]),_0x8b9377=await this[_0x2340e8(0x194)](_0x2340e8(0x1a7),_0x2340e8(0x139),this[_0x2340e8(0x1a8)],{'clickedCount':_0x339cdb,'isSell':!(_0x535fa4[_0x2340e8(0x19f)]=='BUY')});if(_0x8b9377[_0x2340e8(0x15d)]==0xc8)this[_0x2340e8(0x179)]=_0x8b9377,_0x339cdb!=0x0&&(this[_0x2340e8(0x138)]+=0x1388),await this[_0x2340e8(0x16a)](),_0x318d38&&await Helper['delay'](this[_0x2340e8(0x179)][_0x2340e8(0x153)]*0x3e8,this['acc'],_0x2340e8(0x185),this);else throw Error(_0x2340e8(0x1ad)+_0x8b9377[_0x2340e8(0x162)]);}catch(_0x595c0f){throw _0x595c0f;}}}