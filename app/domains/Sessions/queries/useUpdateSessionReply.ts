import updateSessionReply, {
  UpdateSessionReplyPayload,
  UpdateSessionReplyResponse,
} from '@oxvo-mobile/domains/Sessions/services/updateSessionReply';

import { useMutation } from '@tanstack/react-query';

const useUpdateSessionReply = () => {
  return useMutation({
    mutationFn: async (payload: UpdateSessionReplyPayload) => {
      const updateSessionReplyData: UpdateSessionReplyResponse = await updateSessionReply(payload);

      return updateSessionReplyData;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useUpdateSessionReply;
