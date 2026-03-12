import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  fb = 'https://www.facebook.com/share/1KA8UEHhtc/?mibextid=wwXIfr';
  linkedIn = 'https://www.linkedin.com/company/ishwari-global-tech/';
  ig = 'https://www.instagram.com/ishwariglobaltech?igsh=dTRkNHcyZXR3ODNj'
}
