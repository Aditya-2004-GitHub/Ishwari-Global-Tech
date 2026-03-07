import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  submitQuote(form: any) {
    console.log(form.value)

    alert("Quote Request Submitted Successfully")

    form.reset()
  }
}
