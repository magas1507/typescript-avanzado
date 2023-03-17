enum ROLES{
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER =  'customer',
}

type User = {
  username: string;
  role: ROLES;
}

const magaUser: User ={
  username: 'magas1507',
  role: ROLES.SELLER
}
