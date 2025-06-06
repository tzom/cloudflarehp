export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    // Serve the index.html file
    return env.ASSETS.fetch(request);
  },
};
