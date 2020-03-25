import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { Libro } from './libro';
import { LibroSinId } from './libroSinId';

@Controller('libro')
export class LibroController {
  @Get()
  getLibros(): Libro[] {
    return [];
  }

  @Post('/:id')
  createLibro(@Body() createLibro: LibroSinId): Libro {
    const libro = new Libro();
    libro.id = 1;
    libro.titulo = createLibro.titulo;
    libro.autor = createLibro.autor;
    libro.fecha = createLibro.fecha;

    return libro;
  }

  @Get('/:id')
  getLibro(@Param('id') id: number): Libro {
    const libro = new Libro();
    libro.id = id;
    libro.titulo = 'Mi libro #1';
    libro.autor = 'Cervantes';
    libro.fecha = new Date();

    return libro;
  }

  @Put('/:id')
  modifyById(@Param('id') id: number, @Body() updateLibro: LibroSinId): Libro {
    const libro = new Libro();
    libro.id = id;
    libro.titulo = updateLibro.titulo;
    libro.autor = updateLibro.autor;
    libro.fecha = updateLibro.fecha;

    return libro;
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number): Libro {
    const libro = new Libro();
    libro.id = id;
    libro.titulo = 'Don Quijote de la Mancha';
    libro.autor = 'Cervantes';
    libro.fecha = new Date();

    return libro;
  }
}
