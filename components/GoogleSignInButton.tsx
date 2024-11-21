import { FC, ReactNode } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface GoogleSignInButtonProps {
  children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn('google', { callbackUrl: 'http://localhost:3000/admin' });

  return (
    <Button
      onClick={loginWithGoogle}
      className='w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100'
      sx={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        borderRadius: '8px',
        padding: '10px 20px',
        transition: 'background-color 0.3s',
      }}
    >
      <Image
        src="/google-logo.png" // Make sure this path is correct and the image is in the public folder
        alt="Google Logo"
        width={20}
        height={20}
        style={{ objectFit: 'contain' }}
      />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
