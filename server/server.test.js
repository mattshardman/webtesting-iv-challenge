const request = require('supertest');
const routes = require('./server');

describe('server', () => {
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

    describe('/GET /api/users endpoint', () => {
        it('returns correct status code', () => {
            return request(routes)
                .get('/api/users')
                .expect('Content-Type', /json/)
                .expect(200)
                .then(r => {
                    expect(r.body.length).toBe(2);
                });
        });

        // it('returns list of users', () => {
        //     const requestBody = [{ api: "working" }];
        //     return request(routes)
        //         .get('/api/users')
        //         .expect('body')
        // });
    });
});
