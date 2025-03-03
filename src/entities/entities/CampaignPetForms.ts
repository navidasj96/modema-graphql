import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Coupons } from "./Coupons";
import { Users } from "./Users";

@Index("campaign_pet_forms_coupon_id_index", ["couponId"], {})
@Index("campaign_pet_forms_user_id_index", ["userId"], {})
@Entity("campaign_pet_forms", { schema: "mydatabase" })
export class CampaignPetForms {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "pet_name", nullable: true, length: 191 })
  petName: string | null;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", {
    name: "discount_amount",
    unsigned: true,
    default: () => "'0'",
  })
  discountAmount: number;

  @Column("int", {
    name: "donation_amount",
    unsigned: true,
    default: () => "'0'",
  })
  donationAmount: number;

  @Column("varchar", {
    name: "path",
    nullable: true,
    length: 191,
    default: () => "'/'",
  })
  path: string | null;

  @Column("varchar", { name: "filename", nullable: true, length: 191 })
  filename: string | null;

  @Column("varchar", { name: "mime", nullable: true, length: 191 })
  mime: string | null;

  @Column("varchar", { name: "original_filename", nullable: true, length: 191 })
  originalFilename: string | null;

  @Column("int", { name: "coupon_id", nullable: true, unsigned: true })
  couponId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Coupons, (coupons) => coupons.campaignPetForms, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "coupon_id", referencedColumnName: "id" }])
  coupon: Coupons;

  @ManyToOne(() => Users, (users) => users.campaignPetForms, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
