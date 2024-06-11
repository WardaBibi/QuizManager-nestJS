import { Injectable,Get } from '@nestjs/common';

@Injectable()
export class QuizService {

@Get()

getAllQuiz(){
 return [1,2,3]
}

}
