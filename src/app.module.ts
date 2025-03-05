import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ActivitiesModule } from './activities/activities.module';
import { AttributeAttributeGroupModule } from './attribute-attribute-group/attribute-attribute-group.module';
import { AttributeGroupsModule } from './attribute-groups/attribute-groups.module';
import { AttributeItemsModule } from './attribute-items/attribute-items.module';
import { AttributeProductModule } from './attribute-product/attribute-product.module';
import { AttributesModule } from './attributes/attributes.module';
import { AddressModule } from './address/address.module';
import { AttributeGroupModule } from './attribute-group/attribute-group.module';
import { AttributeItemModule } from './attribute-item/attribute-item.module';
import { AttributeModule } from './attribute/attribute.module';
import { AttributeSubproductModule } from './attribute-subproduct/attribute-subproduct.module';
import { AutomationEventModule } from './automation-event/automation-event.module';
import { AutomationRfmScoreModule } from './automation-rfm-score/automation-rfm-score.module';
import { BasicCarpetBorderModule } from './basic-carpet-border/basic-carpet-border.module';
import { BasicCarpetBrandModule } from './basic-carpet-brand/basic-carpet-brand.module';
import { BasicCarpetColorModule } from './basic-carpet-color/basic-carpet-color.module';
import { BasicCarpetDesignerModule } from './basic-carpet-designer/basic-carpet-designer.module';
import { BasicCarpetMaterialModule } from './basic-carpet-material/basic-carpet-material.module';
import { BasicCarpetSizeDetailModule } from './basic-carpet-size-detail/basic-carpet-size-detail.module';
import { BasicCarpetSizeModule } from './basic-carpet-size/basic-carpet-size.module';
import { BasicCarpetTypeModule } from './basic-carpet-type/basic-carpet-type.module';
import { BorderModule } from './border/border.module';
import { CampaignFreeOfferModule } from './campaign-free-offer/campaign-free-offer.module';
import { CampaignFreeOfferSizeModule } from './campaign-free-offer-size/campaign-free-offer-size.module';
import { CampaignGoldCoinSubModule } from './campaign-gold-coin-sub/campaign-gold-coin-sub.module';
import { CampaignInstagramFollowModule } from './campaign-instagram-follow/campaign-instagram-follow.module';
import { CampaignPetFormModule } from './campaign-pet-form/campaign-pet-form.module';
import { CampaignRoomvoImageModule } from './campaign-roomvo-image/campaign-roomvo-image.module';
import { CampaignRoomvoVoteModule } from './campaign-roomvo-vote/campaign-roomvo-vote.module';
import { CampaignSubscriptionModule } from './campaign-subscription/campaign-subscription.module';
import { CampaignUefaEuroSubscriberHistorieModule } from './campaign-uefa-euro-subscriber-historie/campaign-uefa-euro-subscriber-historie.module';
import { CampaignUefaEuroSubscriberModule } from './campaign-uefa-euro-subscriber/campaign-uefa-euro-subscriber.module';
import { CampaignVotingImageModule } from './campaign-voting-image/campaign-voting-image.module';
import { CampaignVotingImageUserModule } from './campaign-voting-image-user/campaign-voting-image-user.module';
import { CarpetFeatureModule } from './carpet-feature/carpet-feature.module';
import { CarpetFeatureUserModule } from './carpet-feature-user/carpet-feature-user.module';
import { CarpetMaterialModule } from './carpet-material/carpet-material.module';
import { CarpetShapeModule } from './carpet-shape/carpet-shape.module';
import { CarpetSizeModule } from './carpet-size/carpet-size.module';
import { CarpetUsagePlaceInvoiceProductModule } from './carpet-usage-place-invoice-product/carpet-usage-place-invoice-product.module';
import { CarpetUsagePlaceModule } from './carpet-usage-place/carpet-usage-place.module';
import { CarpetUsagePlaceUserModule } from './carpet-usage-place-user/carpet-usage-place-user.module';
import { ChaparSettlementStatuseModule } from './chapar-settlement-statuse/chapar-settlement-statuse.module';
import { ChaparSettlementStatusModule } from './chapar-settlement-status/chapar-settlement-status.module';
import { ChaparTrackingHistorieModule } from './chapar-tracking-historie/chapar-tracking-historie.module';
import { ChaparTrackingHistoryModule } from './chapar-tracking-history/chapar-tracking-history.module';
import { CityModule } from './city/city.module';
import { City2Module } from './city2/city2.module';
import { CitiesSepidarModule } from './cities-sepidar/cities-sepidar.module';
import { ColorCategoryModule } from './color-category/color-category.module';
import { ColorCategorySubproductModule } from './color-category-subproduct/color-category-subproduct.module';
import { ColorModule } from './color/color.module';
import { ConfigModule } from './config/config.module';
import { ContactFormHistoryModule } from './contact-form-history/contact-form-history.module';
import { ContactFormModule } from './contact-form/contact-form.module';
import { ContactFormStatusModule } from './contact-form-status/contact-form-status.module';
import { CountryModule } from './country/country.module';
import { CouponModule } from './coupon/coupon.module';
import { CouponSubjectModule } from './coupon-subject/coupon-subject.module';
import { CrmPresentationModule } from './crm-presentation/crm-presentation.module';
import { CustomerImageProductModule } from './customer-image-product/customer-image-product.module';
import { CustomerRequestFileModule } from './customer-request-file/customer-request-file.module';
import { CustomerRequestModule } from './customer-request/customer-request.module';
import { CustomerVideoProductModule } from './customer-video-product/customer-video-product.module';
import { DamageReasonModule } from './damage-reason/damage-reason.module';
import { DepartmentModule } from './department/department.module';
import { DesignersProductPriceRangeModule } from './designers-product-price-range/designers-product-price-range.module';
import { DesignModule } from './design/design.module';
import { DiscountNotificationModule } from './discount-notification/discount-notification.module';
import { DiscountModule } from './discount/discount.module';
import { DiscountSubjectModule } from './discount-subject/discount-subject.module';
import { ExitControlItemModule } from './exit-control-item/exit-control-item.module';
import { ExitControlModule } from './exit-control/exit-control.module';
import { ExportProductModule } from './export-product/export-product.module';
import { FailedJobModule } from './failed-job/failed-job.module';
import { FavoriteProductModule } from './favorite-product/favorite-product.module';
import { FedexAddressValidationAttributeModule } from './fedex-address-validation-attribute/fedex-address-validation-attribute.module';
import { FetchSiteUrlModule } from './fetch-site-url/fetch-site-url.module';
import { FileNegotiationModule } from './file-negotiation/file-negotiation.module';
import { FileModule } from './file/file.module';
import { GhazalModule } from './ghazal/ghazal.module';
import { GoogleFormUtmModule } from './google-form-utm/google-form-utm.module';
import { HeardAboutUsOptionModule } from './heard-about-us-option/heard-about-us-option.module';
import { HelpDeskModule } from './help-desk/help-desk.module';
import { HolidayModule } from './holiday/holiday.module';
import { HomePageCustomerImageModule } from './home-page-customer-image/home-page-customer-image.module';
import { HyperModule } from './hyper/hyper.module';
import { HyperstarCodeModule } from './hyperstar-code/hyperstar-code.module';
import { ImageLayerModule } from './image-layer/image-layer.module';
import { ImageProductModule } from './image-product/image-product.module';
import { ImageModule } from './image/image.module';
import { ImageSizeModule } from './image-size/image-size.module';
import { ImagesSizeGuidesDetailModule } from './images-size-guides-detail/images-size-guides-detail.module';
import { ImageSubproductModule } from './image-subproduct/image-subproduct.module';
import { ImpersonateHistoryModule } from './impersonate-history/impersonate-history.module';
import { IncredibleOfferModule } from './incredible-offer/incredible-offer.module';
import { IncredibleOfferSentNotificationModule } from './incredible-offer-sent-notification/incredible-offer-sent-notification.module';
import { InstagramFeedModule } from './instagram-feed/instagram-feed.module';
import { InvitationCodeModule } from './invitation-code/invitation-code.module';
import { InvoiceAddressModule } from './invoice-address/invoice-address.module';
import { InvoiceAddressValidationResultModule } from './invoice-address-validation-result/invoice-address-validation-result.module';
import { InvoiceBankGatewayHistoryModule } from './invoice-bank-gateway-history/invoice-bank-gateway-history.module';
import { InvoiceHistoryModule } from './invoice-history/invoice-history.module';
import { InvoiceInvoiceStatusModule } from './invoice-invoice-status/invoice-invoice-status.module';
import { InvoiceModeModule } from './invoice-mode/invoice-mode.module';
import { InvoiceNegotiationModule } from './invoice-negotiation/invoice-negotiation.module';
import { InvoicePaymentHistoryModule } from './invoice-payment-history/invoice-payment-history.module';
import { InvoicePaymentModule } from './invoice-payment/invoice-payment.module';
import { InvoicePaymentStatusModule } from './invoice-payment-status/invoice-payment-status.module';
import { InvoicePaymentTypeModule } from './invoice-payment-type/invoice-payment-type.module';
import { InvoiceProductItemInvoiceProductStatusModule } from './invoice-product-item-invoice-product-status/invoice-product-item-invoice-product-status.module';
import { InvoiceProductItemModule } from './invoice-product-item/invoice-product-item.module';
import { InvoiceProductModule } from './invoice-product/invoice-product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'mydatabse',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      debug: true,
      sortSchema: true,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ActivitiesModule,
    AttributeAttributeGroupModule,
    AttributeGroupsModule,
    AttributeItemsModule,
    AttributeProductModule,
    AttributesModule,
    AddressModule,
    AttributeGroupModule,
    AttributeItemModule,
    AttributeModule,
    AttributeSubproductModule,
    AutomationEventModule,
    AutomationRfmScoreModule,
    BasicCarpetBorderModule,
    BasicCarpetBrandModule,
    BasicCarpetColorModule,
    BasicCarpetDesignerModule,
    BasicCarpetMaterialModule,
    BasicCarpetSizeDetailModule,
    BasicCarpetSizeModule,
    BasicCarpetTypeModule,
    BorderModule,
    CampaignFreeOfferModule,
    CampaignFreeOfferSizeModule,
    CampaignGoldCoinSubModule,
    CampaignInstagramFollowModule,
    CampaignPetFormModule,
    CampaignRoomvoImageModule,
    CampaignRoomvoVoteModule,
    CampaignSubscriptionModule,
    CampaignUefaEuroSubscriberHistorieModule,
    CampaignUefaEuroSubscriberModule,
    CampaignVotingImageModule,
    CampaignVotingImageUserModule,
    CarpetFeatureModule,
    CarpetFeatureUserModule,
    CarpetMaterialModule,
    CarpetShapeModule,
    CarpetSizeModule,
    CarpetUsagePlaceInvoiceProductModule,
    CarpetUsagePlaceModule,
    CarpetUsagePlaceUserModule,
    ChaparSettlementStatuseModule,
    ChaparSettlementStatusModule,
    ChaparTrackingHistorieModule,
    ChaparTrackingHistoryModule,
    CityModule,
    City2Module,
    CitiesSepidarModule,
    ColorCategoryModule,
    ColorCategorySubproductModule,
    ColorModule,
    ConfigModule,
    ContactFormHistoryModule,
    ContactFormModule,
    ContactFormStatusModule,
    CountryModule,
    CouponModule,
    CouponSubjectModule,
    CrmPresentationModule,
    CustomerImageProductModule,
    CustomerRequestFileModule,
    CustomerRequestModule,
    CustomerVideoProductModule,
    DamageReasonModule,
    DepartmentModule,
    DesignersProductPriceRangeModule,
    DesignModule,
    DiscountNotificationModule,
    DiscountModule,
    DiscountSubjectModule,
    ExitControlItemModule,
    ExitControlModule,
    ExportProductModule,
    FailedJobModule,
    FavoriteProductModule,
    FedexAddressValidationAttributeModule,
    FetchSiteUrlModule,
    FileNegotiationModule,
    FileModule,
    GhazalModule,
    GoogleFormUtmModule,
    HeardAboutUsOptionModule,
    HelpDeskModule,
    HolidayModule,
    HomePageCustomerImageModule,
    HyperModule,
    HyperstarCodeModule,
    ImageLayerModule,
    ImageProductModule,
    ImageModule,
    ImageSizeModule,
    ImagesSizeGuidesDetailModule,
    ImageSubproductModule,
    ImpersonateHistoryModule,
    IncredibleOfferModule,
    IncredibleOfferSentNotificationModule,
    InstagramFeedModule,
    InvitationCodeModule,
    InvoiceAddressModule,
    InvoiceAddressValidationResultModule,
    InvoiceBankGatewayHistoryModule,
    InvoiceHistoryModule,
    InvoiceInvoiceStatusModule,
    InvoiceModeModule,
    InvoiceNegotiationModule,
    InvoicePaymentHistoryModule,
    InvoicePaymentModule,
    InvoicePaymentStatusModule,
    InvoicePaymentTypeModule,
    InvoiceProductItemInvoiceProductStatusModule,
    InvoiceProductItemModule,
    InvoiceProductModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
