// let chai = require("chai")
let server = require("../bin/www")
// let chaiHttp = require("chai-http")
// let should = chai.should;
// let expect = chai.expect;
// let post =chai.post;
// chai.use(chaiHttp);

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var should = chai.should();
var expect = chai.expect();

describe('Post on register', function() {
    it('should create a new user', (done) => {
      const payload = {
            "first_name":"abdul",
            "last_name":"shaukat",
            "email": "aa11@gmail.com",
            "password":"test"  
      } 
      chai.request(server)
        .post("/register")
        .send(payload)
        .end((err,res) =>{
            expect(res.body).to.be.json;
            expect(res).to.have.status(200);
            console.log('eeeeeeeeeeeeeee',res.body)
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('email');
            res.body.should.have.property('password');
        })
        .done()
    });
  

  });