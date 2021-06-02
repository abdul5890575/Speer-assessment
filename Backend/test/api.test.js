const request = require('supertest');
const app= require("../app")



describe('Post on register', () => {
    it('should create a new user', (done) => {
      const payload = {
            "first_name":"abdul",
            "last_name":"shaukat",
            "email": "abdulrehman555@gmail.com",
            "password":"test"  
      } 
      const res=request(app).post('/register')
      .send(payload)
      .expect(200)
      .then(response=>{
        expect (response.body).toHaveProperty("email")
        expect (response.body).toHaveProperty("password")
        done();
       })
    })  

    it('should create tell you that the email already exists', (done) => {
        const payload = {
                "first_name":"abdul",
                "last_name":"shaukat",
                "email": "mario@nintendo.com",
                "password":"test"  
        } 
        const res=request(app).post('/register')
        .send(payload)
        .expect(400)
        .then(response=>{
            expect (response.body).toEqual({
                "msg": "Sorry, a user account with this email already exists"
            });
            done();
            })
        });

    it('should tell you if a field is empty', (done) => {
        const payload = {
                "first_name":"abdul",
                "last_name":"shaukat",
                "email": "",
                "password":"test"  
        } 
        const res=request(app).post('/register')
        .send(payload)
        .expect(400)
        .then(response=>{
            expect (response.body).toEqual({
                "msg": "Username, Email or Password empty"
            });
            done();
            })
        });

  });



describe('Post on login', () => {
    it('should login a user', (done) => {
        const payload = {
            "email": "mario@nintendo.com",
            "password":"test"  
        } 
        const res=request(app).post('/login')
        .send(payload)
        .expect(200)
        .then(response=>{
        expect (response.body).toEqual({
            "msg": "Logged in"
        });
        done();
        })
    })  

    it('should let you know that the email is invalid', (done) => {
        const payload = {
                "email": "not@gmail.com",
                "password":"test"  
        } 
        const res=request(app).post('/login')
        .send(payload)
        .expect(400)
        .then(response=>{
            expect (response.body).toEqual({
                "msg": "Invalid email"
            });
            done();
            })
        })  

        it('should let you know that the password is invalid', (done) => {
        const payload = {
                "email": "mario@nintendo.com",
                "password":"test111"  
        } 
        const res=request(app).post('/login')
        .send(payload)
        .expect(400)
        .then(response=>{
            expect (response.body).toEqual({
                "msg": "Invalid password"
            });
            done();
            })
        })  

  });

