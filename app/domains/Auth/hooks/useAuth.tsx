import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

const useAuth = () => {
  const isAuthenticated = useAuthStore((state) => !!state.token);

  return { isAuthenticated };
};

export default useAuth;
