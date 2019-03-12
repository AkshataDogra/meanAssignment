export class User {

  constructor(
      public UserId: string,
      public UserName: string,
      public EmailAddress: string,
      public Password: string,
      public RoleId: string,
      public RoleName: string
  ) {}
}

export const UserRoles = ['AccessUser', 'Operator', 'Administrator'];
