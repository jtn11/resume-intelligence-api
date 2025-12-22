export const apikeys = new Map<
  string,
  { request: number; windowStart: number; totalUsed: number; maxLimit: number }
>();

console.log(apikeys);
