import {Injectable} from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CreateAuthorGQL extends Mutation {
  document = gql`
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
}
