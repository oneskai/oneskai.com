import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isHomepage',
      title: 'Is Homepage',
      type: 'boolean',
      description: 'Set to true for the homepage (only one page should have this)',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'servicesGrid' },
        { type: 'whyChooseUs' },
        { type: 'approachSteps' },
        { type: 'teamSection' },
        { type: 'ctaBanner' },
        { type: 'testimonials' },
        { type: 'blogGrid' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isHomepage: 'isHomepage',
    },
    prepare({ title, isHomepage }) {
      return {
        title: isHomepage ? `${title} (Homepage)` : title,
      };
    },
  },
});
