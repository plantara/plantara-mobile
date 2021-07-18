import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.page.html',
  styleUrls: ['./plant-create.page.scss'],
})
export class PlantCreatePage implements OnInit {
  public form: FormGroup;

  public get name() {
    return this.form.get('name');
  }

  public get location() {
    return this.form.get('location');
  }

  public get description() {
    return this.form.get('description');
  }

  constructor(private formBuilder: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {}

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: [''],
      description: [''],
    });
  }
}
