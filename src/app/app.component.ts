import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ROUTING_CONSTANTS } from 'src/app/constants/routing-constant'

import { UserIdleService } from 'angular-user-idle';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JAY Mirror BI';
  ROUTING_CONSTANTS = ROUTING_CONSTANTS;

  constructor(private router: Router, private userIdle: UserIdleService) {
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
    });
  }

  // initiate it in your component OnInit
  ngOnInit(): void {
    // this.bnIdle.startWatching(100).subscribe((isTimedOut: boolean) => {
    //   if (isTimedOut) {
    //     localStorage.clear();
    //     sessionStorage.clear();
    //     this.router.navigate(['/login']).then(() => {
    //       window.location.reload();
    //     });
    //   }
    // }); 
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.restart();
  }

  @HostListener('window:mousemove') refreshUserState() {
    this.restart();
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }



}
