import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateBootcampModel } from '../models/request/bootcamp/createBootcampModel';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  apiUrl=" http://localhost:3000/bootcamp"
  bootcampModel:ICreateBootcampModel[]=[]

  constructor(private httpClient:HttpClient) { }

  getBootcamp():Observable<ICreateBootcampModel[]>{

    return this.httpClient.get<ICreateBootcampModel[]>(this.apiUrl)

  }

 
}