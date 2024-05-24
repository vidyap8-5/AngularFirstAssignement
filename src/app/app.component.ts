import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Company } from '../Company';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newAppWorkShop';
 displayNow= "visibility: hidden;width:1000px";
  company: Company={
    name:'',
    location:'',
    year:0,
    countofEmployees:0
  }

  companies:Company[]=[]
  display(item:Company)
  {
    this.companies.push(item);
    this.displayNow="width: 50%;";
    console.log(item.name);
    console.log(item.location);
    console.log(item.year);
    console.log(item.countofEmployees);
  }
}
