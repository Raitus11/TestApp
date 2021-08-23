import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  response:any;

  constructor(private http: HttpClient) { }

  getModelData(refNum:any, zipCode:any, progCode:any, associateNumber:any, clientID:any)
  {
    debugger;
    const headers = new HttpHeaders({'dsp-client-id':clientID});

    let params = new HttpParams();    
    params = params.append('referenceNumber', refNum);
    params = params.append('zipCode', zipCode);
    params = params.append('programCode', progCode);
    params = params.append('associateNumber', associateNumber);


    return this.http.get<any>('https://model-processapi-account-dsp.assurant.com/api/Payment/Profile',
     { params: params, headers:headers }
    ).pipe(map(data => data)).pipe(catchError(this.erroHandler));
  
    

    
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
