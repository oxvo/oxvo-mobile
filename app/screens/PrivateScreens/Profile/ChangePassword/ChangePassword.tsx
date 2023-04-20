import React from 'react';

import { PASSWORD_SETTINGS } from '@oxvo-mobile/domains/Auth/constants/auth';
import useChangePassword from '@oxvo-mobile/domains/Me/queries/useChangePassword';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-native-toast-message';
import { Button, Text, TextField, View } from 'react-native-ui-lib';
import * as z from 'zod';

const formSchema = z.object({
  password: z
    .string()
    .min(
      PASSWORD_SETTINGS.MIN_LENGTH,
      `Password must be at least ${PASSWORD_SETTINGS.MIN_LENGTH} characters`
    )
    .max(
      PASSWORD_SETTINGS.MAX_LENGTH,
      `Password must be at max ${PASSWORD_SETTINGS.MAX_LENGTH} characters`
    ),
  passwordConfirmation: z
    .string()
    .min(
      PASSWORD_SETTINGS.MIN_LENGTH,
      `Password must be at least ${PASSWORD_SETTINGS.MIN_LENGTH} characters`
    )
    .max(
      PASSWORD_SETTINGS.MAX_LENGTH,
      `Password must be at max ${PASSWORD_SETTINGS.MAX_LENGTH} characters`
    ),
});

type FormData = z.infer<typeof formSchema>;

const ChangePasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });
  const { mutateAsync } = useChangePassword();
  const handleChangePassword = async (data: FormData) => {
    // Handle change password logic here
    await mutateAsync(data);
    toast.show({
      type: 'success',
      text1: 'Parolanızı başarılı bir şekilde değiştirdiniz.',
      text2: 'Lütfen tekrar giriş yapınız. Sizi yönlendiriyoruz...',
    });
    console.log(data);
  };

  return (
    <View flex paddingH-30 paddingV-50 bg-white>
      <Text marginB-30 text40BO green20>
        Change Password
      </Text>
      <View>
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field }) => (
            <TextField
              textContentType="password"
              autoCapitalize="none"
              floatingPlaceholder
              placeholder="New Password"
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry
              validateOnChange
              enableErrors
              validationMessage={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirmation"
          defaultValue=""
          render={({ field }) => (
            <TextField
              textContentType="password"
              autoCapitalize="none"
              floatingPlaceholder
              placeholder="Confirm Password"
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry
              validateOnChange
              enableErrors
              validationMessage={errors.passwordConfirmation?.message}
              containerStyle={{ marginBottom: 15 }}
            />
          )}
        />
      </View>
      <Button
        label="Change Password"
        backgroundColor="green"
        borderRadius={10}
        paddingV-15
        onPress={handleSubmit(handleChangePassword)}
        marginB-20
      />
    </View>
  );
};

export default ChangePasswordScreen;
