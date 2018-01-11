const expect = require('chai').expect;
const axios = require('axios');


require('dotenv').config();

const baseUrl = `http://localhost:${process.env.PORT}` || `http://localhost:3000`;
//const baseUrl = 'http://127.0.0.1:3000';

describe('GET /', () => {
  it('responds with a status code of 200', (done) => {
    axios.get(`${baseUrl}/`)
      .then((response) => {
        expect(response.status).to.equal(200);
        done();
      })
      .catch((err) => {
        console.log('There was an error requesting / from the server', err);
      })
  })
});

