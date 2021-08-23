import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelService } from './model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  referenceNumber:any;
  zipCode:any;
  programCode:any;
  associateNumber:any;
  clientID:any;
  modelResponse:any;
  isResponse:boolean = false;

  constructor(private modelService: ModelService){ } 

  GetResponse() {
    this.isResponse = true;
    this.modelService.getModelData(this.referenceNumber, this.zipCode, this.programCode, this.associateNumber, this.clientID)
    .subscribe((data :any) => {this.modelResponse = JSON.stringify(data);
      console.log(this.modelResponse);
      this.isResponse = false;
    },
    error =>{this.modelResponse = JSON.stringify(error);
      this.isResponse = false;
    });
    
  }
}
