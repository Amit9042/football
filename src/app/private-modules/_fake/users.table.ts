import { UserModel } from "@userModule/models";
export class UsersTable {
  public static users: UserModel[] = [
    {
      "id": 1,
      "email": "adils.hari@gmail.com",
      "first_name": "adilk",
      "last_name": "bari",
      "user_name": "addids"
    },
    {
      "id": 2,
      "email": "khalid@gmail.com",
      "first_name": "khalid",
      "last_name": "khalid",
      "user_name": "khalid"
    },
    {
      "id": 3,
      "email": "habet@gmail.com",
      "first_name": "habet",
      "last_name": "habet",
      "user_name": "habet"
    },
    {
      "id": 4,
      "email": "savaniyaamit@gmail.com",
      "first_name": "amit",
      "last_name": "savaniya",
      "user_name": "amit_savaniya",
      "password": 'Admin@123'
    }
  ]
}