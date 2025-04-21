import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'specialtyItem',
  title: 'Produit Mis en Avant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuCategory',
      title: 'Catégorie du Menu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuItemId',
      title: 'ID du Produit',
      description: 'Identifiant du produit lié (ex: redbull-orange)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      category: 'menuCategory',
    },
    prepare({title, media, category}) {
      return {
        title,
        media,
        subtitle: `Catégorie: ${category}`,
      }
    },
  },
})