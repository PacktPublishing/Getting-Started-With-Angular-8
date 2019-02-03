import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input()
  title: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  goTo(location: string) {
    console.log(location);
    this.router.navigateByUrl(location);
  }
}
