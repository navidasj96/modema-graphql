import { Injectable } from '@nestjs/common';
import { CreateBasicCarpetBorderInput } from './dto/create-basic-carpet-border.input';
import { UpdateBasicCarpetBorderInput } from './dto/update-basic-carpet-border.input';

@Injectable()
export class BasicCarpetBorderService {
  create(createBasicCarpetBorderInput: CreateBasicCarpetBorderInput) {
    return 'This action adds a new basicCarpetBorder';
  }

  findAll() {
    return `This action returns all basicCarpetBorder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCarpetBorder`;
  }

  update(id: number, updateBasicCarpetBorderInput: UpdateBasicCarpetBorderInput) {
    return `This action updates a #${id} basicCarpetBorder`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCarpetBorder`;
  }
}
