import { base64url } from "rfc4648";

export const encode = (content: string): string =>
  base64url.stringify(Buffer.from(content));

export const decode = (content: string): Buffer =>
  Buffer.from(base64url.parse(content));
