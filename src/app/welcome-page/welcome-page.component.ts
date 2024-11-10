import { Component } from '@angular/core';
import { JwtService } from '../service/jwt.service';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  message: any;


  
 
  constructor(
    private service: JwtService
  ){}
  ngOnInit(){
this.hello();
  }
  hello(){
    this.service.hello().subscribe((response)=>{
      console.log(response);
      this.message = response.message;

    }
    )
  }
}
