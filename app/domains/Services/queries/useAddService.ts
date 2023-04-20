import addService, {
  AddServicePayload,
  AddServiceResponse,
} from '@oxvo-mobile/domains/Services/services/addService';

import { useMutation } from '@tanstack/react-query';

const useAddService = () => {
  return useMutation({
    mutationFn: async (serviceId: AddServicePayload) => {
      const addServiceData: AddServiceResponse = await addService(serviceId);

      return addServiceData;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export default useAddService;
