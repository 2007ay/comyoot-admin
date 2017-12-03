import { Component, OnInit } from '@angular/core';
import { AlertService, SubscriptionService } from '../../_services/index';

@Component({
  selector: 'app-subscription',
  templateUrl: './_subscription.component.html',
  styleUrls: ['./_subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  public model: any = {
    message: '',
    subject: 'News from ComYoot team',
    from: 'info@comyoot.co',
    toAll: true,
    emails: ''
  };

  public loading: Boolean = false;

  constructor(
    private subscriptionService: SubscriptionService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  sendSubscriptions() {
    this.subscriptionService.sendSubscription(this.model)
      .subscribe(
      data => {
        this.alertService.success('Registration successful', true);
      },
      error => {
        this.alertService.error(error);
      });
  }
}
