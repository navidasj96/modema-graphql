import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RetargetingWalletCharges } from "./RetargetingWalletCharges";
import { WalletGiftCharges } from "./WalletGiftCharges";
import { WalletHistories } from "./WalletHistories";
import { Users } from "./Users";

@Index("wallets_user_id_index", ["userId"], { unique: true })
@Entity("wallets", { schema: "mydatabase" })
export class Wallets {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unique: true, unsigned: true })
  userId: number;

  @Column("decimal", {
    name: "modema_blocked",
    comment: "only usable by modema personnel",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  modemaBlocked: string;

  @Column("decimal", {
    name: "user_blocked",
    comment: "usable by user for purchase only",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  userBlocked: string;

  @Column("decimal", {
    name: "withdrawable",
    comment: "usable by user for purchase or withdrawal",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawable: string;

  @Column("tinyint", {
    name: "not_usable_for_low_total_prices",
    width: 1,
    default: () => "'0'",
  })
  notUsableForLowTotalPrices: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => RetargetingWalletCharges,
    (retargetingWalletCharges) => retargetingWalletCharges.wallet
  )
  retargetingWalletCharges: RetargetingWalletCharges[];

  @OneToMany(
    () => WalletGiftCharges,
    (walletGiftCharges) => walletGiftCharges.wallet
  )
  walletGiftCharges: WalletGiftCharges[];

  @OneToMany(() => WalletHistories, (walletHistories) => walletHistories.wallet)
  walletHistories: WalletHistories[];

  @OneToOne(() => Users, (users) => users.wallets, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
