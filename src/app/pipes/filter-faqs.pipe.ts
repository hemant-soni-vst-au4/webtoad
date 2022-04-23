import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'filterFaqs',
})
export class FilterFaqsPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
      (item) => item.question.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    )
  }
}
