'use client';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

export default function Comment() {
  const comments = useQuery(api.verification.getComments);

  if (!comments) return <div>Comments is loading...</div>;

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment._id}>{comment.text}</div>
      ))}
    </div>
  );
}
