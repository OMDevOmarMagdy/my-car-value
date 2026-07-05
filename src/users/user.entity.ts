import {
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  insertLog() {
    console.log('After Inserting new user...', this.id);
  }

  @AfterUpdate()
  updateLog() {
    console.log('After Updating the user...', this.id);
  }

  @AfterRemove()
  removeLog() {
    console.log('After Removing the user...', this.id);
  }
}
