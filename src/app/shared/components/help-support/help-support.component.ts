import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.css']
})
export class HelpSupportComponent {
  constructor(
    private messageService: MessageService
  ){
    this.sendMessage("Hello, what is your name")

  }
  sendMessage(message: string){
      this.messageService.sendMessage(message).subscribe((response: any) => {
        console.log(response)
      })
    }
}
