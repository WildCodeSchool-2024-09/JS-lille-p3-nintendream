// to make the file a module and avoid the TypeScript error
export type {};

declare global {
  export type MyPayload = JwtPayload & {
    sub: string;
    username: string;
    first_name: string;
    name: string;
    mail: string;
    age: number;
  };
  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      auth: MyPayload;
      /* ************************************************************************* */
    }
  }
}
