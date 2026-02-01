import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'approachSteps',
  title: 'Approach Steps Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      initialValue: 'OUR PROCESS',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our 4-step approach',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Step Number',
              type: 'string',
              description: 'e.g., 01, 02, 03, 04',
            },
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              number: 'number',
            },
            prepare({ title, number }) {
              return {
                title: `Step ${number || '?'}: ${title}`,
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
      steps: 'steps',
    },
    prepare({ title, steps }) {
      return {
        title: `Approach: ${title || 'Untitled'}`,
        subtitle: `${steps?.length || 0} steps`,
      };
    },
  },
});
