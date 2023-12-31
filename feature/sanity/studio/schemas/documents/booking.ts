import { BookmarkIcon } from "@radix-ui/react-icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  icon: BookmarkIcon,
  fields: [
    defineField({
      name: 'read',
      title: 'Read',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'accepted',
      title: 'Accepted',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'refused',
      title: 'Refused',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'request_at',
      title: 'Request At',
      type: 'datetime',
      validation: Rule => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email()
    }),
    defineField({
      name: 'phonenumber',
      title: 'Phonenumber',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Booking Type',
      type: 'reference',
      to: { type: 'booking-type' }
    }),
  ]
})