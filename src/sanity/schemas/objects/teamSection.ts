import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      initialValue: 'OUR TEAM',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our key people',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showAllMembers',
      title: 'Show All Team Members',
      type: 'boolean',
      description: 'If enabled, shows all team members. If disabled, select specific members below.',
      initialValue: true,
    }),
    defineField({
      name: 'members',
      title: 'Select Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
      hidden: ({ parent }) => parent?.showAllMembers,
    }),
    defineField({
      name: 'maxMembers',
      title: 'Maximum Members to Show',
      type: 'number',
      description: 'Limit the number of team members displayed (leave empty for all)',
      hidden: ({ parent }) => !parent?.showAllMembers,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `Team: ${title || 'Untitled'}`,
      };
    },
  },
});
