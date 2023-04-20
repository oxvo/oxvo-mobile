import addService, {
  AddServicePayload,
  AddServiceResponse,
} from '@oxvo-mobile/domains/Services/services/addService';

import { useMutation } from '@tanstack/react-query';

const useAddService = () => {
  return useMutation({
    mutationFn: async (payload: AddServicePayload) => {
      const data: AddServiceResponse = await addService(payload);

      return data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useAddService;
