import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  user_types: defineTable({
    name: v.string(),
  }),
  users: defineTable({
    clerkId: v.string(),
    isVerified: v.optional(v.boolean()),
    userTypeId: v.optional(v.id('user_types')),
  })
    .index('byClerkId', ['clerkId'])
    .index('byUserTypeId', ['userTypeId']),
  verification_comments: defineTable({
    text: v.string(),
    forUserId: v.id('users'),
    userId: v.id('users'),
  })
    .index('byForUserId', ['forUserId'])
    .index('byUserId', ['userId']),
  api_keys: defineTable({
    apiKey: v.string(),
  }).index('byApiKey', ['apiKey']),
});
