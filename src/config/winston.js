var appRoot = require('app-root-path');
var winston = require('winston');
const keys = require('./keys');
const util = require('util');

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

var options = {
    file: {
      level: keys.loggerEnv === 'prod' ? 'info' : 'debug',
      filename: `${appRoot}/logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 50242880, // 5MB
      maxFiles: 4,
      colorize: false,
    },
    console: {
      level: keys.loggerEnv === 'prod' ? 'info' : 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

  const myFormat = printf(info => {
    if (typeof info.message === 'object') {
        // evitar errores circulares y loguear objetos apropiadamente
        info.message = util.inspect(info.message);
    }
    return `${info.timestamp} [${info.label}] - ${info.level}: ${info.message}`;
  });

  var logger =  winston.createLogger({
    level: 'info',
    format: combine(
        label({ label: 'Analizer' }),
        timestamp(),
        myFormat
      ),
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

  logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
  };

  module.exports = logger;
