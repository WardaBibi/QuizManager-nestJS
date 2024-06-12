import { IsNotEmpty, Length } from "class-validator";

export class createQuizDto{

   @IsNotEmpty({
    message:'title should not be empty'
   })
   @Length(3,255)
    title:string;

    @IsNotEmpty()
    @Length(3)
    description:string;
}
