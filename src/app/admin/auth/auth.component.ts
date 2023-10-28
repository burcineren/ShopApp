import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username?: string ;
  password?: string;
  errorMessage?:string;
  constructor(private router: Router, private authService : AuthService) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    if(form.valid){
      this.authService.authenticate(this.username ?? "", this.password ?? "")
      .subscribe(response => {
        if(response){
          this.router.navigateByUrl('/admin/main');
        }
        else {
          this.errorMessage = 'Hatalı username veya paralo';
        }
      });
      // if(this.username==='admin' && this.password==='123'){
      //   this.router.navigateByUrl('/admin/main');
      // }
      // else{
      //   this.errorMessage = 'Hatalı kullanıcı adı ve şifre girdiniz.';
      // }
    } else {
      this.errorMessage ='Bilgileri eksiksiz giriniz.';
    }
  }
}
