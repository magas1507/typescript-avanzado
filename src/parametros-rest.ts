//ya tenemos declarados user y roles por eso lo importamos

import { User, ROLES } from './01-enum';

const currentUser: User ={
  userName:'magaas',
  role: ROLES.CUSTOMER
}

export const checkAdmindRole = () => {
  if (currentUser.role === ROLES.ADMIN ) {
    return true;
  }

  return false;
}

const rta = checkAdmindRole();
console.log('checkAdmindRole',rta)

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }

  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRole', rta2);

export const checkRolev2 = (roles:string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
}

const rta3 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('checkRolev2', rta3);

export const checkRolev3 = (...roles:string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRolev3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
