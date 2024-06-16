'use client';

import * as React from 'react';
//import { useRouter } from 'next/navigation';
import Alert from '@mui/material/Alert';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { logger } from '../../lib/default-logger';
import { useNavigate, useNavigation } from "react-router-dom";

export interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps): React.JSX.Element | null {
 // const router = useRouter();
  const navigate = useNavigate();
  const  logedUserInfo  = useAppSelector((state) => state.auth.userInfo);
  const [isChecking, setIsChecking] = React.useState<boolean>(true);
  const [ userid ,setUserid] = React.useState(localStorage.getItem('userid'));
  const checkPermissions = async (): Promise<void> => {
   
    if (!logedUserInfo) {
      logger.debug('[AuthGuard]: User is not logged in, redirecting to sign in');
      logger.debug(userid);
      //router.replace(paths.auth.signIn);
      navigate('/');
     // return;
    }

    setIsChecking(false);
  };

  React.useEffect(() => {
    alert("userInfoChanged")
    checkPermissions().catch(() => {
      
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, [logedUserInfo]);

  if (isChecking) {
    return null;
  }

  

  return <React.Fragment>{children}</React.Fragment>;
}