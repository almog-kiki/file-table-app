import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpParams} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Table {
  title: string;
  rows: number;
  columns: number;
  notes: string;
}

const baseUrl = '/api/file';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  };

  getFileNames() {
    return this.http.get(baseUrl+'/names').pipe(catchError(this.handleError));
  }

  get(fileName: string) {
    const query = 'file_name='+fileName
    const options = {
      params: new HttpParams({
        fromString: query
      })
    }
    return this.http.get(baseUrl, options).pipe(catchError(this.handleError));;
  }
}
