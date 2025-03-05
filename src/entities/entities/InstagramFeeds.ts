import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('instagram_feeds_instagramid_unique', ['instagramId'], { unique: true })
@Entity('instagram_feeds', { schema: 'modema' })
export class InstagramFeed {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'instagramId', unique: true, length: 191 })
  instagramId: string;

  @Column('varchar', { name: 'shortCode', nullable: true, length: 191 })
  shortCode: string | null;

  @Column('bigint', { name: 'createdTime', nullable: true })
  createdTime: string | null;

  @Column('varchar', { name: 'type', nullable: true, length: 191 })
  type: string | null;

  @Column('varchar', { name: 'link', nullable: true, length: 191 })
  link: string | null;

  @Column('varchar', {
    name: 'imageLowResolutionUrl',
    nullable: true,
    length: 191,
  })
  imageLowResolutionUrl: string | null;

  @Column('varchar', { name: 'imageThumbnailUrl', nullable: true, length: 191 })
  imageThumbnailUrl: string | null;

  @Column('varchar', {
    name: 'imageStandardResolutionUrl',
    nullable: true,
    length: 191,
  })
  imageStandardResolutionUrl: string | null;

  @Column('varchar', {
    name: 'imageHighResolutionUrl',
    nullable: true,
    length: 191,
  })
  imageHighResolutionUrl: string | null;

  @Column('longtext', { name: 'squareImages', nullable: true })
  squareImages: string | null;

  @Column('longtext', { name: 'carouselMedia', nullable: true })
  carouselMedia: string | null;

  @Column('varchar', { name: 'caption', nullable: true, length: 191 })
  caption: string | null;

  @Column('tinyint', { name: 'isCaptionEdited', nullable: true, width: 1 })
  isCaptionEdited: boolean | null;

  @Column('tinyint', { name: 'isAd', nullable: true, width: 1 })
  isAd: boolean | null;

  @Column('varchar', {
    name: 'videoLowResolutionUrl',
    nullable: true,
    length: 191,
  })
  videoLowResolutionUrl: string | null;

  @Column('varchar', {
    name: 'videoStandardResolutionUrl',
    nullable: true,
    length: 191,
  })
  videoStandardResolutionUrl: string | null;

  @Column('varchar', { name: 'videoDuration', nullable: true, length: 191 })
  videoDuration: string | null;

  @Column('varchar', {
    name: 'videoLowBandwidthUrl',
    nullable: true,
    length: 191,
  })
  videoLowBandwidthUrl: string | null;

  @Column('int', { name: 'videoViews', nullable: true })
  videoViews: number | null;

  @Column('longtext', { name: 'owner', nullable: true })
  owner: string | null;

  @Column('bigint', { name: 'ownerId', nullable: true })
  ownerId: string | null;

  @Column('int', { name: 'likesCount', nullable: true })
  likesCount: number | null;

  @Column('bigint', { name: 'locationId', nullable: true })
  locationId: string | null;

  @Column('varchar', { name: 'locationName', nullable: true, length: 191 })
  locationName: string | null;

  @Column('tinyint', { name: 'commentsDisabled', nullable: true, width: 1 })
  commentsDisabled: boolean | null;

  @Column('int', { name: 'commentsCount', nullable: true })
  commentsCount: number | null;

  @Column('longtext', { name: 'comments', nullable: true })
  comments: string | null;

  @Column('tinyint', { name: 'hasMoreComments', nullable: true, width: 1 })
  hasMoreComments: boolean | null;

  @Column('varchar', { name: 'commentsNextPage', nullable: true, length: 191 })
  commentsNextPage: string | null;

  @Column('longtext', { name: 'sidecarMedias', nullable: true })
  sidecarMedias: string | null;

  @Column('varchar', { name: 'locationSlug', nullable: true, length: 191 })
  locationSlug: string | null;

  @Column('varchar', { name: 'altText', nullable: true, length: 191 })
  altText: string | null;

  @Column('longtext', { name: 'locationAddressJson', nullable: true })
  locationAddressJson: string | null;

  @Column('tinyint', { name: 'isNew', nullable: true, width: 1 })
  isNew: boolean | null;

  @Column('tinyint', { name: 'isLoaded', nullable: true, width: 1 })
  isLoaded: boolean | null;

  @Column('tinyint', { name: 'isLoadEmpty', nullable: true, width: 1 })
  isLoadEmpty: boolean | null;

  @Column('tinyint', { name: 'isFake', nullable: true, width: 1 })
  isFake: boolean | null;

  @Column('tinyint', { name: 'isAutoConstruct', nullable: true, width: 1 })
  isAutoConstruct: boolean | null;

  @Column('bigint', { name: 'modified', nullable: true })
  modified: string | null;

  @Column('longtext', { name: 'data', nullable: true })
  data: string | null;

  @Column('varchar', {
    name: 'downloadedImageLowResolutionUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageLowResolutionUrl: string | null;

  @Column('varchar', {
    name: 'downloadedImageThumbnailUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageThumbnailUrl: string | null;

  @Column('varchar', {
    name: 'downloadedImageStandardResolutionUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageStandardResolutionUrl: string | null;

  @Column('varchar', {
    name: 'downloadedImageHighResolutionUrl',
    nullable: true,
    length: 191,
  })
  downloadedImageHighResolutionUrl: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
