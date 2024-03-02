import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addmark',
  templateUrl: './addmark.component.html',
  styleUrls: ['./addmark.component.css'],
  // imports: [FormsModule, MatFormFieldModule, MatInputModule],

})
export class AddmarkComponent implements OnInit {

  marksForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddmarkComponent>,
    private formBuilder: FormBuilder,
    private api: ServiceService
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  initForm() {
    this.marksForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      examinationDateTime: ['', Validators.required],
      marksObtained: ['', [Validators.required, Validators.min(0)]],
      maxMarks: ['', [Validators.required, Validators.min(0)]]
    });
  }
  
  onSubmit() {
    if (this.marksForm.valid) {
      console.log(this.marksForm);
      
      // Save marks and close dialog
      // this.api.addMarks(this.marksForm.value).subscribe(() => {
      //   this.dialogRef.close(true); 
      // });
    }
  }

  onCancel() {
    this.dialogRef.close(false); // Pass false to indicate cancellation
  }

}
