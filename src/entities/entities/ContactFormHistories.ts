import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ContactForms } from "./ContactForms";
import { ContactFormStatuses } from "./ContactFormStatuses";
import { Users } from "./Users";

@Index("contact_form_histories_contact_form_id_index", ["contactFormId"], {})
@Index(
  "contact_form_histories_contact_form_status_id_index",
  ["contactFormStatusId"],
  {}
)
@Index("contact_form_histories_user_id_index", ["userId"], {})
@Entity("contact_form_histories", { schema: "mydatabase" })
export class ContactFormHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "contact_form_id", unsigned: true })
  contactFormId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "contact_form_status_id", unsigned: true })
  contactFormStatusId: number;

  @Column("varchar", { name: "comment", nullable: true, length: 191 })
  comment: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => ContactForms,
    (contactForms) => contactForms.contactFormHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "contact_form_id", referencedColumnName: "id" }])
  contactForm: ContactForms;

  @ManyToOne(
    () => ContactFormStatuses,
    (contactFormStatuses) => contactFormStatuses.contactFormHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "contact_form_status_id", referencedColumnName: "id" }])
  contactFormStatus: ContactFormStatuses;

  @ManyToOne(() => Users, (users) => users.contactFormHistories, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
