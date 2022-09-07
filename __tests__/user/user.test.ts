import request from 'supertest';
import app from '../../src/server/app';

describe('#unit UserController', () => {
  test('should return one user', async () => {
    const userId: number = 5;
    const result = await request(app).get(`/user/${userId}`).send();
    expect(result.status).toBe(200);
    expect(result.body.data.name).toBe("Hugo Sant'Anax");
  });
});
