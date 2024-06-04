import { mutation, query } from './_generated/server';

export const getComments = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new Error('Not logged in');
    }

    const loggedInUser = await ctx.db
      .query('users')
      .withIndex('byClerkId')
      .filter((q) => q.eq(q.field('clerkId'), identity.subject))
      .first();

    const comments = await ctx.db
      .query('verification_comments')
      .withIndex('byForUserId')
      .filter((q) => q.eq(q.field('forUserId'), loggedInUser?._id))
      .order('asc')
      .collect();

    return comments;
  },
});

export const createComment = mutation({
  args: {},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new Error('Not logged in');
    }
  },
});
