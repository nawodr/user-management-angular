import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  closeResult = '';
  hide = true;
  formGroup!: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private http: HttpClient,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      employee: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  save() {
    this.userService.saveUser(this.formGroup.value).subscribe(
      (res: any) => {
        console.log(res.message);
        if (res.message != 'Successfully Saved') {
          alert(res.message);
        } else {
          this.activeModal.close('Modal Closed');
          alert(res.message);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
