export class CreateEntryDto {
    date: Date;
    content: string;
}

/* 
    DTO (Data Transfer Object) for defining structure/types of data received
    from external sources (ie client requests) or send to external sources
    (ie API responses)

    Exists at runtime
*/