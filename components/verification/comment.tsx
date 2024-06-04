'use client';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export default function Comment() {
  const comments = useQuery(api.verification.getComments);

  if (!comments) return <div>Comments is loading...</div>;

  return (
    <div className='mx-auto w-full max-w-2xl'>
      <div className='space-y-4'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>User Verification Comments</h2>
          <p className='text-gray-500 dark:text-gray-400'>
            This is where you can communicate with our admin team regarding your
            account verification.
          </p>
        </div>
        <div className='space-y-4'>
          <form className='flex flex-col gap-4'>
            <Textarea
              placeholder='Write your comment...'
              rows={3}
              className='rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100'
            />
            <Button type='submit' className='self-end'>
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className='mt-8 space-y-4'>
        {comments.map((comment) => (
          <div key={comment._id} className='flex items-start'>
            <Avatar className='h-10 w-10 border'>
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className='ml-4 grid gap-1.5'>
              <div className='flex items-center gap-2'>
                <div className='font-semibold'>@{comment.userId}</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>
                  {comment._creationTime}
                </div>
              </div>
              <div className='text-gray-700 dark:text-gray-300'>
                {comment.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
