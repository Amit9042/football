import { Injectable } from "@angular/core";
import { APIConstants, HttpMethodsTypeEnum } from "@sharedModule/constants";
import { APIManager } from "@sharedModule/services";
import { PlayerModel } from "@playerModule/models";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private apiManager: APIManager) { }

  addPlayer(playerModel: PlayerModel): Observable<PlayerModel> {
    return this.apiManager.httpHelperMethod(
      HttpMethodsTypeEnum.POST,
      APIConstants.PLAYER_ADD,
      playerModel
    );
  }

  updatePlayer(playerModel: PlayerModel): Observable<PlayerModel> {
    return this.apiManager.httpHelperMethod(
      HttpMethodsTypeEnum.POST,
      APIConstants.PLAYER_UPDATE,
      playerModel
    );
  }

  getPlayerList(): Observable<PlayerModel[]> {
    return this.apiManager.httpHelperMethod(
      HttpMethodsTypeEnum.GET,
      APIConstants.PLAYER_LIST,
    );
  }

  getPlayerById(playerId): Observable<PlayerModel> {
    return this.apiManager.httpHelperMethod(
      HttpMethodsTypeEnum.GET,
      `${APIConstants.PLAYER_BY_ID}/${playerId}`,
    );
  }

  deletePlayer(playerId): Observable<PlayerModel> {
    return this.apiManager.httpHelperMethod(
      HttpMethodsTypeEnum.DELETE,
      `${APIConstants.PLAYER_DELETE}/${playerId}`,
    );
  }
}
