import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addmark',
  templateUrl: './addmark.component.html',
  styleUrls: ['./addmark.component.css'],
})
export class AddmarkComponent {

  minDate: Date;
  maxDate: Date;

  marksForm = this.formBuilder.group({
    courseName: ['', Validators.required],
      examinationDate: ['', Validators.required],
      examinationTime: ['', Validators.required],
      marksObtained: ['',[Validators.required, Validators.min(0)]],
      maxMarks: ['', [Validators.required, Validators.min(0)]]
  });

  constructor(
    private dialogRef: MatDialogRef<AddmarkComponent>,
    private formBuilder: FormBuilder,
    private api: ServiceService,
    private toastr: ToastrService
  ) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 1, 0, 1);
    this.maxDate = new Date();
  }

  
  onSubmit() {
    if (this.marksForm.valid) {
      console.log(this.marksForm);

      let courseName = this.marksForm.value.courseName
      let examinationDate = moment(this.marksForm.value.examinationDate).format('MMM D, YYYY');
      let examinationTime = this.marksForm.value.examinationTime
      let marksObtained = this.marksForm.value.marksObtained
      let maxMarks = this.marksForm.value.maxMarks
      


      this.api.addMarks(courseName,examinationDate,examinationTime,marksObtained,maxMarks).subscribe({
        next:(res:any)=>{
          console.log(res)
          this.onCancel()
          this.showSuccess()
         
        },
        error:(err:any)=>{
          console.log(err)
          this.showError()
        }
      })
    }
  }

  onCancel() {
    this.dialogRef.close(false); // Pass false to indicate cancellation
  }

  showSuccess() {
    this.toastr.success('new mark added');
  }
  showError() {
    this.toastr.error('something wrong');
  }

}
