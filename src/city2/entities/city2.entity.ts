import { Column, Entity } from 'typeorm';

@Entity('cities2', { schema: 'modema' })
export class City2 {
  @Column('int', { name: 'id', nullable: true })
  id?: number;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;
}
