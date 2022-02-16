const caman = require('caman').Caman;

caman('./assets/input/lofi.jpg', function(){
    this.brightness(5);
    this.render(function(){
        this.save('./assets/output/a.jpg');
    })
})
