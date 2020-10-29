import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({selector: 'app-admin', templateUrl: './admin.component.html', styleUrls: ['./admin.component.css']})
export class AdminComponent implements OnInit {

    authForm : FormGroup;
    title : string = 'login';
    constructor(private fb : FormBuilder, private authService : AuthService, private router : Router, private route : ActivatedRoute) {
        this.authForm = this.fb.group({
            email: [
                '',
                [
                    Validators.required, Validators.email
                ]
            ],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        // this.route.url.subscribe(urlSegment => {
        // this.authType = urlSegment[urlSegment.length - 1].path;
        // this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';

        // })
    }

    onSubmit() {
        this.authService.doLogin(this.authForm.value).then(res => {
            console.log(res);
            this.router.navigateByUrl('/images');
        }, err => {
            console.log(err);
        }).catch(err => console.log(err));
    }

    get name() {
        return this.authForm.get('name');
    }

}
