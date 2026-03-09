import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Footer } from "./core/footer/footer";
import { Navbar } from "./core/navbar/navbar";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ISHWARI-GLOBAL-TECH');

  hideLayout = false;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let currentRoute = this.route.firstChild;
        while (currentRoute?.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        this.hideLayout = currentRoute?.snapshot.data['hideLayout'] || false;

      });

  }
}
