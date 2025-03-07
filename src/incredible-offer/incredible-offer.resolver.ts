import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IncredibleOfferService } from './incredible-offer.service';
import { IncredibleOffer } from './entities/incredible-offer.entity';
import { CreateIncredibleOfferInput } from './dto/create-incredible-offer.input';
import { UpdateIncredibleOfferInput } from './dto/update-incredible-offer.input';

@Resolver(() => IncredibleOffer)
export class IncredibleOfferResolver {
  constructor(private readonly incredibleOfferService: IncredibleOfferService) {}

  @Mutation(() => IncredibleOffer)
  createIncredibleOffer(@Args('createIncredibleOfferInput') createIncredibleOfferInput: CreateIncredibleOfferInput) {
    return this.incredibleOfferService.create(createIncredibleOfferInput);
  }

  @Query(() => [IncredibleOffer], { name: 'incredibleOffer' })
  findAll() {
    return this.incredibleOfferService.findAll();
  }

  @Query(() => IncredibleOffer, { name: 'incredibleOffer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.incredibleOfferService.findOne(id);
  }

  @Mutation(() => IncredibleOffer)
  updateIncredibleOffer(@Args('updateIncredibleOfferInput') updateIncredibleOfferInput: UpdateIncredibleOfferInput) {
    return this.incredibleOfferService.update(updateIncredibleOfferInput.id, updateIncredibleOfferInput);
  }

  @Mutation(() => IncredibleOffer)
  removeIncredibleOffer(@Args('id', { type: () => Int }) id: number) {
    return this.incredibleOfferService.remove(id);
  }
}
