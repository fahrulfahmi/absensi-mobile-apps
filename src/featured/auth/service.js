import api from '../../api/api';

export const loginUser = async (email, password) => {
  const response = await api.get('/users', {
    params: { email, password }
  });

  if (response.data.length === 0) {
    throw new Error('Invalid email or password');
  }

  return response.data[0];
};
