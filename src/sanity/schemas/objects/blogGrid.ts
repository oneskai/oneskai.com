import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogGrid',
  title: 'Blog Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      initialValue: 'OUR LATEST ARTICLES',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'postsToShow',
      title: 'Number of Posts to Show',
      type: 'number',
      initialValue: 6,
      validation: (Rule) => Rule.min(1).max(12),
    }),
    defineField({
      name: 'filterByCategory',
      title: 'Filter by Category',
      type: 'string',
      description: 'Leave empty to show all categories',
      options: {
        list: [
          { title: 'All Categories', value: '' },
          { title: 'Technology', value: 'TECHNOLOGY' },
          { title: 'Development', value: 'DEVELOPMENT' },
          { title: 'Business', value: 'BUSINESS' },
          { title: 'AI & Tech', value: 'AI & TECH' },
          { title: 'Security', value: 'SECURITY' },
          { title: 'Cloud', value: 'CLOUD' },
        ],
      },
    }),
    defineField({
      name: 'showViewAllLink',
      title: 'Show "View All" Link',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      postsToShow: 'postsToShow',
    },
    prepare({ title, postsToShow }) {
      return {
        title: `Blog Grid: ${title || 'Untitled'}`,
        subtitle: `Showing ${postsToShow || 6} posts`,
      };
    },
  },
});
