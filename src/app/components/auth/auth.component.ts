import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../helpers/service/auth.service';
//import { ToastService } from '../helpers/service/toast.service';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
//
  loginForm!: FormGroup;

  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);
  //private readonly toastService: ToastService = inject(ToastService);

  constructor()
   {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          console.log('Se ha authemicado correctamente');
          //this.toastService.showToast('success','Éxito','Bienvenido')
          this.router.navigateByUrl('/inicio');
        },
        error: (err) => {
          console.error('Error de inicio de sesion', err.error.message);
          //this.toastService.showToast('error','Error',err.error.message)
        },
      });
    }
  }


}
