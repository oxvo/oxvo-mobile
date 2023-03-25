import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button, Text, TextField, View } from 'react-native-ui-lib';
import * as z from 'zod';

const schema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email format').min(6, 'Email too short'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSignUp = (data: FormData) => {
    // handle sign up logic
    console.log(data);
  };

  return (
    <View flex paddingH-30 paddingV-50 bg-white>
      <View center marginB-30>
        {/* Logo component here */}
        <Text marginB-10 text40BO green20>
          Company Logo
        </Text>
      </View>
      <Text marginB-30 text40BO green20>
        Sign Up
      </Text>
      <View marginB-20>
        <Controller
          control={control}
          name="name"
          defaultValue=""
          render={({ field }) => (
            <TextField
              floatingPlaceholder
              placeholder="Name"
              value={field.value}
              onChangeText={field.onChange}
              validateOnChange={true}
              enableErrors
              validationMessage={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <TextField
              textContentType="emailAddress"
              autoCapitalize="none"
              floatingPlaceholder
              placeholder="E-mail"
              value={field.value}
              onChangeText={field.onChange}
              validateOnChange={true}
              enableErrors
              validationMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
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
          name="confirmPassword"
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
              validationMessage={errors.confirmPassword?.message}
              enableErrors
              containerStyle={{ marginBottom: 15 }}
            />
          )}
        />
      </View>
      <Button
        label="Sign Up"
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
