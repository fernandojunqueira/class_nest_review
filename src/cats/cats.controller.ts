import {
  Query,
  Redirect,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
// import { CatsService } from './cats.service';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'Metodo create';
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  redirect(): string {
    return 'Esse é o metodo que redireciona';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com')
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get()
  @HttpCode(203) //coloquei 203 só pra mostrar como muda o código.
  findAll(@Req() request: Request): object {
    return { message: request.headers['host'] };
  }

  @Get('ab*cd')
  find(): string {
    return 'O * assume qualquer valor';
  }

  // constructor(private readonly catsService: CatsService) {}
  // @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  //   return this.catsService.create(createCatDto);
  // }
  // @Get()
  // findAll() {
  //   return this.catsService.findAll();
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.catsService.findOne(+id);
  // }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return this.catsService.update(+id, updateCatDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.catsService.remove(+id);
  // }
}
