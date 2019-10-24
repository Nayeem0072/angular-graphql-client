import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import gql from 'graphql-tag';

const FeedQuery = gql`
  query getauthers{
    authors {
        id,
        name,
        bio,
        imgUrl,
        profileUrl
    }
  }
`;

@Component({
  template: `
    <ul *ngFor="let entry of data | async">
      Score: {{entry.score}}
    </ul>
  `,
})
export class FeedComponent implements OnInit {
  data: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.data = this.apollo
      .watchQuery({query: FeedQuery})
      .valueChanges.pipe(map(({data}) => data.feed));
  }
}
