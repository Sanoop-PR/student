import { Component, OnInit } from '@angular/core';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog'
import { AddmarkComponent } from '../addmark/addmark.component';
import { ServiceService } from '../services/service.service';

export interface PeriodicElement {
  course: string;
  position: number;
  time: number;
  obtainedMark: string;
  maxMark:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, course: 'Hydrogen', time: 1.0079, obtainedMark: 'H' ,maxMark:100},
  {position: 2, course: 'Helium', time: 4.0026, obtainedMark: 'He' ,maxMark:100},
  {position: 3, course: 'Lithium', time: 6.941, obtainedMark: 'Li' ,maxMark:100},
  {position: 4, course: 'Beryllium', time: 9.0122, obtainedMark: 'Be' ,maxMark:100},
  {position: 5, course: 'Boron', time: 10.811, obtainedMark: 'B' ,maxMark:100},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'course', 'time', 'obtainedMark','maxMark'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog,private api:ServiceService){}


  ngOnInit(): void {
    this.api.getStudent().subscribe({
      next:(res:any)=>{
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }


  openAddMarkDialog() {
    const dialogRef = this.dialog.open(AddmarkComponent, {
     
    });

  }
}
