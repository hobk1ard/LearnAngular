import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  @Input() interests:[string];
  
  email: string = "test";
  volleyball: boolean = false;
  football: boolean = false;
  tennis: boolean = false;
  onEmailChange(text: string) {
    console.log(this.email);
  }

  onCheckBoxChange(value) {
    for(let i in this.interests){
      if(this.interests[i].name === value.name) {
        this.interests[i].value = value.checked;
        return;
      }
    }
  }

  ngOnInit() {
    
  }

  onSubmit = () => {
    alert("Subscribed");
    this.email = "";
    console.log(this.volleyball);
    console.log(this.football);
    console.log(this.tennis);
    for(let i in this.interests){
      this.interests[i].value = false;
    }


  }
}
