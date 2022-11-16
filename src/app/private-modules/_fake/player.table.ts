import { PlayerModel } from "@playerModule/models";
import { UserModel } from "@userModule/models";
export class PlayerTable {
  public static players: PlayerModel[] = [
    {
      "id": 1,
      "age": 25,
      "first_name": "Amit",
      "height": "1222",
      "image": "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1",
      "last_name": "Savaniya",
      "name": "Redouan Ait Lamkadem",
      "nationality": "Morocco",
      "position": "FORWARD",
      "price": 0,
      "club_id": 'club1' as any
    },
    {
      "id": 2,
      "age": 31,
      "first_name": "",
      "height": "1,81�m",
      "image": "https://img.a.transfermarkt.technology/portrait/header/363537-1476111002.jpg?lm=1",
      "last_name": "",
      "name": "Simon Di�dhiou",
      "nationality": "Senegal",
      "position": "FORWARD",
      "price": 0,
      "club_id": 1
    },
    {
      "id": 3,
      "age": 23,
      "first_name": "",
      "height": "1,85�m",
      "image": "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1",
      "last_name": "",
      "name": "Tiago Lopes",
      "nationality": "Portugal Cape Verde",
      "position": "FORWARD",
      "price": 0,
      "club_id": 1
    },
    {
      "id": 4,
      "age": 27,
      "first_name": "",
      "height": "",
      "image": "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1",
      "last_name": "",
      "name": "Badr Eddine Akhaelarab",
      "nationality": "Morocco",
      "position": "FORWARD",
      "price": 0,
      "club_id": 1
    },
    {
      "id": 5,
      "age": 23,
      "first_name": "",
      "height": "1,77�m",
      "image": "https://img.a.transfermarkt.technology/portrait/header/default.jpg?lm=1",
      "last_name": "",
      "name": "Amine Karraoui",
      "nationality": "France Morocco",
      "position": "FORWARD",
      "price": 0,
      "club_id": 1
    }
  ]
}