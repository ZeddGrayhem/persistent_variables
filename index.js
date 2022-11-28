const fs = require('fs');

module.exports = (settings = {location: './storage'}) => {
    if(!fs.existsSync(location)) fs.mkdir(location)

    class Storage {
        constructor(name, data) {
            this.name = name
            const write = this.write
            
            try { this.read(); } 
            catch {
                this.data = data ? data : {}
                this.write(name, this.data)   
           }

           return new Proxy(this.data, { 
                set: (target, property, value) => {
                    var modified = this.data
                    this.data[property] = value
                    write(this.name, modified)
                }
            })
        }

        write(name, data){ 
            fs.writeFileSync(`${settings.location}/${name}.json`, JSON.stringify(data))
        }
        read(){ this.data = JSON.parse(fs.readFileSync(`${settings.location}/${this.name}.json`).toString())}
    }

    return { settings, Storage }
}
