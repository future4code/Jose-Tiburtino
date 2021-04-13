export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type signupInputDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}

export type loginInput = {
   email: string,
   password: string
}

export function convertStringToUserRole(role: string): USER_ROLES {
   switch (role) {
      case "NORMAL":
         return USER_ROLES.NORMAL;
      case "ADMIN":
         return USER_ROLES.ADMIN;
      default:
         throw new Error("O user role precisa ser 'NORMAL' ou 'ADMIN'")
   }
}