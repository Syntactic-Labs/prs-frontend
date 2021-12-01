import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch',
})
export class RequestSearchPipe implements PipeTransform {
  transform(requests: Request[], search: string): Request[] {
    if (requests === null || search === '') {
      return requests;
    }
    search = search.toLowerCase();
    let searchRequest: Request[] = [];
    for (let r of requests) {
      if (
        r.id.toString().toLowerCase().includes(search) ||
        r.description.toString().toLowerCase().includes(search) ||
        r.justification.toString().toLowerCase().includes(search) ||
        r.deliveryMode.toString().toLowerCase().includes(search) ||
        r.status.toString().toLowerCase().includes(search) ||
        r.total.toString().toLowerCase().includes(search) ||
        r.userName.toString().toLowerCase().includes(search)
      ) {
        searchRequest.push(r);
      }
    }
    return searchRequest;
  }
}
