module.exports = { 
    'Google Search test': function(browser){
        browser
            .windowMaximize()
            .url('http://www.google.com');
        
        browser
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementPresent('input[name=btnK]', 1000)
            .click('input[name=btnK]')
            .pause(1000);
        
        browser
            .assert.containsText('#main', 'Night Watch')
            .end();
    },
  
    'step two' : function (browser) {
      browser
      // ...
        .end();
    }
  };
