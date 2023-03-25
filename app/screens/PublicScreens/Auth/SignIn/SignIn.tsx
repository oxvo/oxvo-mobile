import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button, Checkbox, Text, TextField, View } from 'react-native-ui-lib';
import * as z from 'zod';

// Define validation schema with Zod
const schema = z.object({
  email: z.string().email('Invalid email format').min(6, 'Email too short'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormData = z.infer<typeof schema>;

const SignInScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSignIn = (data: FormData) => {
    // handle sign in logic
    console.log(data);
  };

  const handleForgotPassword = () => {
    // handle forgot password logic
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View flex paddingH-30 paddingV-50 bg-white>
      <View center marginB-30>
        {/* Logo component here */}
        <Text marginB-30 text40BO green20>
          Oxvo
        </Text>
      </View>
      <Text marginB-30 text40BO green20>
        Sign In
      </Text>
      <View marginB-20>
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
        <View row spread>
          <View row centerV marginT-10>
            <Checkbox value={rememberMe} onValueChange={handleRememberMe} />
            <Text marginL-5 text70 gray10>
              Remember me
            </Text>
          </View>
          <Button
            link
            backgroundColor="transparent"
            marginR-5
            label="Forgot password?"
            labelStyle={{ color: 'green' }}
            onPress={handleForgotPassword}
          />
        </View>
      </View>
      <Button
        label="Sign In"
        backgroundColor="green"
        borderRadius={10}
        paddingV-15
        onPress={handleSubmit(handleSignIn)}
        marginB-20
      />
      <View flex bottom centerH marginB-20>
        <Text grey10>
          Do not have an account yet?{' '}
          <Text darkGreen20 text70BO>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;