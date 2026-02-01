import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '../schemas';
import { apiVersion, dataset, projectId } from '../env';

// Define singleton document IDs
const singletonTypes = new Set(['siteSettings', 'navigation', 'footer']);
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "New document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),

            // Singleton: Navigation
            S.listItem()
              .title('Navigation')
              .id('navigation')
              .child(
                S.document()
                  .schemaType('navigation')
                  .documentId('navigation')
              ),

            // Singleton: Footer
            S.listItem()
              .title('Footer')
              .id('footer')
              .child(
                S.document()
                  .schemaType('footer')
                  .documentId('footer')
              ),

            S.divider(),

            // Pages
            S.documentTypeListItem('page').title('Pages'),

            // Blog Posts
            S.documentTypeListItem('blogPost').title('Blog Posts'),

            // Team Members
            S.documentTypeListItem('teamMember').title('Team Members'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
