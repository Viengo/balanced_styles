import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'courses';
    body: any = '';

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
        console.log(router);
        route.params.subscribe((params: Params) => {
            console.log(params);
            http.get('lesson1.php').subscribe((responce) => {
                this.body = responce;
            });
        });
    }
}