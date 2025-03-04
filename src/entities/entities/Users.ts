import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Activities } from './Activities';
import { Addresses } from './Addresses';
import { AutomationEvents } from './AutomationEvents';
import { BasicCarpetDesigners } from './BasicCarpetDesigners';
import { CampaignGoldCoinSubs } from './CampaignGoldCoinSubs';
import { CampaignInstagramFollows } from './CampaignInstagramFollows';
import { CampaignPetForms } from './CampaignPetForms';
import { CampaignRoomvoImages } from './CampaignRoomvoImages';
import { CampaignRoomvoVotes } from './CampaignRoomvoVotes';
import { CampaignSubscriptions } from './CampaignSubscriptions';
import { CampaignUefaEuroSubscriberHistories } from './CampaignUefaEuroSubscriberHistories';
import { CampaignUefaEuroSubscribers } from './CampaignUefaEuroSubscribers';
import { CampaignVotingImageUsers } from './CampaignVotingImageUsers';
import { CarpetFeatureUser } from './CarpetFeatureUser';
import { CarpetUsagePlaceUser } from './CarpetUsagePlaceUser';
import { ContactFormHistories } from './ContactFormHistories';
import { ContactForms } from './ContactForms';
import { Coupons } from './Coupons';
import { CustomerRequests } from './CustomerRequests';
import { Designs } from './Designs';
import { DiscountNotifications } from './DiscountNotifications';
import { Discounts } from './Discounts';
import { ExitControls } from './ExitControls';
import { FavoriteProducts } from './FavoriteProducts';
import { GoogleFormUtms } from './GoogleFormUtms';
import { HelpDesks } from './HelpDesks';
import { Holidays } from './Holidays';
import { ImpersonateHistories } from './ImpersonateHistories';
import { IncredibleOfferSentNotifications } from './IncredibleOfferSentNotifications';
import { InvoiceAddresses } from './InvoiceAddresses';
import { InvoiceHistories } from './InvoiceHistories';
import { InvoiceInvoiceStatus } from './InvoiceInvoiceStatus';
import { InvoicePaymentHistories } from './InvoicePaymentHistories';
import { InvoicePayments } from './InvoicePayments';
import { InvoiceProductItemInvoiceProductStatus } from './InvoiceProductItemInvoiceProductStatus';
import { InvoiceReversals } from './InvoiceReversals';
import { Invoices } from './Invoices';
import { ModelVisits } from './ModelVisits';
import { NeedsPhotographySubproducts } from './NeedsPhotographySubproducts';
import { NegotiationHistories } from './NegotiationHistories';
import { NegotiationSteps } from './NegotiationSteps';
import { Negotiations } from './Negotiations';
import { PaymentRequests } from './PaymentRequests';
import { PreorderPreorderStatus } from './PreorderPreorderStatus';
import { PreorderRegisters } from './PreorderRegisters';
import { Preorders } from './Preorders';
import { PrintProfiles } from './PrintProfiles';
import { PrintRips } from './PrintRips';
import { ProductCommentLikes } from './ProductCommentLikes';
import { ProductComments } from './ProductComments';
import { ProductLikes } from './ProductLikes';
import { ProductRate } from './ProductRate';
import { ProductionPadProductionPadStatus } from './ProductionPadProductionPadStatus';
import { ProductionRolls } from './ProductionRolls';
import { RetargetingWalletCharges } from './RetargetingWalletCharges';
import { ReturnItemStatusReturnRequestItem } from './ReturnItemStatusReturnRequestItem';
import { ReturnRequestAddresses } from './ReturnRequestAddresses';
import { ReturnRequestHistories } from './ReturnRequestHistories';
import { ReturnRequestItemReturnItemStatus } from './ReturnRequestItemReturnItemStatus';
import { ReturnRequestReturnStatus } from './ReturnRequestReturnStatus';
import { ReturnRequests } from './ReturnRequests';
import { ReturnedInvoices } from './ReturnedInvoices';
import { RipTemplates } from './RipTemplates';
import { SocialFacebookAccounts } from './SocialFacebookAccounts';
import { SocialGoogleAccounts } from './SocialGoogleAccounts';
import { SubproductStockHistories } from './SubproductStockHistories';
import { Transactions } from './Transactions';
import { UserCarts } from './UserCarts';
import { UserUtm } from './UserUtm';
import { HeardAboutUsOptions } from './HeardAboutUsOptions';
import { InvitationCodes } from './InvitationCodes';
import { UtmGoogleFormCoupons } from './UtmGoogleFormCoupons';
import { VerifyUsers } from './VerifyUsers';
import { Visitors } from './Visitors';
import { WalletGiftCharges } from './WalletGiftCharges';
import { WalletHistories } from './WalletHistories';
import { Wallets } from './Wallets';
import { WithdrawalRequests } from './WithdrawalRequests';

@Index(
  'campaign_finding_coupon_winner_place',
  ['campaignFindingCouponWinnerPlace'],
  {},
)
@Index('login_email', ['loginEmail'], { unique: true })
@Index('login_email_2', ['loginEmail'], { unique: true })
@Index('sepidar_id', ['sepidarId'], {})
@Index('users_api_token_unique', ['apiToken'], { unique: true })
@Index(
  'users_campaign_finding_coupon_used_index',
  ['campaignFindingCouponUsed'],
  {},
)
@Index('users_campain_id_index', ['campaignId'], {})
@Index('users_email_unique', ['email'], { unique: true })
@Index('users_heard_about_us_option_id_index', ['heardAboutUsOptionId'], {})
@Index('users_invitation_code_id_index', ['invitationCodeId'], {})
@Index('users_lottery_code_unique', ['lotteryCode'], { unique: true })
@Index('users_mah_index', ['mah'], {})
@Index('users_phone_verified_by_index', ['phoneVerifiedBy'], {})
@Index('users_preorder_register_date_index', ['preorderRegisterDate'], {})
@Index('users_roz_index', ['roz'], {})
@Index('users_sal_index', ['sal'], {})
@Index('users_spinner_verification_code_unique', ['spinnerVerificationCode'], {
  unique: true,
})
@Index('users_username_unique', ['username'], { unique: true })
@Entity('users', { schema: 'modema' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191, default: () => "''" })
  name: string;

  @Column('varchar', { name: 'family', length: 191, default: () => "''" })
  family: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'os', nullable: true, length: 191 })
  os: string | null;

  @Column('varchar', { name: 'os_version', nullable: true, length: 191 })
  osVersion: string | null;

  @Column('varchar', {
    name: 'api_token',
    nullable: true,
    unique: true,
    length: 60,
  })
  apiToken: string | null;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code: string | null;

  @Column('tinyint', { name: 'status', default: () => "'1'" })
  status: number;

  @Column('varchar', {
    name: 'username',
    nullable: true,
    unique: true,
    length: 191,
  })
  username: string | null;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 191,
  })
  email: string | null;

  @Column('varchar', {
    name: 'login_email',
    nullable: true,
    unique: true,
    length: 191,
  })
  loginEmail: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 191 })
  password: string | null;

  @Column('tinyint', {
    name: 'is_guest',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  isGuest: number | null;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @Column('varchar', { name: 'profile_picture', nullable: true, length: 767 })
  profilePicture: string | null;

  @Column('varchar', { name: 'avatar', nullable: true, length: 191 })
  avatar: string | null;

  @Column('varchar', { name: 'national_id', nullable: true, length: 191 })
  nationalId: string | null;

  @Column('tinyint', { name: 'is_foreigner', width: 1, default: () => "'0'" })
  isForeigner: boolean;

  @Column('varchar', { name: 'atm_card_no', nullable: true, length: 191 })
  atmCardNo: string | null;

  @Column('varchar', { name: 'stripe_id', nullable: true, length: 191 })
  stripeId: string | null;

  @Column('tinyint', {
    name: 'email_verified',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  emailVerified: number | null;

  @Column('tinyint', {
    name: 'phone_verified',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  phoneVerified: number | null;

  @Column('varchar', { name: 'verification_code', nullable: true, length: 191 })
  verificationCode: string | null;

  @Column('varchar', { name: 'remember_token', nullable: true, length: 100 })
  rememberToken: string | null;

  @Column('int', { name: 'invitation_code_id', nullable: true, unsigned: true })
  invitationCodeId: number | null;

  @Column('tinyint', {
    name: 'is_preorder_applicant',
    width: 1,
    default: () => "'0'",
  })
  isPreorderApplicant: boolean;

  @Column('varchar', {
    name: 'spinner_verification_code',
    nullable: true,
    unique: true,
    length: 191,
  })
  spinnerVerificationCode: string | null;

  @Column('tinyint', {
    name: 'spinner_verified',
    width: 1,
    default: () => "'0'",
  })
  spinnerVerified: boolean;

  @Column('tinyint', {
    name: 'spinner_is_used',
    width: 1,
    default: () => "'0'",
  })
  spinnerIsUsed: boolean;

  @Column('tinyint', {
    name: 'is_password_changed',
    width: 1,
    default: () => "'0'",
  })
  isPasswordChanged: boolean;

  @Column('tinyint', {
    name: 'retargeting_is_used',
    comment:
      'This field for old retargeting campaign in year: 2020 changed to -1 for users that used this campaign(and this field was = 1 for them, so that they can participate in 2023 campaign again(if no invoices was submitted for them)',
    width: 1,
    default: () => "'0'",
  })
  retargetingIsUsed: boolean;

  @Column('datetime', {
    name: 'monthly_retargeting_start_date',
    nullable: true,
  })
  monthlyRetargetingStartDate: Date | null;

  @Column('tinyint', {
    name: 'children_coupon_is_used',
    width: 1,
    default: () => "'0'",
  })
  childrenCouponIsUsed: boolean;

  @Column('tinyint', {
    name: 'new_users_campaign_charged',
    width: 1,
    default: () => "'0'",
  })
  newUsersCampaignCharged: boolean;

  @Column('int', { name: 'campaign_id', nullable: true, unsigned: true })
  campaignId: number | null;

  @Column('varchar', {
    name: 'campaign_finding_coupon_code',
    nullable: true,
    length: 191,
  })
  campaignFindingCouponCode: string | null;

  @Column('varchar', {
    name: 'campaign_finding_coupon_hiding_place',
    nullable: true,
    length: 191,
  })
  campaignFindingCouponHidingPlace: string | null;

  @Column('tinyint', {
    name: 'campaign_finding_coupon_used',
    width: 1,
    default: () => "'0'",
  })
  campaignFindingCouponUsed: boolean;

  @Column('varchar', {
    name: 'campaign_finding_coupon_found_parts',
    length: 191,
    default: () => "'0-0-0-0'",
  })
  campaignFindingCouponFoundParts: string;

  @Column('int', {
    name: 'campaign_finding_coupon_winner_place',
    nullable: true,
  })
  campaignFindingCouponWinnerPlace: number | null;

  @Column('varchar', { name: 'temp', nullable: true, length: 191 })
  temp: string | null;

  @Column('varchar', { name: 'temp_name', length: 191 })
  tempName: string;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId: number | null;

  @Column('int', { name: 'sepidar_code', nullable: true })
  sepidarCode: number | null;

  @Column('int', {
    name: 'heard_about_us_option_id',
    nullable: true,
    unsigned: true,
  })
  heardAboutUsOptionId: number | null;

  @Column('int', { name: 'phone_verified_by', nullable: true, unsigned: true })
  phoneVerifiedBy: number | null;

  @Column('decimal', {
    name: 'comments_charged_amount',
    precision: 14,
    scale: 2,
    default: () => "'0.00'",
  })
  commentsChargedAmount: string;

  @Column('varchar', {
    name: 'campaign_cart_items',
    nullable: true,
    length: 191,
  })
  campaignCartItems: string | null;

  @Column('datetime', {
    name: 'campaign_cart_items_start_date',
    nullable: true,
  })
  campaignCartItemsStartDate: Date | null;

  @Column('varchar', {
    name: 'lottery_code',
    nullable: true,
    unique: true,
    length: 191,
  })
  lotteryCode: string | null;

  @Column('int', { name: 'hafez_poem_count', default: () => "'0'" })
  hafezPoemCount: number;

  @Column('tinyint', { name: 'preorder_paid', width: 1, default: () => "'0'" })
  preorderPaid: boolean;

  @Column('datetime', { name: 'preorder_register_date', nullable: true })
  preorderRegisterDate: Date | null;

  @Column('date', { name: 'preorder_turn_start_date', nullable: true })
  preorderTurnStartDate: string | null;

  @Column('date', { name: 'preorder_turn_end_date', nullable: true })
  preorderTurnEndDate: string | null;

  @Column('smallint', { name: 'sal', nullable: true, unsigned: true })
  sal: number | null;

  @Column('tinyint', { name: 'mah', nullable: true, unsigned: true })
  mah: number | null;

  @Column('tinyint', { name: 'roz', nullable: true, unsigned: true })
  roz: number | null;

  @Column('datetime', {
    name: 'discount_notification_sent_date',
    nullable: true,
  })
  discountNotificationSentDate: Date | null;

  @OneToMany(() => Activities, (activities) => activities.user)
  activities: Activities[];

  @OneToMany(() => Addresses, (addresses) => addresses.user)
  addresses: Addresses[];

  @OneToMany(
    () => AutomationEvents,
    (automationEvents) => automationEvents.user,
  )
  automationEvents: AutomationEvents[];

  @OneToMany(
    () => BasicCarpetDesigners,
    (basicCarpetDesigners) => basicCarpetDesigners.user,
  )
  basicCarpetDesigners: BasicCarpetDesigners[];

  @OneToOne(
    () => CampaignGoldCoinSubs,
    (campaignGoldCoinSubs) => campaignGoldCoinSubs.user,
  )
  campaignGoldCoinSubs: CampaignGoldCoinSubs;

  @OneToMany(
    () => CampaignInstagramFollows,
    (campaignInstagramFollows) => campaignInstagramFollows.user,
  )
  campaignInstagramFollows: CampaignInstagramFollows[];

  @OneToMany(
    () => CampaignPetForms,
    (campaignPetForms) => campaignPetForms.user,
  )
  campaignPetForms: CampaignPetForms[];

  @OneToMany(
    () => CampaignRoomvoImages,
    (campaignRoomvoImages) => campaignRoomvoImages.user,
  )
  campaignRoomvoImages: CampaignRoomvoImages[];

  @OneToMany(
    () => CampaignRoomvoVotes,
    (campaignRoomvoVotes) => campaignRoomvoVotes.user,
  )
  campaignRoomvoVotes: CampaignRoomvoVotes[];

  @OneToMany(
    () => CampaignSubscriptions,
    (campaignSubscriptions) => campaignSubscriptions.user,
  )
  campaignSubscriptions: CampaignSubscriptions[];

  @OneToMany(
    () => CampaignUefaEuroSubscriberHistories,
    (campaignUefaEuroSubscriberHistories) =>
      campaignUefaEuroSubscriberHistories.user,
  )
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistories[];

  @OneToMany(
    () => CampaignUefaEuroSubscribers,
    (campaignUefaEuroSubscribers) => campaignUefaEuroSubscribers.user,
  )
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscribers[];

  @OneToMany(
    () => CampaignVotingImageUsers,
    (campaignVotingImageUsers) => campaignVotingImageUsers.user,
  )
  campaignVotingImageUsers: CampaignVotingImageUsers[];

  @OneToMany(
    () => CarpetFeatureUser,
    (carpetFeatureUser) => carpetFeatureUser.user,
  )
  carpetFeatureUsers: CarpetFeatureUser[];

  @OneToMany(
    () => CarpetUsagePlaceUser,
    (carpetUsagePlaceUser) => carpetUsagePlaceUser.user,
  )
  carpetUsagePlaceUsers: CarpetUsagePlaceUser[];

  @OneToMany(
    () => ContactFormHistories,
    (contactFormHistories) => contactFormHistories.user,
  )
  contactFormHistories: ContactFormHistories[];

  @OneToMany(() => ContactForms, (contactForms) => contactForms.user)
  contactForms: ContactForms[];

  @OneToMany(() => Coupons, (coupons) => coupons.createdBy2)
  coupons: Coupons[];

  @OneToMany(() => Coupons, (coupons) => coupons.retargetingUser)
  coupons2: Coupons[];

  @OneToMany(() => Coupons, (coupons) => coupons.updatedBy2)
  coupons3: Coupons[];

  @OneToMany(() => Coupons, (coupons) => coupons.user)
  coupons4: Coupons[];

  @OneToMany(
    () => CustomerRequests,
    (customerRequests) => customerRequests.user,
  )
  customerRequests: CustomerRequests[];

  @OneToMany(() => Designs, (designs) => designs.user)
  designs: Designs[];

  @OneToMany(
    () => DiscountNotifications,
    (discountNotifications) => discountNotifications.user,
  )
  discountNotifications: DiscountNotifications[];

  @OneToMany(() => Discounts, (discounts) => discounts.createdBy2)
  discounts: Discounts[];

  @OneToMany(() => Discounts, (discounts) => discounts.updatedBy2)
  discounts2: Discounts[];

  @OneToMany(() => ExitControls, (exitControls) => exitControls.user)
  exitControls: ExitControls[];

  @OneToMany(
    () => FavoriteProducts,
    (favoriteProducts) => favoriteProducts.user,
  )
  favoriteProducts: FavoriteProducts[];

  @OneToMany(() => GoogleFormUtms, (googleFormUtms) => googleFormUtms.user)
  googleFormUtms: GoogleFormUtms[];

  @OneToOne(() => HelpDesks, (helpDesks) => helpDesks.user)
  helpDesks: HelpDesks;

  @OneToMany(() => Holidays, (holidays) => holidays.user)
  holidays: Holidays[];

  @OneToMany(
    () => ImpersonateHistories,
    (impersonateHistories) => impersonateHistories.impersonateUser,
  )
  impersonateHistories: ImpersonateHistories[];

  @OneToMany(
    () => ImpersonateHistories,
    (impersonateHistories) => impersonateHistories.user,
  )
  impersonateHistories2: ImpersonateHistories[];

  @OneToMany(
    () => IncredibleOfferSentNotifications,
    (incredibleOfferSentNotifications) => incredibleOfferSentNotifications.user,
  )
  incredibleOfferSentNotifications: IncredibleOfferSentNotifications[];

  @OneToMany(
    () => InvoiceAddresses,
    (invoiceAddresses) => invoiceAddresses.user,
  )
  invoiceAddresses: InvoiceAddresses[];

  @OneToMany(
    () => InvoiceHistories,
    (invoiceHistories) => invoiceHistories.editorUser,
  )
  invoiceHistories: InvoiceHistories[];

  @OneToMany(
    () => InvoiceInvoiceStatus,
    (invoiceInvoiceStatus) => invoiceInvoiceStatus.user,
  )
  invoiceInvoiceStatuses: InvoiceInvoiceStatus[];

  @OneToMany(
    () => InvoicePaymentHistories,
    (invoicePaymentHistories) => invoicePaymentHistories.confirmedBy2,
  )
  invoicePaymentHistories: InvoicePaymentHistories[];

  @OneToMany(
    () => InvoicePaymentHistories,
    (invoicePaymentHistories) => invoicePaymentHistories.user,
  )
  invoicePaymentHistories2: InvoicePaymentHistories[];

  @OneToMany(
    () => InvoicePayments,
    (invoicePayments) => invoicePayments.confirmedBy2,
  )
  invoicePayments: InvoicePayments[];

  @OneToMany(() => InvoicePayments, (invoicePayments) => invoicePayments.user)
  invoicePayments2: InvoicePayments[];

  @OneToMany(
    () => InvoiceProductItemInvoiceProductStatus,
    (invoiceProductItemInvoiceProductStatus) =>
      invoiceProductItemInvoiceProductStatus.user,
  )
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatus[];

  @OneToMany(
    () => InvoiceReversals,
    (invoiceReversals) => invoiceReversals.reviewedBy2,
  )
  invoiceReversals: InvoiceReversals[];

  @OneToMany(() => Invoices, (invoices) => invoices.moneyTransferConfirmedBy2)
  invoices: Invoices[];

  @OneToMany(() => Invoices, (invoices) => invoices.user)
  invoices2: Invoices[];

  @OneToMany(() => ModelVisits, (modelVisits) => modelVisits.user)
  modelVisits: ModelVisits[];

  @OneToMany(
    () => NeedsPhotographySubproducts,
    (needsPhotographySubproducts) => needsPhotographySubproducts.announcedUser,
  )
  needsPhotographySubproducts: NeedsPhotographySubproducts[];

  @OneToMany(
    () => NeedsPhotographySubproducts,
    (needsPhotographySubproducts) =>
      needsPhotographySubproducts.photographyUser,
  )
  needsPhotographySubproducts2: NeedsPhotographySubproducts[];

  @OneToMany(
    () => NegotiationHistories,
    (negotiationHistories) => negotiationHistories.newNegotiator,
  )
  negotiationHistories: NegotiationHistories[];

  @OneToMany(
    () => NegotiationHistories,
    (negotiationHistories) => negotiationHistories.oldNegotiator,
  )
  negotiationHistories2: NegotiationHistories[];

  @OneToMany(
    () => NegotiationHistories,
    (negotiationHistories) => negotiationHistories.submittedBy2,
  )
  negotiationHistories3: NegotiationHistories[];

  @OneToMany(
    () => NegotiationSteps,
    (negotiationSteps) => negotiationSteps.submittedBy2,
  )
  negotiationSteps: NegotiationSteps[];

  @OneToMany(() => Negotiations, (negotiations) => negotiations.negotiator)
  negotiations: Negotiations[];

  @OneToMany(() => Negotiations, (negotiations) => negotiations.submittedBy2)
  negotiations2: Negotiations[];

  @OneToMany(
    () => PaymentRequests,
    (paymentRequests) => paymentRequests.adminUser,
  )
  paymentRequests: PaymentRequests[];

  @OneToMany(
    () => PreorderPreorderStatus,
    (preorderPreorderStatus) => preorderPreorderStatus.user,
  )
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @OneToMany(
    () => PreorderRegisters,
    (preorderRegisters) => preorderRegisters.moneyTransferConfirmedBy2,
  )
  preorderRegisters: PreorderRegisters[];

  @OneToMany(
    () => PreorderRegisters,
    (preorderRegisters) => preorderRegisters.user,
  )
  preorderRegisters2: PreorderRegisters[];

  @OneToMany(() => Preorders, (preorders) => preorders.assignedUser)
  preorders: Preorders[];

  @OneToMany(() => Preorders, (preorders) => preorders.salesPerson)
  preorders2: Preorders[];

  @OneToMany(() => Preorders, (preorders) => preorders.user)
  preorders3: Preorders[];

  @OneToMany(() => PrintProfiles, (printProfiles) => printProfiles.createdBy2)
  printProfiles: PrintProfiles[];

  @OneToMany(() => PrintProfiles, (printProfiles) => printProfiles.updatedBy2)
  printProfiles2: PrintProfiles[];

  @OneToMany(() => PrintRips, (printRips) => printRips.user)
  printRips: PrintRips[];

  @OneToMany(
    () => ProductCommentLikes,
    (productCommentLikes) => productCommentLikes.user,
  )
  productCommentLikes: ProductCommentLikes[];

  @OneToMany(
    () => ProductComments,
    (productComments) => productComments.approvedBy2,
  )
  productComments: ProductComments[];

  @OneToMany(() => ProductComments, (productComments) => productComments.user)
  productComments2: ProductComments[];

  @OneToMany(() => ProductLikes, (productLikes) => productLikes.user)
  productLikes: ProductLikes[];

  @OneToMany(() => ProductRate, (productRate) => productRate.user)
  productRates: ProductRate[];

  @OneToMany(
    () => ProductionPadProductionPadStatus,
    (productionPadProductionPadStatus) => productionPadProductionPadStatus.user,
  )
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @OneToMany(
    () => ProductionRolls,
    (productionRolls) => productionRolls.closedBy2,
  )
  productionRolls: ProductionRolls[];

  @OneToMany(
    () => ProductionRolls,
    (productionRolls) => productionRolls.createdBy2,
  )
  productionRolls2: ProductionRolls[];

  @OneToMany(
    () => RetargetingWalletCharges,
    (retargetingWalletCharges) => retargetingWalletCharges.user,
  )
  retargetingWalletCharges: RetargetingWalletCharges[];

  @OneToMany(
    () => ReturnItemStatusReturnRequestItem,
    (returnItemStatusReturnRequestItem) =>
      returnItemStatusReturnRequestItem.user,
  )
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItem[];

  @OneToMany(
    () => ReturnRequestAddresses,
    (returnRequestAddresses) => returnRequestAddresses.user,
  )
  returnRequestAddresses: ReturnRequestAddresses[];

  @OneToMany(
    () => ReturnRequestHistories,
    (returnRequestHistories) => returnRequestHistories.editorUser,
  )
  returnRequestHistories: ReturnRequestHistories[];

  @OneToMany(
    () => ReturnRequestHistories,
    (returnRequestHistories) => returnRequestHistories.user,
  )
  returnRequestHistories2: ReturnRequestHistories[];

  @OneToMany(
    () => ReturnRequestItemReturnItemStatus,
    (returnRequestItemReturnItemStatus) =>
      returnRequestItemReturnItemStatus.user,
  )
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatus[];

  @OneToMany(
    () => ReturnRequestReturnStatus,
    (returnRequestReturnStatus) => returnRequestReturnStatus.user,
  )
  returnRequestReturnStatuses: ReturnRequestReturnStatus[];

  @OneToMany(() => ReturnRequests, (returnRequests) => returnRequests.user)
  returnRequests: ReturnRequests[];

  @OneToMany(
    () => ReturnedInvoices,
    (returnedInvoices) => returnedInvoices.user,
  )
  returnedInvoices: ReturnedInvoices[];

  @OneToMany(() => RipTemplates, (ripTemplates) => ripTemplates.user)
  ripTemplates: RipTemplates[];

  @OneToMany(
    () => SocialFacebookAccounts,
    (socialFacebookAccounts) => socialFacebookAccounts.user,
  )
  socialFacebookAccounts: SocialFacebookAccounts[];

  @OneToMany(
    () => SocialGoogleAccounts,
    (socialGoogleAccounts) => socialGoogleAccounts.user,
  )
  socialGoogleAccounts: SocialGoogleAccounts[];

  @OneToMany(
    () => SubproductStockHistories,
    (subproductStockHistories) => subproductStockHistories.user,
  )
  subproductStockHistories: SubproductStockHistories[];

  @OneToMany(() => Transactions, (transactions) => transactions.approvedBy2)
  transactions: Transactions[];

  @OneToMany(() => Transactions, (transactions) => transactions.user)
  transactions2: Transactions[];

  @OneToMany(() => UserCarts, (userCarts) => userCarts.user)
  userCarts: UserCarts[];

  @OneToMany(() => UserUtm, (userUtm) => userUtm.user)
  userUtms: UserUtm[];

  @ManyToOne(
    () => HeardAboutUsOptions,
    (heardAboutUsOptions) => heardAboutUsOptions.users,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' },
  )
  @JoinColumn([
    { name: 'heard_about_us_option_id', referencedColumnName: 'id' },
  ])
  heardAboutUsOption: HeardAboutUsOptions;

  @ManyToOne(
    () => InvitationCodes,
    (invitationCodes) => invitationCodes.users,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'invitation_code_id', referencedColumnName: 'id' }])
  invitationCode: InvitationCodes;

  @ManyToOne(() => Users, (users) => users.users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'phone_verified_by', referencedColumnName: 'id' }])
  phoneVerifiedBy2: Users;

  @OneToMany(() => Users, (users) => users.phoneVerifiedBy2)
  users: Users[];

  @OneToMany(
    () => UtmGoogleFormCoupons,
    (utmGoogleFormCoupons) => utmGoogleFormCoupons.user,
  )
  utmGoogleFormCoupons: UtmGoogleFormCoupons[];

  @OneToMany(() => VerifyUsers, (verifyUsers) => verifyUsers.user)
  verifyUsers: VerifyUsers[];

  @OneToMany(() => Visitors, (visitors) => visitors.user)
  visitors: Visitors[];

  @OneToMany(
    () => WalletGiftCharges,
    (walletGiftCharges) => walletGiftCharges.user,
  )
  walletGiftCharges: WalletGiftCharges[];

  @OneToMany(
    () => WalletHistories,
    (walletHistories) => walletHistories.createdBy2,
  )
  walletHistories: WalletHistories[];

  @OneToOne(() => Wallets, (wallets) => wallets.user)
  wallets: Wallets;

  @OneToMany(
    () => WithdrawalRequests,
    (withdrawalRequests) => withdrawalRequests.confirmedBy2,
  )
  withdrawalRequests: WithdrawalRequests[];

  @OneToMany(
    () => WithdrawalRequests,
    (withdrawalRequests) => withdrawalRequests.user,
  )
  withdrawalRequests2: WithdrawalRequests[];
}
