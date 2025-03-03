import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Wallets } from "./Wallets";

@Index("retargeting_wallet_charges_user_id_index", ["userId"], {})
@Index("retargeting_wallet_charges_wallet_id_index", ["walletId"], {})
@Entity("retargeting_wallet_charges", { schema: "mydatabase" })
export class RetargetingWalletCharges {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "wallet_id", nullable: true, unsigned: true })
  walletId: number | null;

  @Column("decimal", {
    name: "amount",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string;

  @Column("datetime", { name: "last_charged_at", nullable: true })
  lastChargedAt: Date | null;

  @Column("varchar", { name: "charged_invoices", nullable: true, length: 191 })
  chargedInvoices: string | null;

  @ManyToOne(() => Users, (users) => users.retargetingWalletCharges, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Wallets, (wallets) => wallets.retargetingWalletCharges, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "wallet_id", referencedColumnName: "id" }])
  wallet: Wallets;
}
