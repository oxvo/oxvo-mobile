import authStore from '@oxvo-mobile/store/authStore';

const useAuth = () => {
  const isAuthenticated = authStore((state) => !!state.token);

  return { isAuthenticated };
};

export default useAuth;
