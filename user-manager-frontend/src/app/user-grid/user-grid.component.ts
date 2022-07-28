import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ProfileComponent } from '../edit-Profile/profile.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss'],
})
export class UserGridComponent implements OnInit {
  closeResult = '';
  dataSource = [];
  userDetails = [];

  constructor(
    public modalService: NgbModal,
    private http: HttpClient,
    private userService: UserService
  ) {}
  currentMsgToChild1 = '';
  ngOnInit(): void {
    this.getUsers();
    this.userService.Refreshrequired.subscribe((respone) => {
      this.getUsers();
    });
  }

  displayedColumns: string[] = [
    'select',
    'role',
    'userName',
    'employee',
    'location',
    'action',
  ];

  open(user: any) {
    const modalRef = this.modalService.open(ProfileComponent, { size: 'lg' });
    modalRef.componentInstance.user = user;
    modalRef.result
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  openConfirmation(userId: any) {
    const modalRef = this.modalService.open(ConfirmationComponent, {
      size: 'sm',
    });
    modalRef.result
      .then((result: any) => {
        console.log(result);
        if (result == 'delete') {
          this.deleteUser(userId);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (res: any) => {
        this.userDetails = res.response;
        this.dataSource = this.userDetails;
      },
      (error: any) => {}
    );
  }
  deleteUser(userId: any) {
    this.userService.deleteUser(userId).subscribe(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
