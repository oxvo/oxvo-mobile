import React, { useCallback } from 'react';

import { INVITE_CODE_SETTINGS } from '@oxvo-mobile/domains/Auth/constants/auth';
import useInviteCode from '@oxvo-mobile/domains/Auth/queries/useInviteCode';
import authStore from '@oxvo-mobile/store/authStore';

import { useFocusEffect } from '@react-navigation/native';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextField, View } from 'react-native-ui-lib';
import * as z from 'zod';

const inviteCodeSchema = z.object({
  inviteCode: z
    .string()
    .min(INVITE_CODE_SETTINGS.MIN_LENGTH, 'Invite code must be at least 6 characters')
    .max(INVITE_CODE_SETTINGS.MAX_LENGTH, 'Invite code must be at max 32 characters'),
});

type FormData = z.infer<typeof inviteCodeSchema>;

const InviteCodeScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(inviteCodeSchema) });

  const resetCompanySettings = authStore((state) => state.resetCompanySettings);
  const companySettings = authStore((state) => state.companySettings);

  const { mutateAsync, isLoading } = useInviteCode();

  useFocusEffect(
    useCallback(() => {
      resetCompanySettings();
    }, [resetCompanySettings])
  );

  const handleInviteCodeSubmit = async (data: FormData) => {
    // handle invite code logic
    await mutateAsync(data.inviteCode);
  };

  return (
    <View flex paddingH-30 paddingV-50 bg-white>
      <View center marginB-30>
        {/* Logo component here */}
        <Text marginB-10 text40BO green20 color={companySettings?.mainColor}>
          Company Logo
        </Text>
      </View>
      <Text marginB-30 text40BO green20>
        Invite Code
      </Text>
      <View marginB-20>
        <Controller
          control={control}
          name="inviteCode"
          defaultValue=""
          render={({ field }) => (
            <TextField
              floatingPlaceholder
              placeholder="Invite Code"
              value={field.value}
              onChangeText={field.onChange}
              validateOnChange
              enableErrors
              validationMessage={errors?.inviteCode?.message}
            />
          )}
        />
      </View>
      <Button
        label="Submit"
        disabled={isLoading}
        backgroundColor="green"
        borderRadius={10}
        paddingV-15
        onPress={handleSubmit(handleInviteCodeSubmit)}
        marginB-20
      />
      <View flex bottom centerH marginB-20>
        <Text grey10>Contact Us</Text>
      </View>
    </View>
  );
};

export default InviteCodeScreen;
