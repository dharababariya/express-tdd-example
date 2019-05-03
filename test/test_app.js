const request =  require('supertest');
const app  = require('../app');

describe('test',function(){

    it("get user",function(done){

        request(app).get("/getuser")
        .expect(200)
        .expect('success' , done)
        
    })
})

describe('add user',function(){

    it("succesullfy add user",function(done){

        request(app).post("/adduser")
        .send({name:"dhara"})
        .expect(200)
        .expect('success',done)
        
    })
})