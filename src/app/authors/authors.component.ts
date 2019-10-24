import {Component, OnDestroy, OnInit} from '@angular/core';
import {Apollo, QueryRef} from 'apollo-angular';
import { Subscription } from 'rxjs';
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

const CREATE_AUTHOR_QUERY = gql`
  mutation ($author: authorInput!) {
    createAuthor(author: $author) {
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
export class AuthorsComponent implements OnInit, OnDestroy {

  authors: any[] = [];
  loading: any;

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  private querySubscription: Subscription;

  ngOnInit() {
    this.showAuthor();
  }

  showAuthor(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: AUTHORS_QUERY
    }).valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.authors = data.authors;
      });
  }

  addAuthor(): void {
    this.apollo.mutate({
      mutation: CREATE_AUTHOR_QUERY,
      variables: {
        author: {
          id: "120",
          name: "nayeem",
          bio: "programmer",
          imgUrl: "www.google.com/i/nayeem.jpg",
          profileUrl: "www.instagram.com/nayeem.jpg"
        }
      }
    }).subscribe(result => {
      console.log('got data', result.data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
