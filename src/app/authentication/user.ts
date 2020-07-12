export class User{
  username: string;
  password: string;
  roleId: number;
  confirmPassword: string;
  email: string;
  dateOfBirth: string;
  contact: string;
  message: string;
  token: string;
  roleName: string;

  constructor(username, password, roleId, email, dateOfBirth, contact) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
    this.dateOfBirth = dateOfBirth;
    this.contact = contact;
  }
}
