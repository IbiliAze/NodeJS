const request = require('supertest');
const app = require('../src/app');
const Org = require('../src/models/org');


beforeEach(async () => {
    await Org.deleteMany();
});

test('Should signup a new Organization', async () => {
    await request(app).post('/api/org').send({
        orgName: "Afenia",
        email: 'thisIsForJestTesting@mail.com',
        password: "cisco12345"
    }).expect(201)
});