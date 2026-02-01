import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'mainNav',
      title: 'Main Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'hasMegaMenu',
              title: 'Has Mega Menu',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'megaMenuColumns',
              title: 'Mega Menu Columns',
              type: 'array',
              hidden: ({ parent }) => !parent?.hasMegaMenu,
              of: [
                {
                  type: 'object',
                  name: 'megaMenuColumn',
                  fields: [
                    {
                      name: 'heading',
                      title: 'Column Heading',
                      type: 'string',
                    },
                    {
                      name: 'items',
                      title: 'Menu Items',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          name: 'megaMenuItem',
                          fields: [
                            {
                              name: 'icon',
                              title: 'Icon',
                              type: 'string',
                              description: 'Icon name (e.g., analytics, cart, code)',
                              options: {
                                list: [
                                  'analytics', 'cart', 'zap', 'target', 'smartphone',
                                  'search', 'code', 'mobile', 'cloud', 'heart',
                                  'building', 'book', 'users', 'briefcase', 'activity',
                                  'award', 'handshake', 'fileText', 'video', 'help', 'message'
                                ],
                              },
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
                              type: 'string',
                            },
                            {
                              name: 'href',
                              title: 'Link',
                              type: 'string',
                              validation: (Rule) => Rule.required(),
                            },
                            {
                              name: 'badge',
                              title: 'Badge',
                              type: 'string',
                              description: 'Optional badge text (e.g., "New", "Hiring")',
                            },
                          ],
                          preview: {
                            select: {
                              title: 'title',
                              icon: 'icon',
                            },
                            prepare({ title, icon }) {
                              return {
                                title: title,
                                subtitle: icon,
                              };
                            },
                          },
                        },
                      ],
                    },
                    {
                      name: 'featured',
                      title: 'Featured Content',
                      type: 'object',
                      fields: [
                        {
                          name: 'title',
                          title: 'Title',
                          type: 'string',
                        },
                        {
                          name: 'description',
                          title: 'Description',
                          type: 'string',
                        },
                        {
                          name: 'image',
                          title: 'Image',
                          type: 'image',
                        },
                        {
                          name: 'href',
                          title: 'Link',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: {
                      title: 'heading',
                      items: 'items',
                    },
                    prepare({ title, items }) {
                      return {
                        title: title || 'Column',
                        subtitle: `${items?.length || 0} items`,
                      };
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'label',
              hasMegaMenu: 'hasMegaMenu',
            },
            prepare({ title, hasMegaMenu }) {
              return {
                title,
                subtitle: hasMegaMenu ? 'Has mega menu' : 'Simple link',
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get a Quote',
        },
        {
          name: 'href',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
      };
    },
  },
});
