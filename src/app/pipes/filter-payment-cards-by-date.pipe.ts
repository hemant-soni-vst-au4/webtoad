import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'filterPaymentCardsByDate',
})
export class FilterPaymentCardsByDatePipe implements PipeTransform {
  transform(value: Array<any>, args?: any): any {
    if (value.length) {
      return value.sort((a, b) => {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return a.created - b.created
      })
    } else {
      return null
    }
  }
}
