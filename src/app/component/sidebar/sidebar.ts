import { Component } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  companies = [
    { id: 1, name: 'ASG - Anerkannte Schulgesellschaft mbH', url: 'https://www.asg-sachsen.de/', logo: './images/companies/asg-logo.svg' },
    { id: 2, name: 'cukoo GmbH', url: 'https://www.cukoo.de/', logo: './images/companies/cukoo_logo.png' },
    { id: 3, name: 'cukoo GmbH', url: 'https://www.cukoo.de/', logo: './images/companies/cukoo_logo.png' },
    { id: 4, name: 'cukoo GmbH', url: 'https://www.cukoo.de/', logo: './images/companies/cukoo_logo.png' }
  ];
}
