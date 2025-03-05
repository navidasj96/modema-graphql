import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CampaignUefaEuroSubscriberHistories } from './CampaignUefaEuroSubscriberHistories';
import { CampaignUefaEuroSubscribers } from './CampaignUefaEuroSubscribers';
import { ContactFormHistories } from './ContactFormHistories';
import { ContactForms } from './ContactForms';

@Entity('contact_form_statuses', { schema: 'modema' })
export class ContactFormStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => CampaignUefaEuroSubscriberHistories,
    (campaignUefaEuroSubscriberHistories) =>
      campaignUefaEuroSubscriberHistories.contactFormStatus,
  )
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistories[];

  @OneToMany(
    () => CampaignUefaEuroSubscribers,
    (campaignUefaEuroSubscribers) =>
      campaignUefaEuroSubscribers.contactFormStatus,
  )
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscribers[];

  @OneToMany(
    () => ContactFormHistories,
    (contactFormHistories) => contactFormHistories.contactFormStatus,
  )
  contactFormHistories: ContactFormHistories[];

  @OneToMany(
    () => ContactForms,
    (contactForms) => contactForms.contactFormStatus,
  )
  contactForms: ContactForms[];
}
