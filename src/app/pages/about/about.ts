import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterLink, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  revealElements: HTMLElement[] = [];

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {

    this.revealElements = Array.from(
      this.el.nativeElement.querySelectorAll('.capability-card, .tech-list li')
    );

    // Initial styling setup
    this.revealElements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    this.revealOnScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.revealOnScroll();
  }

  revealOnScroll() {

    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    this.revealElements.forEach((element) => {

      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }

    });

  }
}
