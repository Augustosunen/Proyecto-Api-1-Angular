
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserRegister } from './models/formulario';




@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss']
  })

  export class FormRegistroComponent{
  public userRegisterForm!: FormGroup;

	public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({
      Usuario: [''],
      password: [''],
      passwordRepeat: [''],
    });
 }



  public onSubmit(): void {

    this.submitted = true;

    if (this.userRegisterForm.valid) {

      const user: UserRegister = {
        usuario: this.userRegisterForm.get('usuario')?.value,
        password: this.userRegisterForm.get('password')?.value,
        passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
      };
      console.log('Enviado:',user);

      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }
}
