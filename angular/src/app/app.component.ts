import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, NavigationEnd, Params, Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'courses';
    body: any = '';

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                http.post('index.php', '?url='+val.url).subscribe((responce) => {
                    this.body = responce;
                });
            }
        });


    }
}