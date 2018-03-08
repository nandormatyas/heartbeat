const mySql = require('mysql');
const dbConfig = require('./config');

function endpoint(req, res, next) {  
  if (req.url === '/heartbeat' || req.url === '/heartbeat/') {
    const conn = mySql.createConnection(dbConfig.dbConn);
    conn.connect((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ status: 'OK' });
      }
    });
    conn.end();
  } else {
    next();
  }
}

module.exports = {
  endpoint,
};
