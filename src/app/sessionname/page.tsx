import { auth } from '@/auth';
 export default async function Page() {
    const session = await auth();
    return (
     <p>{session?.user?.name}</p>
   );
 }