import { environment } from 'src/environments/environment';
import { APIPathConstants } from './app.api-path.constants';
const BASE_URL = environment.BASE_URL;

export class APIConstants {
  public static readonly CUSTOMER_LIST = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_GET = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_ADD = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_UPDATE = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
  public static readonly CUSTOMER_DELETE = `${BASE_URL}/${APIPathConstants.CUSTOMER}`;
}
