import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-textpage',
    templateUrl: './textpage.component.html',
    styleUrls: ['./textpage.component.scss']
})
export class TextpageComponent implements OnInit, OnDestroy {

    title: string = 'courses';
    body: any = '';

    headers = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    unSub: Subscription;

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.unSub = this.route.params.subscribe((params) => {
            this.http.post('lesson/base.php', 'url=' + params['alias'], this.headers).subscribe((responce) => {
                this.body = responce;
            });
        });

    }

    ngOnDestroy() {
        this.unSub.unsubscribe();
    }

}
