import { ArgumentMetadata, Injectable, PipeTransform, UnsupportedMediaTypeException } from '@nestjs/common';

@Injectable()
class FileSizeValidation implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const oneKb = 1000;
    if(value.size < oneKb){
        throw new UnsupportedMediaTypeException
    }
  }
}
