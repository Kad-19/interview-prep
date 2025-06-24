'use client'
import { signOut } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';


const LogoutButton = () => {
    const onSignOut = async () => {
        await signOut();
    
        redirect("/sign-in");
      }
  return (
    <button className="cursor-pointer" onClick={onSignOut}>Sign Out</button>
  )
}

export default LogoutButton