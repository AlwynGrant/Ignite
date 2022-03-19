import { check, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import db from '../../models'

  export const getUserById = async function (id: number) {
    return await db.User.findByPk(id);
  };

  export const signUp = async function (
      email: string,
      firstName: string,
      lastName: string,
      password: string
      ) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await db.User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    return await db.User.findByPk(user.id);
  };

  export const login = async function (email: string, password: string) {
    const user = await db.User.findOne({
      where: {
          email: email,
      },
    });
    if (user && user.validatePassword(password)) {
      return await db.User.findByPk(user.id);
    }
  };
