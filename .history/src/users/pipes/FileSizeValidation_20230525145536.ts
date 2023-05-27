import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
class FileSizeValidation implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        const oneKb = 1000; 
        return value.size < oneKb;
    }
}