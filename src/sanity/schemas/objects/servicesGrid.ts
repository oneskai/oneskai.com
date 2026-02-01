import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesGrid',
  title: 'Services Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      initialValue: 'WHAT WE DO',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our services',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
              description: 'e.g., 01, 02, 03',
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
            {
              name: 'link',
              title: 'Link',
              type: 'string',
              description: 'URL to service detail page',
            },
          ],
          preview: {
            select: {
              title: 'title',
              number: 'number',
            },
            prepare({ title, number }) {
              return {
                title: `${number || ''} ${title}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      services: 'services',
    },
    prepare({ title, services }) {
      return {
        title: `Services Grid: ${title || 'Untitled'}`,
        subtitle: `${services?.length || 0} services`,
      };
    },
  },
});
