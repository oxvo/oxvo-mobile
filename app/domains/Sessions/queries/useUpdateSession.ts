import updateSession, {
  UpdateSessionPayload,
  UpdateSessionResponse,
  UpdateSessionSessionId,
} from '@oxvo-mobile/domains/Sessions/services/updateSession';

import { useMutation } from '@tanstack/react-query';

const useUpdateSession = () => {
  return useMutation({
    mutationFn: async ({
      sessionId,
      payload,
    }: {
      sessionId: UpdateSessionSessionId;
      payload: UpdateSessionPayload;
    }) => {
      const updateSessionData: UpdateSessionResponse = await updateSession(sessionId, payload);

      return updateSessionData;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useUpdateSession;
