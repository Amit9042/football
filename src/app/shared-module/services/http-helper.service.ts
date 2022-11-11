import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { HttpMethodsTypeEnum } from '@sharedModule/constants';
import { SharedService } from '@sharedModule/services';

@Injectable({
    providedIn: 'root'
})
export class HttpHelperService {

    constructor(protected sharedService: SharedService, protected http: HttpClient) {
    }

    // will return Observable of any(http response,error)
    protected httpHelperMethod(
        methodType: HttpMethodsTypeEnum,
        url: string,
        params = {},
        showLoader: boolean,
        showToaster: boolean,
        httpOptions,
    ) {
        return this.apiCall(methodType, url, params, httpOptions).pipe(
            tap((response: any) => {
                // this.setToastMessage(response, showToaster);
                return response || {};
            }),
            catchError(this.handleError()),
            finalize(() => {
                if (showLoader) {
                    this.sharedService.setLoader(false);
                }
            })
        );
    }

    private setToastMessage(res: any, show?: boolean): void {
        const msg = res && res.message ? res.message : '';
        if (show && msg) {
            this.sharedService.setToastMsg(msg);
        }
    }

    // Communicate with server to get api data
    private apiCall(
        methodType: HttpMethodsTypeEnum,
        url: string,
        params = {},
        httpOptions
    ): Observable<any> {
        switch (methodType) {
            case HttpMethodsTypeEnum.GET:
                return this.http.get<any>(
                    this.prepareEndpoint(url, params),
                    httpOptions
                );
            case HttpMethodsTypeEnum.PATCH:
                return this.http.patch<any>(url, params, httpOptions);
            case HttpMethodsTypeEnum.POST:
            case HttpMethodsTypeEnum.POST_MULTIPART:
                return this.http.post<any>(url, params, httpOptions);
            case HttpMethodsTypeEnum.PUT:
            case HttpMethodsTypeEnum.PUT_MULTIPART:
                return this.http.put<any>(url, params, httpOptions);
            case HttpMethodsTypeEnum.DELETE:
                return this.http.delete(this.prepareEndpoint(url, params), httpOptions);
            default:
                return new Observable();
        }
    }

    private handleError<T>() {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            return throwError(error);
        };
    }

    private prepareEndpoint(endPoint: string, params: any) {
        if (Object.keys(params).length) {
            if (params) {
                endPoint += '?';
            }
            let count = 0;
            for (const key in params) {
                if (params.hasOwnProperty(key)) {
                    endPoint +=
                        count > 0
                            ? `&${key}=${params[key]}`
                            : `${key}=${params[key]}`;
                    count++;
                }
            }
        }
        return endPoint;
    }
}
