import { Expose, serialize, Type } from 'class-transformer';

export class User {
  @Expose({ name: 'userName' })
  userName!: string;

  @Expose({ name: 'role' })
  role!: string;

  @Expose({ name: 'employee' })
  employee!: string;

  @Expose({ name: 'company' })
  company!: string;

  @Expose({ name: 'location' })
  location!: string;

  constructor() {}

  setUserName(value: string): User {
    this.userName = value;
    return this;
  }

  setRole(value: string): User {
    this.role = value;
    return this;
  }

  setEmployee(value: string): User {
    this.employee = value;
    return this;
  }

  setCompany(value: string): User {
    this.company = value;
    return this;
  }

  setLocation(value: string): User {
    this.location = value;
    return this;
  }

  toJson(): any {
    return serialize(this);
  }
}
