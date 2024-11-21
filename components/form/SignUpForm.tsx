'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import GoogleSignInButton from '../GoogleSignInButton';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const FormSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must have at least 6 characters'),
});

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  minHeight: '100%',
  padding: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000000', // Set background to black
  fontFamily: 'Poppins, sans-serif',
}));

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      router.push('/sign-in');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <>
      <CssBaseline />
      <SignUpContainer>
        <Card
          variant="outlined"
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 450,
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'center', // Center the content inside the card
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: '100%',
              fontSize: 'clamp(2rem, 10vw, 2.15rem)',
              mb: 3,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 'bold', // Make the Sign Up text bold
            }}
          >
            Sign Up
          </Typography>

          <Box
            component="form"
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <TextField
              label="Username"
              fullWidth
              variant="outlined"
              placeholder="johndoe"
              {...form.register('username')}
              error={!!form.formState.errors.username}
              helperText={form.formState.errors.username?.message}
              InputProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
              InputLabelProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              placeholder="mail@example.com"
              {...form.register('email')}
              error={!!form.formState.errors.email}
              helperText={form.formState.errors.email?.message}
              InputProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
              InputLabelProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              type="password"
              placeholder="Enter your password"
              {...form.register('password')}
              error={!!form.formState.errors.password}
              helperText={form.formState.errors.password?.message}
              InputProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
              InputLabelProps={{
                style: { fontFamily: 'Poppins, sans-serif' },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, fontFamily: 'Poppins, sans-serif' }}
            >
              Sign Up
            </Button>
          </Box>
          <Divider sx={{ my: 3 }}>or</Divider>
          <GoogleSignInButton
            fullWidth
            variant="outlined"
            sx={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Sign up with Google
          </GoogleSignInButton>
          <Typography
            sx={{
              textAlign: 'center',
              mt: 2,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Already have an account?{' '}
            <Link href="/sign-in" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </Typography>
        </Card>
      </SignUpContainer>
    </>
  );
};

export default SignUpForm;
