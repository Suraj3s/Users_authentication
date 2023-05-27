import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  UnsupportedMediaTypeException,
} from '@nestjs/common';

@Injectable()
class FileSizeValidation implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const oneKb = 1000;
    const obj = { cause: new Error(), description: 'Some error description' };

    if (value.size < oneKb && value.) {
      throw new UnsupportedMediaTypeException(obj, 'File type is not valid');
    }
  }
}
