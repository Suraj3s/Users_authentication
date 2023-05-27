import { ArgumentMetadata, PipeTransform } from "@nestjs/common";



class FileSizeValidation implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        const oneKb = 1000;
        
    }
}