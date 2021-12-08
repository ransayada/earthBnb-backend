const logger = require('../services/logger.service')

async function log(req, res, next) {
  logger.info('Req!!!')
  // console.log(req.session);
  if (req.session && req.session.user) {
    console.log('i am here');
    logger.info('Req from: ' + req.session.user.fullname)
  }
  next()
}

module.exports = {
  log
}
