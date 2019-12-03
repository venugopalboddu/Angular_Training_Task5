import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fdata: any;
  constructor(private fb: FormBuilder, private s: DetailsService) {}
  ngOnInit() {
    this.getData();
 }
  getData()  {
    this.s.ge().subscribe(res=>{
      this.fdata=res
      console.log("Details", this.fdata);
    }); 
    
  }
}

