import createSession, {
  CreateSessionPayload,
  CreateSessionResponse,
} from '@oxvo-mobile/domains/Sessions/services/createSession';

import { useMutation } from '@tanstack/react-query';

const useCreateSession = () => {
  return useMutation({
    mutationFn: async (payload: CreateSessionPayload) => {
      const createSessionData: CreateSessionResponse = await createSession(payload);

      return createSessionData;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useCreateSession;
