import { ArgumentMetadata, PipeTransform } from "@nestjs/common";


@Inj
class FileSizeValidation implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        const oneKb = 1000; 
        return value.size < oneKb;
    }
}