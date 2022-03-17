import bcrypt from 'bcryptjs'


export const users: object[] = [
     {
        email: 'demo@email.com',
        firstName: 'Demo',
        lastName: "Dude",
        password: bcrypt.hashSync('password'),
      },
      {
        email: 'aquafinaleena@email.com',
        firstName: 'Leena',
        lastName: "Winchester",
        password: bcrypt.hashSync('password'),
      },
      {
        email: 'rickrolls@email.com',
        firstName: 'Rick',
        lastName: "Rolls",
        password: bcrypt.hashSync('password'),
      },
     {
        email: 'Greg223@email.com',
        firstName: 'Greg',
        lastName: "Dawson",
        password: bcrypt.hashSync('password'),
      },
      {
        email: 'bkane76@email.com',
        firstName: 'Brandon',
        lastName: "Kane",
        password: bcrypt.hashSync('password'),
      },
      {
        email: 'emilyness@email.com',
        firstName: 'Emily',
        lastName: "Johnson",
        password: bcrypt.hashSync('password'),
      },
]
