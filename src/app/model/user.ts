import { Role } from "./role";

export class User
{
     id!: number;
     firstName!: string;
     lastName!: string;
     username!: string;
     role!: Role;
     token?: string;
     
}

export interface IUser
{
     id?: number;
     firstName?: string;
     lastName?: string;
     username?: string;
     role?: Role;
     token?: string; 
}

export class User implements IUser
{
     constructor(
          public id?: number,
          public firstName?: string,
          public lastName?: string,
          public username?: string,
          public role?: Role,
          public token?: string, 
     ) {}
}
const user1
const user = user1 || new User()
user!.firstName
