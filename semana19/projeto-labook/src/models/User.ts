export type SignUpInputDTO = {
  name: string;
  email: string;
  password: string;
};

export type LoginInputDTO = {
  email: string;
  password: string;
};

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPassword(): string {
    return this.password;
  }
}
