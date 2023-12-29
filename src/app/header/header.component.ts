import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  showPendingTasks() {
    this.router.navigate(['']);
  }

  showDeleted() {
    this.router.navigate(['/deleted']);
  }

  showAlltasks() {
    this.router.navigate(['/all']);
  }

  showCompletedTasks() {
    this.router.navigate(['/completed']);
  }
}
