
const logger  = (req, res, next) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeStamp = new Date().toLocaleTimeString('en-US', options);
  
    console.log(`Request Method: ${req.method}`)
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Timestamp: ${timeStamp}`);
    next();
}

module.exports = {
    logger,
}