import authStore from '@oxvo-mobile/store/authStore';

const useLogout = () => {
  const removeToken = authStore((state) => state.removeToken);

  return () => {
    removeToken();
  };
};

export default useLogout;
