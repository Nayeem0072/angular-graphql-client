import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


// Suppose our profile query took an avatar size
const CurrentUserForProfile = gql`
  query CurrentUserForProfile($avatarSize: Int!) {
    currentUser {
      login
      avatar_url(avatarSize: $avatarSize)
    }
  }
`;

@Component({
  template: `
    Login: {{currentUser?.profile}}
  `,
})
export class ProfileComponent implements OnInit, OnDestroy {
  currentUser: any;
  private querySubscription: Subscription;
  constructor(private apollo: Apollo) {};
  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery({
        query: CurrentUserForProfile,
        variables: {
          avatarSize: 100,
        },
      })
      .valueChanges.subscribe(({data}) => {
        this.currentUser = data.currentUser;
      });
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
