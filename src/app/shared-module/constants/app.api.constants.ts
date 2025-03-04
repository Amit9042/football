import { environment } from 'src/environments/environment';
import { APIPathConstants } from './app.api-path.constants';
const BASE_URL = environment.BASE_URL;

export class APIConstants {

  /* USER MODULE */
  public static readonly SIGN_UP = `${BASE_URL}/${APIPathConstants.USER}`;
  public static readonly USER_LIST = `${BASE_URL}/${APIPathConstants.USER}`;
  public static readonly USER_BY_ID = `${BASE_URL}/${APIPathConstants.USER}`;

  /* PLAYER MODULE */
  public static readonly PLAYER_LIST = `${BASE_URL}/${APIPathConstants.PLAYER}`;
  public static readonly PLAYER_BY_ID = `${BASE_URL}/${APIPathConstants.PLAYER}`;
  public static readonly PLAYER_DELETE = `${BASE_URL}/${APIPathConstants.PLAYER}`;
  public static readonly PLAYER_ADD = `${BASE_URL}/${APIPathConstants.PLAYER}`;
  public static readonly PLAYER_UPDATE = `${BASE_URL}/${APIPathConstants.PLAYER}`;
  
  public static readonly CUSTOMER_LIST = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_GET = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_ADD = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_UPDATE = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_DELETE = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
}
