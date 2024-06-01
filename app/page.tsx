import Comment from '@/components/verification/comment';
import { SignOutButton } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  const { userId: clerkUserId } = auth();
  const clerkUser = await currentUser();

  return (
    <main>
      <Comment />
      <SignOutButton />
    </main>
  );
}
