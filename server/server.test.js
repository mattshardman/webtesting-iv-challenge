const request = require('supertest');
const routes = require('./server');

describe('server', () => {
    describe('/GET endpoint', () => {
        it('env is correct', () => {
            expect(process.env.DB_ENV).toBe('testing');
        });

        it('returns correct body', () => {
            const requestBody = { api: "working" };
            return request(routes)
                .get('/')
                .expect(requestBody)
        });
    });
});
