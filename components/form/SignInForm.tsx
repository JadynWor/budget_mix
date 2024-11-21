'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import GoogleSignInButton from '../GoogleSignInButton';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must have at least 6 characters'),
});

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  minHeight: '100%',
  padding: theme.spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#000000', // Set background to black
  fontFamily: 'Poppins, sans-serif',
}));

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log('error----', signInData.error);
    } else {
      router.refresh();
      router.push('/admin');
    }
  };

  return (
    <>
      <CssBaseline />
      <SignInContainer>
        <Card
          variant="outlined"
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 450,
            fontFamily: 'Poppins, sans-serif',
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
              fontWeight: 'bold', // Make the Sign In text bold
            }}
          >
            Sign In
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
              label="Email"
              fullWidth
              variant="outlined"
              placeholder="your@email.com"
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
              placeholder="••••••"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, fontFamily: 'Poppins, sans-serif' }}
            >
              Sign In
            </Button>
          </Box>
          <Divider sx={{ my: 3 }}>or</Divider>
          <GoogleSignInButton
            fullWidth
            variant="outlined"
            sx={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Sign in with Google
          </GoogleSignInButton>
          <Typography
            sx={{
              textAlign: 'center',
              mt: 2,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </Typography>
        </Card>
      </SignInContainer>
    </>
  );
};

export default SignInForm;
