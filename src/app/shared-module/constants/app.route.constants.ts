import { RoutePathConstants } from "./app.route-path.constants";

export class RouteConstants {
  public static readonly LOGIN_PATH = `${RoutePathConstants.AUTH}/${RoutePathConstants.LOGIN}`;
  public static readonly REGISTER_PATH = `${RoutePathConstants.AUTH}/${RoutePathConstants.REGISTER}`;
  public static readonly RESET_PASSWORD_PATH = `${RoutePathConstants.AUTH}/${RoutePathConstants.RESET_PASSWORD}`;
  public static readonly FORGOT_PASSWORD_PATH = `${RoutePathConstants.AUTH}/${RoutePathConstants.FORGOT_PASSWORD}`;
  public static readonly VERIFY_EMAIL_PATH = `${RoutePathConstants.AUTH}/${RoutePathConstants.VERIFY_EMAIL}`;

  public static readonly DASHBOARD_PATH = `${RoutePathConstants.DASHBOARD}`;
}
