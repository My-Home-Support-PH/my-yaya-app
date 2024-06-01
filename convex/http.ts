import { httpRouter } from 'convex/server';
import { httpCreateUserWebhook } from './users';

const http = httpRouter();

http.route({
  path: '/webhook/create-user',
  method: 'POST',
  handler: httpCreateUserWebhook,
});

export default http;
