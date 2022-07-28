import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  closeResult = '';
  
  constructor(public modalService: NgbModal, private http: HttpClient) {}
  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(AddUserComponent, { size: 'lg' });
    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
