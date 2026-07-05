import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });

    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
    });
  }

  // Return an array with the matching condition
  find(email: string) {
    return this.repo.find({
      where: {
        email,
      },
    });
  }

  async update(id: number, attrbs: Partial<User>) {
    const user = await this.repo.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    // console.log(attrbs);
    Object.assign(user, attrbs);
    return this.repo.save(user);
  }

  async delete(id: number) {
    const user = await this.repo.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return this.repo.remove(user);
  }
}
