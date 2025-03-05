import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactFormStatusService } from './contact-form-status.service';
import { ContactFormStatus } from './entities/contact-form-status.entity';
import { CreateContactFormStatusInput } from './dto/create-contact-form-status.input';
import { UpdateContactFormStatusInput } from './dto/update-contact-form-status.input';

@Resolver(() => ContactFormStatus)
export class ContactFormStatusResolver {
  constructor(private readonly contactFormStatusService: ContactFormStatusService) {}

  @Mutation(() => ContactFormStatus)
  createContactFormStatus(@Args('createContactFormStatusInput') createContactFormStatusInput: CreateContactFormStatusInput) {
    return this.contactFormStatusService.create(createContactFormStatusInput);
  }

  @Query(() => [ContactFormStatus], { name: 'contactFormStatus' })
  findAll() {
    return this.contactFormStatusService.findAll();
  }

  @Query(() => ContactFormStatus, { name: 'contactFormStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contactFormStatusService.findOne(id);
  }

  @Mutation(() => ContactFormStatus)
  updateContactFormStatus(@Args('updateContactFormStatusInput') updateContactFormStatusInput: UpdateContactFormStatusInput) {
    return this.contactFormStatusService.update(updateContactFormStatusInput.id, updateContactFormStatusInput);
  }

  @Mutation(() => ContactFormStatus)
  removeContactFormStatus(@Args('id', { type: () => Int }) id: number) {
    return this.contactFormStatusService.remove(id);
  }
}
