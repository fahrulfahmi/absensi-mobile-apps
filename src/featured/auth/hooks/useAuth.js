import { useDispatch, useSelector } from 'react-redux';
import { login, register, logout } from '../userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const loginUser = (email, password) => dispatch(login({ email, password }));
  const registerUser = (name, email, password) =>
    dispatch(register({ name, email, password }));
  const logoutUser = () => dispatch(logout());

  return { auth, loginUser, registerUser, logoutUser };
};
