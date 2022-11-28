import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm: FormGroup = this._fb.group({
      name: ['', [Validators.required]]
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }

}
