import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'setImage'
})
export class SetImagePipe implements PipeTransform {

  transform(value: null | string): unknown {
    if (value) {
      return environment.IMAGE_URL + value;
    }
    return '../../../assets/img/no-image.jpeg';
  }

}
