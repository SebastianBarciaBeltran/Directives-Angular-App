import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  text: string = 'Sebastián Barcia Beltran';
  color: string = 'blue';

  myForm: FormGroup = this._fb.group({
      name: ['', [Validators.required]]
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

  }

  changeName(): void {
    this.text = Math.random().toString();
  }

  changeColor(): void {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

  haveError( formControlName ):boolean {
    return this.myForm.get(formControlName).invalid || false;
  }

}
