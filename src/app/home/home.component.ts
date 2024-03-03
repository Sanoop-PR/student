import { Component, OnInit } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog'
import { AddmarkComponent } from '../addmark/addmark.component';
import { ServiceService } from '../services/service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'course', 'time', 'obtainedMark','maxMark'];
  allData:any=[]

  constructor(public dialog: MatDialog,private api:ServiceService){
    
  }


  ngOnInit(){
    this.api.getStudent().subscribe({
      next:(res:any)=>{
        this.allData=res
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }


  openAddMarkDialog() {
    this.dialog.open(AddmarkComponent, {
    });
  }
  
}
