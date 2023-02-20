import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  endPoint: string = 'https://dome-project-server.onrender.com/api/test';

  constructor(private http: HttpClient) { }

  public getCount(): any{

  }

  public async postCount(ansNum: number): Promise<any>{
    const body: any = { "answer": ansNum };
    const result = await this.http.post(this.endPoint, body, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    return result;
  }
}
