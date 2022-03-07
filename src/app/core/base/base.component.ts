import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})

export abstract class BaseComponent implements OnInit, OnChanges, OnDestroy {
  subcriptions: Subscription[] = [];
  constructor() { }

  ngOnInit(): void {
    this.onInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.onChanges(changes);
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach(subscription => subscription.unsubscribe());
    this.onDestroy();
  }

  protected onInit(): void {}
  protected onChanges(changes: SimpleChanges): void {}
  protected onDestroy(): void {}

}
