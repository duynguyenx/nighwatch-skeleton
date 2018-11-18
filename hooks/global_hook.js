module.exports = {
   before : function(cb) {
     console.log('GLOBAL BEFORE')
     cb();
   },
   beforeEach : function(browser, cb) {
     //console.log('GLOBAL beforeEach')
     cb();
   },
   after : function(cb) {
     //console.log('GLOBAL AFTER')
     cb();
   },
   afterEach : function(browser, cb) {
     console.log('GLOBAL afterEach')
     cb();
  },
};