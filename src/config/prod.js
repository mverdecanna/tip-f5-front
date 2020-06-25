// module.exports = {
//   appName:process.env.APP_NAME,
//   headerToken:process.env.HEADER_TOKEN,
//   tokenKey:process.env.TOKEN_KEY,
//   loggerEnv: process.env.LOGGER_ENV,
//   port: process.env.PORT,
//   mongodb: process.env.MONGODB,
//   email_service_active: process.env.EMAIL_SERVICE_ACTIVE,
//   email_service_endpoint: process.env.EMAIL_SERVICE_ENDPOINT,
//   email_service_token: process.env.EMAIL_SERVICE_TOKEN,
//   sms_service_active: process.env.SMS_SERVICE_ACTIVE,
//   sms_service_endpoint: process.env.SMS_SERVICE_ENDPOINT,
//   sms_service_token: process.env.SMS_SERVICE_TOKEN
// }

module.exports = {
    appName: 'F5',
    headerToken: 'TOKEN',
    tokenKey: 'f5',
    loggerEnv: 'prod',
    port: '3001',
    host_backend: 'http://localhost:3001/api',
    //host_backend: 'https://2941909d.ngrok.io/api',
    endpoint_getAllPlayers: '/getAllPlayers',
    endpoint_login: '/login',
    endpoint_logout: '/logout',
    endpoint_currentUser: '/currentUser',
    endpoint_getGame: '/getGame',
    endpoint_updateGamePlayers: '/updateGamePlayers',
    endpoint_confirmGame: '/confirmGame',
    endpoint_suspendGame: '/suspendGame',
    endpoint_updateDataOfTheGame: '/updateDataOfTheGame',
    endpoint_authorizedGroup: '/authorizedGroup',
    endpoint_validateName: '/validateName',
    endpoint_create: '/create',
    endpoint_register: '/register',

};
