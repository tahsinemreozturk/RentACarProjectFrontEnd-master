import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/car-detail';

@Pipe({
  name: 'carFilter',
})
export class CarFilterPipe implements PipeTransform {
  transform(value: CarDetail[], carFilterText: string): CarDetail[] {
    carFilterText = carFilterText ? carFilterText.trim().toLocaleLowerCase() : '';
    if (!carFilterText) {
      return value;
    }

    return value.filter((c: CarDetail) =>
      c.modelName.toLocaleLowerCase().includes(carFilterText) ||
      c.brandName.toLocaleLowerCase().includes(carFilterText)
    );
  }
}
