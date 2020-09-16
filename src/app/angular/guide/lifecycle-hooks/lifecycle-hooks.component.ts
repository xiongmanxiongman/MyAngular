import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.less']
})
export class LifecycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
