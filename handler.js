// handler.js

const handler = (req, res) => {
    const d = new Date();
    res.end(d.toString());
  };
  
  module.exports = handler;
  