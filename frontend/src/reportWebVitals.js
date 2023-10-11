function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    require.ensure(['web-vitals'], function (require) {
      const vitals = require('web-vitals');
      vitals.getCLS(onPerfEntry);
      vitals.getFID(onPerfEntry);
      vitals.getFCP(onPerfEntry);
      vitals.getLCP(onPerfEntry);
      vitals.getTTFB(onPerfEntry);
    });
  }
}

module.exports = reportWebVitals;
