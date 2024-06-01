import { v } from 'convex/values';
import { internalQuery } from './_generated/server';

export const getApiKey = internalQuery({
  args: {
    apiKey: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('api_keys')
      .withIndex('byApiKey')
      .filter((q) => q.eq(q.field('apiKey'), args.apiKey))
      .first();
  },
});
