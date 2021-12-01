import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], search: string): User[] {
    if ( users === null || search === "") {
      return users;
    }
    let searchUser: User[] = [];
    search = search.toLowerCase();
    for (let u of users) {
      if(
        u.id.toString().toLowerCase().includes(search) ||
        u.username.toString().toLowerCase().includes(search) ||
        u.firstname.toString().toLowerCase().includes(search) ||
        u.lastname.toString().toLowerCase().includes(search) ||
        (u.phone != null && u.phone.toString().toLowerCase().includes(search)) ||
        (u.email != null && u.email.toString().toLowerCase().includes(search)) ||
        u.isAdmin.toString().toLowerCase().includes(search) ||
        u.isReviewer.toString().toLowerCase().includes(search)
      ) {
        searchUser.push(u);
      }
    }
    return searchUser;
  }

}
