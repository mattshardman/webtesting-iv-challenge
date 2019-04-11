const request = require('supertest');
const routes = require('./server');
const Users = require('../data/helpers');
const db = require('../data/dbConfig');

describe('server', () => {
    afterEach(async () => {
       await db('users').truncate();
    });

    it('env is correct', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('/GET endpoint', () => {
        it('returns correct body', () => {
            const requestBody = { api: "working" };
            return request(routes)
                .get('/')
                .expect(requestBody)
        });
    });

    // describe('/GET /api/users endpoint', () => {
    //     it('returns correct status code and 2 users', () => {
    //         return request(routes)
    //             .get('/api/users')
    //             .expect('Content-Type', /json/)
    //             .expect(200)
    //             .then(r => {
    //                 expect(r.body.length).toBe(2);
    //                 expect(r.body[0].name).toBe('Matt');
    //             });
    //     });
    // });

    describe('/POST /api/users', () => {
        it('creates a new user', () => {
            return request(routes)
                .post('/api/users')
                .send({ name: 'john', email: 'john@x.com' })
                .expect(201)
                .then(async r => {
                    const users = await Users.get();
                    const userLength = users.length;
                    expect(userLength).toBe(1);
                });
        });
    });
});
