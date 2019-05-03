const request =  require('supertest');
const app  = require('../app');

describe('test',function(){

    it("Welcom the user",function(done){

        request(app).get("/")
        .expect(200)
        .expect( done())
    })
})