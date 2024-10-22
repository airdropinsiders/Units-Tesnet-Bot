  import { createLogger, format, transports } from 'winston';
  import a6_0x49509f from 'fs';
  const {
    combine,
    timestamp,
    printf,
    colorize
  } = format;
  const customFormat = printf(({
    level: _0x171d86,
    message: _0x337e1b,
    timestamp: _0x2cd124
  }) => {
    return _0x2cd124 + " [" + _0x171d86 + "]: " + _0x337e1b;
  });
  class Logger {
    constructor() {
      this.logger = createLogger({
        'level': 'debug',
        'format': combine(timestamp({
          'format': "YYYY-MM-DD HH:mm:ss"
        }), colorize(), customFormat),
        'transports': [new transports.File({
          'filename': "log/app.log"
        })],
        'exceptionHandlers': [new transports.File({
          'filename': "log/app.log"
        })],
        'rejectionHandlers': [new transports.File({
          'filename': "log/app.log"
        })]
      });
    }
    ['info'](_0x363e3b) {
      this.logger.info(_0x363e3b);
    }
    ['warn'](_0xc21176) {
      this.logger.warn(_0xc21176);
    }
    ["error"](_0x3cc828) {
      this.logger.error(_0x3cc828);
    }
    ["debug"](_0x2f8f59) {
      this.logger.debug(_0x2f8f59);
    }
    ["setLevel"](_0x36f292) {
      this.logger.level = _0x36f292;
    }
    ['clear']() {
      a6_0x49509f.truncate("log/app.log", 0x0, _0x513bd8 => {
        if (_0x513bd8) {
          this.logger.error("Failed to clear the log file: " + _0x513bd8.message);
        } else {
          this.logger.info("Log file cleared");
        }
      });
    }
  }
  export default new Logger();