import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {
  public transform(values: any[], key: string): any[] {
    if (values.length <= 0 || !key) return values;
    const regxp = new RegExp(key, 'gi');
    return values.filter((item) => {
      return regxp.test(<any>Object.values(item));
    });
  }
}
