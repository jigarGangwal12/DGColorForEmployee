import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {
    apiUrl = environment.apiUrl;
    imagePath = environment.imagePath;
    documentPath = environment.documentPath;
    documentURL = environment.documentURL;

    constructor(private http: HttpClient,) { }

    // get all records
    getAll(url: string, body: any): Observable<any> {
        return this.http.get(this.apiUrl + url, { params: body }).pipe(
            map((data) => { return this.extractData(data, false); }),
            catchError(this.handleError)
        );
    }

    // get record by ID
    getById(url: string, id: any): Observable<any> {
        return this.http.get(this.apiUrl + url + '/' + id).pipe(
            map((data) => { return this.extractData(data, false); }),
            catchError(this.handleError)
        );
    }

    // post api request
    post(url: string, body: any, showSuccessMessage?: boolean): Observable<any[]> {
        return this.http.post(this.apiUrl + url, body).pipe(
            map((data) => { return this.extractData(data, showSuccessMessage); }),
            catchError(this.handleError)
        );
    }

    // put api request
    put(url: string, body: any, showSuccessMessage?: boolean): Observable<any[]> {
        return this.http.put(this.apiUrl + url, body).pipe(
            map((data) => { return this.extractData(data, showSuccessMessage); }),
            catchError(this.handleError)
        );
    }

    // Delete api request
    deleteById(url: string, id: any, showSuccessMessage?: boolean): Observable<any[]> {
        return this.http.delete(this.apiUrl + url + '/' + id).pipe(
            map((data) => { return this.extractData(data, showSuccessMessage); }),
            catchError(this.handleError)
        );
    }

    // extract data
    private extractData(res: any, showSuccessMessage?: boolean) {
        const body = res;
        return body;
    }

    // error handler
    private handleError(error: HttpErrorResponse) {
        console.error(error.message || error);
        return throwError(error.message || error);
    }
}
