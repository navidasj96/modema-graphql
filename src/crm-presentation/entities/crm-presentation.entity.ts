import { Column, Entity } from 'typeorm';

@Entity('crm_presentation', { schema: 'modema' })
export class CrmPresentation {
  @Column('varchar', { name: 'mobile', nullable: true, length: 15 })
  mobile?: string;

  @Column('int', { name: 'option_id', nullable: true })
  optionId?: number;
}
