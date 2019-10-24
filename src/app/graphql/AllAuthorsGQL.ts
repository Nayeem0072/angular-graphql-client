import {Injectable} from '@angular/core';
import {Query} from 'apollo-angular';
import gql from 'graphql-tag';

export interface Author {
  id: number;
  name: string;
  bio: string;
  imgUrl: string;
  profileUrl: string;
  __typename: string;

}
export interface Response {
  authors: Author[];
}


@Injectable({
  providedIn: 'root',
})
export class AllAuthorsGQL extends Query<Response> {
  document = gql`
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
}
