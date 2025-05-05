import { Component, inject, OnInit } from '@angular/core';
import { User } from '../helpers/models/user';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../helpers/service/auth.service';
import { ToastService } from '../helpers/service/toast.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
//
  user: User | undefined;

  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);
  private readonly toastService: ToastService = inject(ToastService);

  ngOnInit() {
    this.authService.getDetails().subscribe((userData) => {
      this.user = userData;
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        //this.toastService.showToast('success', 'Sesión Cerrada', '');
        this.router.navigateByUrl('');
      },
      error: () => {
        // this.toastService.showToast(
        //   'error',
        //   'Error',
        //   'No se pudo cerrar la sesión'
        // );
      },
    });
  }
}
