import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  closeMenu() {
    const navbar = document.getElementById('navbarContent');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  ngAfterViewInit(): void {

    const navbar = document.getElementById("mainNav");

    function updateNavbar() {
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

      anchor.addEventListener("click", (e: Event) => {

        const targetId = anchor.getAttribute("href");

        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId!);

        if (targetElement) {
          e.preventDefault();

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }

      });

    });

  }
}
