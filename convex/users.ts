import { v } from 'convex/values';
import { internalMutation } from './_generated/server';

export const createUser = internalMutation({
  args: {
    username: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('users', {
      username: args.username,
    });
  },
});
