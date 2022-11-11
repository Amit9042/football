import { Injectable } from '@angular/core';
import { SVG_ICONS_LIST } from '@sharedModule/constants';
// import { SvgIconRegistryService } from "angular-svg-icon";

@Injectable({
  providedIn: 'root'
})
export class SvgIconsService {
  /* baseSvgPath = './assets/images/svg_files/';
  iconExtension = '.svg';

  constructor(
    private svgIconRegistryService: SvgIconRegistryService,
  ) { }

  registerIcons() {
    SVG_ICONS_LIST.forEach(icon => {
      const str = `${this.baseSvgPath}${icon}${this.iconExtension}`;
      (<any>this.svgIconRegistryService.loadSvg(str, icon)).subscribe();
    });
  } */
}
