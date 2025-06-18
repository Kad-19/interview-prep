'use client'
import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';


const LogoutButton = () => {
    const onSignOut = async () => {
        await signOut();
    
        redirect("/sign-in");
      }
  return (
    <Button className=" cursor-pointer" onClick={onSignOut}>Sign Out</Button>
  )
}

export default LogoutButton