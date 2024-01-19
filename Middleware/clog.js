const clog = (req, res, next) => {
    const fgOrange = '\x1b[38;5;205m%s\x1b[0m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${fgOrange}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${fgOrange}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${fgOrange}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  exports.clog = clog;
  