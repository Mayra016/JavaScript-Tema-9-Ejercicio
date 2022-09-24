//import winston
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
  module.exports = logger;

//Función con error
function numeroPositivo(num) {
  num = -num;
  if (num >= 0) {
    console.log("El número es positivo");
  } else {
    return false
  } 
}

try {
  const numPositivo = numeroPositivo(num);
  console.log(numPositivo);
}  
catch(e) {
  console.log("Hubo un error. El número no es positivo");  
} 
