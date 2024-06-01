import { v } from 'convex/values';
import { internal } from './_generated/api';
import { httpAction, internalMutation } from './_generated/server';

export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('users', {
      clerkId: args.clerkId,
      isVerified: false,
    });
  },
});

export const httpCreateUserWebhook = httpAction(async (ctx, request) => {
  const headers = request.headers;
  const { data } = await request.json();
  const { id } = data;

  const apiKey = await ctx.runQuery(internal.apikeys.getApiKey, {
    apiKey: headers.get('X-API-Key') ?? '',
  });

  if (apiKey === null) {
    return new Response(null, {
      status: 401,
    });
  }

  if (!id) {
    return new Response(null, {
      status: 400,
    });
  }

  await ctx.runMutation(internal.users.createUser, { clerkId: id });

  return new Response(null, {
    status: 200,
  });
});
