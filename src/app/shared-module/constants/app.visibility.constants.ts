export class AppVisibilityConstants {

  public static readonly SHOW_HEADER_SHOW_SIDEBAR_SHOW_FOOTER = {
    isHeader: true,
    isSidebar: true,
    isFooter: true,
  };

  public static readonly SHOW_HEADER_SHOW_SIDEBAR_HIDE_FOOTER = {
    isHeader: true,
    isSidebar: true,
    isFooter: false,
  };

  public static readonly SHOW_HEADER_HIDE_SIDEBAR_HIDE_FOOTER = {
    isHeader: true,
    isSidebar: false,
    isFooter: false,
  };

  public static readonly SHOW_HEADER_HIDE_SIDEBAR_SHOW_FOOTER = {
    isHeader: true,
    isSidebar: false,
    isFooter: true,
  };

  public static readonly HIDE_HEADER_SHOW_SIDEBAR_SHOW_FOOTER = {
    isHeader: false,
    isSidebar: true,
    isFooter: true,
  };

  public static readonly HIDE_HEADER_SHOW_SIDEBAR_HIDE_FOOTER = {
    isHeader: false,
    isSidebar: true,
    isFooter: false,
  };

  public static readonly HIDE_HEADER_HIDE_SIDEBAR_SHOW_FOOTER = {
    isHeader: false,
    isSidebar: false,
    isFooter: true,
  };


  public static readonly HIDE_HEADER_HIDE_SIDEBAR_HIDE_FOOTER = {
    isHeader: false,
    isSidebar: false,
    isFooter: false,
  };
}
