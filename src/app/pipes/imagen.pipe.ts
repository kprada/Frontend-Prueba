import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(avatar: string): any {

    let url =`${URL_SERVICIOS}apirest/get-image/${avatar}`;


    if (!avatar) {
      return  `${URL_SERVICIOS}apirest/get-image/noimage`;
      
    }
    return url;
  }

}


