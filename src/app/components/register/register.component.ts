import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../helpers/service/auth.service';
import { ToastService } from '../helpers/service/toast.service';

@Component({
  selector: 'app-register',
  imports: [ FormsModule,
             RouterModule,
             ReactiveFormsModule
          ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
//
  registerForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastService: ToastService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  } 

    register() {
      if (this.registerForm.valid) {
        this.authService.register(this.registerForm.value).subscribe({
          next: () => {
            console.log('Registro exitoso');
          },
          error: (err) => {
            console.log('Error en el registro', err);
          },
          complete: () => {
            this.router.navigateByUrl('/');
          }
        });
      }
    }

  // register() {
  //   if (this.registerForm.valid) {
  //     this.authService.register(this.registerForm.value).subscribe({
  //       next: () => {
  //         this.toastService.showToast('success', 'Éxito', 'Registro exitoso, inicie sesión');
  //         this.router.navigateByUrl('/');
  //       },
  //       error: (err) => {
  //         this.toastService.showToast('error', 'Error', err.error.message);
  //       },
  //     });
  //   }
  // }

}
