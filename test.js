
class Test {
    constructor(x){
        this.x = 2

        this.test = class Inner extends Test {
            super()
            
        }
    }
}