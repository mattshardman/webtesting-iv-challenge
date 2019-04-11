const supertest = require('supertest');
const routes = require('./routes');

describe('server', () => {
    describe('/GET endpoint', () => {
        it('env is correct', () => {
            expect(process.env.DB_ENV).toBe('testing');
        });

        it('returns status code 200', () => {
            
        });
    });
});
