import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  contactForm!: FormGroup;

  locations = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'Australia' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'Brazil' },
    { id: 5, name: 'England' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      country: [null],
    });
  }
}
