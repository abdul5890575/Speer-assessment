let chai = require("chai")
let server = require("../bin/www")
// let server = require("../app")
let chaiHttp = require("chai-http")
let should = chai.should();
chai.use(chaiHttp);




describe('Post on register', function() {

    it('should create a new user', (done) => {
      const payload = {
            "first_name":"abdul",
            "last_name":"shaukat",
            "email": "abd@gmail.com",
            "password":"test"  
      } 
      chai.request(server)
        .post("/register")
        .send(payload)
        .end((err,res) =>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('email');
            res.body.should.have.property('password');
        })
        .done()
    });

    it('should give an error saying email already exists', (done) => {
      const payload = {
            "first_name":"abdul",
            "last_name":"shaukat",
            "email": "abd@gmail.com",
            "password":"test"  
      } 
      chai.request(server)
        .post("/register")
        .send(payload)
        .end((err,res) =>{
            res.body.should.be.a('object');
        })
        .done()
    });
  

  });

      //   request(server).post("/register")
    //   .send(payload)
    //   .then((res)=>{
    //       const body = res.body;
    //       expect(body).to.contain.property('email')
    //       done()
    //   })