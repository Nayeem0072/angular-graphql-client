import { Component, OnInit } from '@angular/core';
import { Author, AllAuthorsGQL } from '../graphql/AllAuthorsGQL';
import { CreateAuthorGQL } from '../graphql/CreateAuthorGQL';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";

const AUTHORS_QUERY = gql`
  query getauthers {
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
  selector: 'app-gauthor',
  templateUrl: './gauthor.component.html',
  styleUrls: ['./gauthor.component.css']
})
export class GauthorComponent implements OnInit {
  authors: Observable<Author[]>;

  constructor(private allAuthorsGQL: AllAuthorsGQL, private createAuthorGQL: CreateAuthorGQL, private apollo: Apollo) { }

  ngOnInit() {
    this.authors = this.apollo
      .watchQuery({query: AUTHORS_QUERY})
      .valueChanges.pipe(map(({data}) => data.authors));
    console.log("here");

    // this.authors = this.allAuthorsGQL.watch({
    // })
    //   .valueChanges
    //   // .subscribe(({ data, loading }) => {
    //   //   this.authors = data.authors;
    //   // });
    //   .pipe(
    //     map(result => result.data.authors)
    //   );
  }

  addAuthor(): void {
    console.log("authors: " + this.authors);
    this.createAuthorGQL.mutate({
      author: {
        id: "120",
        name: "nayeem",
        bio: "programmer",
        imgUrl: "www.google.com/i/nayeem.jpg",
        profileUrl: "www.instagram.com/nayeem.jpg"
      }
    })
      .subscribe();
  }



}
