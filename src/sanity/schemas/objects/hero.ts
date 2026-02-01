import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main headline text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'Text that will appear in accent color (pink)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Explore',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/services',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showTrustCard',
      title: 'Show Trust Card',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'trustCard',
      title: 'Trust Card',
      type: 'object',
      hidden: ({ parent }) => !parent?.showTrustCard,
      fields: [
        {
          name: 'avatars',
          title: 'Avatar Images',
          type: 'array',
          of: [{ type: 'image' }],
          validation: (Rule) => Rule.max(5),
        },
        {
          name: 'text',
          title: 'Trust Text',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: `Hero: ${title || 'Untitled'}`,
        media,
      };
    },
  },
});
