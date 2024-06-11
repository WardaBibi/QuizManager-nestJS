import { Controller,Get,Post,Body,HttpCode, ValidationPipe, UsePipes } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { createQuizDto } from './dto/quiz.dto';

@Controller('quiz')

export class QuizController {

    constructor(private quizService:QuizService){}

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz(@Body() QuizData:createQuizDto){
        return {quiz:QuizData}
    }

}
