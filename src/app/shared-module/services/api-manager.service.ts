import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMethodsTypeEnum } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';
import { HttpHelperService } from '../services/http-helper.service';

@Injectable({
    providedIn: 'root'
})
export class APIManager extends HttpHelperService {

    constructor(sharedService: SharedService, http: HttpClient) {
        super(sharedService, http);
    }

    httpHelperMethod(
        methodType: HttpMethodsTypeEnum,
        url: string,
        params = {},
        showLoader = true,
        showToaster = true,
        httpOptions = this.httpHeaders,
    ): Observable<any> {
        if (showLoader) {
            this.sharedService.setLoader(true);
        }
        return super.httpHelperMethod(
            methodType,
            url,
            params,
            showLoader,
            showToaster,
            httpOptions,
        );
    }

    get httpHeaders(): HttpHeaders {
        return new HttpHeaders();
    }
}
