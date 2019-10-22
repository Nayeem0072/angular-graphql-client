import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const AUTHORS_QUERY = gql`
  query {
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
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: any[] = [];

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: AUTHORS_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      this.authors = result.data && result.data.authors;
      console.log(result.data);
    });
  }
}
