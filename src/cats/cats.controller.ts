import {
  Query,
  Redirect,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
// import { CatsService } from './cats.service';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): CreateCatDto {
    return createCatDto;
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

  @Get(':id')
  findOne(@Param() params: any): string {
    const id = params.id;
    return `This action return a #${id} cat`;
  }

  @Get('breed/:catsId')
  findTwo(@Param('catsId') id: string): string {
    return `This action return a #${id} breed`;
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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return this.catsService.update(+id, updateCatDto);
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.catsService.remove(+id);
  // }
}
