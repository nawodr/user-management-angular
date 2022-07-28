import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() public user: any;
  formGroup!: FormGroup;
  closeResult = '';
  userDetails: any = {};
  dataSource = [];

  Data = [
    {
      role: 'Admin',
      employee: 'Nawod',
      company: 'ABC',
      location: 'Jaffna',
    },
    {
      role: 'HR',
      employee: 'Nawodd',
      company: 'MGF',
      location: 'Meepe',
    },
  ];

  private userD = {
    id: '',
    userName: '',
    role: '',
    employee: '',
    company: '',
    location: '',
    password: '',
  };

  constructor(
    private activeModal: NgbActiveModal,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(this.user.id),
      userName: new FormControl(this.user.userName, [Validators.required]),
      employee: new FormControl(this.user.employee, [Validators.required]),
      company: new FormControl(this.user.company, [Validators.required]),
      location: new FormControl(this.user.location, [Validators.required]),
      role: new FormControl(this.user.role, [Validators.required]),
    });
  }

  update() {
    this.userService.updateUser(this.formGroup.value).subscribe(
      (res: any) => {
        this.activeModal.close('Modal Closed');
        alert(res.message);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
