import app from '../../src/app';
import User from '../../src/app/models/User';

describe('test relatives to auth', () => {
  it('should create a user', async () => {
    const user = await User.create({
      name: 'diogo',
      email: 'diogo.silva@growdev.com.br',
      password: '123',
    });

    expect(user.email).toBe('diogo.silva@growdev.com.br');
  });
});
