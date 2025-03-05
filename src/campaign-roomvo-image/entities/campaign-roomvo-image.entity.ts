import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { CampaignRoomvoVotes } from './CampaignRoomvoVotes';

@Index('campaign_roomvo_images_user_id_index', ['userId'], {})
@Index('campaign_roomvo_images_votes_count_index', ['votesCount'], {})
@Entity('campaign_roomvo_images', { schema: 'modema' })
export class CampaignRoomvoImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'votes_count', unsigned: true, default: () => '\'0\'' })
  votesCount: number;

  @Column('varchar', { name: 'path', nullable: true, length: 191 })
  path?: string;

  @Column('varchar', { name: 'filename', nullable: true, length: 191 })
  filename?: string;

  @Column('varchar', { name: 'original_filename', nullable: true, length: 191 })
  originalFilename?: str;
