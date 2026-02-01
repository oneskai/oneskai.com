import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'whyChooseUs',
  title: 'Why Choose Us Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      initialValue: 'WHY CHOOSE US',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Start now',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/about',
    }),
    defineField({
      name: 'cards',
      title: 'Growth Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon/Emoji',
              type: 'string',
              description: 'Use an emoji (e.g., 🚀, ⚙️, 💎, 📈)',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              icon: 'icon',
            },
            prepare({ title, icon }) {
              return {
                title: `${icon || ''} ${title}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cards: 'cards',
    },
    prepare({ title, cards }) {
      return {
        title: `Why Choose Us: ${title || 'Untitled'}`,
        subtitle: `${cards?.length || 0} cards`,
      };
    },
  },
});
