import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
  }).index('byClerkId', ['clerkId']),
  api_keys: defineTable({
    apiKey: v.string(),
  }).index('byApiKey', ['apiKey']),
});
