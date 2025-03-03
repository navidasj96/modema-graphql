import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { ContactFormStatuses } from "./ContactFormStatuses";
import { CampaignUefaEuroSubscribers } from "./CampaignUefaEuroSubscribers";

@Index("campaign_uefa_euro_subscriber_histories_user_id_index", ["userId"], {})
@Index("idx_histories_statuses", ["contactFormStatusId"], {})
@Index("idx_histories_subscribers", ["campaignUefaEuroSubscriberId"], {})
@Entity("campaign_uefa_euro_subscriber_histories", { schema: "mydatabase" })
export class CampaignUefaEuroSubscriberHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "campaign_uefa_euro_subscriber_id", unsigned: true })
  campaignUefaEuroSubscriberId: number;

  @Column("int", { name: "user_id", nullable: true, unsigned: true })
  userId: number | null;

  @Column("int", { name: "contact_form_status_id", unsigned: true })
  contactFormStatusId: number;

  @Column("varchar", { name: "comment", nullable: true, length: 191 })
  comment: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => Users,
    (users) => users.campaignUefaEuroSubscriberHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(
    () => ContactFormStatuses,
    (contactFormStatuses) =>
      contactFormStatuses.campaignUefaEuroSubscriberHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "contact_form_status_id", referencedColumnName: "id" }])
  contactFormStatus: ContactFormStatuses;

  @ManyToOne(
    () => CampaignUefaEuroSubscribers,
    (campaignUefaEuroSubscribers) =>
      campaignUefaEuroSubscribers.campaignUefaEuroSubscriberHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "campaign_uefa_euro_subscriber_id", referencedColumnName: "id" },
  ])
  campaignUefaEuroSubscriber: CampaignUefaEuroSubscribers;
}
