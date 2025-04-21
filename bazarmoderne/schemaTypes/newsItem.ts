import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsItem',
  title: 'Nouveauté',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
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
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Date de publication (ex: "15 octobre 2025")',
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
      name: 'link',
      title: 'Lien',
      description: 'Chemin vers le produit (ex: "/menu?category=Boissons&item=redbull-orange")',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      date: 'date',
    },
    prepare({title, media, date}) {
      return {
        title,
        media,
        subtitle: date,
      }
    },
  },
})