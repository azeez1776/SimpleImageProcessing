const caman = require('caman').Caman;


export const gamma = (fileUrl,reservedUrl ) => {
    caman(fileUrl, function(){
        this.gamma(4);
        this.render(function(){
            this.save(reservedUrl);
        })
    })
}

