import { Component } from '@angular/core';
import { WebsocketService } from './service/websocket.service';
import { CountService } from './service/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dome_Front';
  quizStyle = { display: 'none' };
  textStyle = { display: 'Block' };

  constructor(
    private ws: WebsocketService,
    private ct: CountService,
    ){}
  
  async ngOninit(): Promise<void>{
    // const result = await this.ct.getCount();
    // result.subscribe({
    //   next: (data: any) => {
        
    //   }
    // })
  }

  async countUp(num: number): Promise<void>{
    // this.ws.message(String(num));
    const result = await this.ct.postCount(num);
    result.subscribe((data:any) => {
      console.log(data);
    })
  }
}
