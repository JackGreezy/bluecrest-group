import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { colorInput } from '@sanity/color-input'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'bluecrest-group',
  title: 'BlueCrest Group CMS',
  projectId: 'xnub7law',
  dataset: 'production',
  apiVersion: '2024-01-01',
  basePath: '/studio',
  plugins: [
    deskTool(),
    colorInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
