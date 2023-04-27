import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextField, View } from 'react-native-ui-lib';

import { PASSWORD_SETTINGS } from '@oxvo-mobile/domains/Auth/constants/auth';
import useSignUp from '@oxvo-mobile/domains/Auth/queries/useSignUp';
import { InviteCodeResponse } from '@oxvo-mobile/domains/Auth/services/inviteCode';
import useAuthStore from '@oxvo-mobile/domains/Auth/store/useAuthStore';

import { PublicStackNavigationProp } from '@oxvo-mobile/navigation/types';

import { useNavigation } from '@react-navigation/native';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z
  .object({
    firstName: z.string().min(2, 'First Name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last Name must be at least 2 characters'),
    email: z.string().email('Invalid email format').min(6, 'Email too short'),
    password: z
      .string()
      .min(PASSWORD_SETTINGS.MIN_LENGTH, 'Password must be at least 8 characters'),
    passwordConfirmation: z
      .string()
      .min(PASSWORD_SETTINGS.MIN_LENGTH, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  });

type FormData = z.infer<typeof schema>;

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const companySettings = useAuthStore((state) => state.companySettings);
  const { goBack } = useNavigation<PublicStackNavigationProp>();
  const { mutateAsync, isLoading } = useSignUp();
  const handleSignUp = async (data: FormData) => {
    // handle sign up logic
    const newData = { ...data, code: (companySettings as InviteCodeResponse).code };

    await mutateAsync(newData);
  };

  return (
    <View flex paddingH-30 paddingV-50 bg-white>
      <View center marginB-30>
        {/* Logo component here */}
        <Text marginB-10 text40BO green20 color={companySettings?.mainColor}>
          Company Logo {(companySettings as InviteCodeResponse).name}
        </Text>
      </View>
      <Text marginB-30 text40BO green20>
        Sign Up
      </Text>
      <Button
        label="Back"
        backgroundColor="gray"
        color="black"
        borderRadius={10}
        paddingV-10
        onPress={goBack}
        left
      />
      <View marginB-20>
        <Controller
          control={control}
          name="firstName"
          defaultValue="Mert"
          render={({ field }) => (
            <TextField
              floatingPlaceholder
              placeholder="First Name"
              value={field.value}
              onChangeText={field.onChange}
              validateOnChange
              enableErrors
              validationMessage={errors.firstName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          defaultValue="Koseoglu"
          render={({ field }) => (
            <TextField
              floatingPlaceholder
              placeholder="Last Name"
              value={field.value}
              onChangeText={field.onChange}
              validateOnChange
              enableErrors
              validationMessage={errors.lastName?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          defaultValue="mert-signup-test-01@oxvo.app"
          render={({ field }) => (
            <TextField
              textContentType="emailAddress"
              autoCapitalize="none"
              floatingPlaceholder
              placeholder="E-mail"
              value={field.value}
              onChangeText={field.onChange}
              validateOnChange
              enableErrors
              validationMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue="123456"
          render={({ field }) => (
            <TextField
              textContentType="password"
              autoCapitalize="none"
              floatingPlaceholder
              placeholder="Password"
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry
              validationMessage={errors.password?.message}
              enableErrors
              containerStyle={{ marginBottom: 15 }}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirmation"
          defaultValue="123456"
          render={({ field }) => (
            <TextField
              textContentType="password"
              autoCapitalize="none"
              floatingPlaceholder
              placeholder="Confirm Password"
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry
              validationMessage={errors.passwordConfirmation?.message}
              enableErrors
              containerStyle={{ marginBottom: 15 }}
            />
          )}
        />
      </View>
      <Button
        label="Sign Up"
        disabled={isLoading}
        backgroundColor="green"
        borderRadius={10}
        paddingV-15
        onPress={handleSubmit(handleSignUp)}
        marginB-20
      />
      <View flex bottom centerH marginB-20>
        <Text grey10>
          Already have an account?
          <Text darkGreen20 text70BO>
            {' '}
            Sign In!
          </Text>
        </Text>
      </View>
      <View flex bottom centerH marginB-20>
        <Text grey10>Contact Us</Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
