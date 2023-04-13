import authStore from '@oxvo-mobile/store/authStore';

const useAuth = () => {
  const isAuthenticated = authStore((state) => !!state.token);
  // authStore.persist.clearStorage();
  // const authStorex = authStore((state: any) => state);
  // authStore.subscribe((state) => {
  //   console.log('state ------------------------------------------->', state);
  // });
  // const isLoading = false;
  // const isAuthenticated = authStore((state) => state.isAuthenticated);
  // console.log('useAuth ----------->', authStorex);
  return { isAuthenticated };
};

export default useAuth;
