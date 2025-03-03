import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetSizes } from "./BasicCarpetSizes";
import { CampaignFreeOffers } from "./CampaignFreeOffers";

@Index(
  "campaign_free_offer_sizes_basic_carpet_size_id_index",
  ["basicCarpetSizeId"],
  {}
)
@Index(
  "campaign_free_offer_sizes_campaign_free_offer_id_index",
  ["campaignFreeOfferId"],
  {}
)
@Entity("campaign_free_offer_sizes", { schema: "mydatabase" })
export class CampaignFreeOfferSizes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "campaign_free_offer_id", unsigned: true })
  campaignFreeOfferId: number;

  @Column("int", { name: "basic_carpet_size_id", unsigned: true })
  basicCarpetSizeId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.campaignFreeOfferSizes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_size_id", referencedColumnName: "id" }])
  basicCarpetSize: BasicCarpetSizes;

  @ManyToOne(
    () => CampaignFreeOffers,
    (campaignFreeOffers) => campaignFreeOffers.campaignFreeOfferSizes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "campaign_free_offer_id", referencedColumnName: "id" }])
  campaignFreeOffer: CampaignFreeOffers;
}
