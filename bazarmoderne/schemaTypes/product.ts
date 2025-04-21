import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produit',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'Identifiant',
      description: 'Un identifiant unique pour le produit (ex: redbull-orange)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Prix',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Taille',
      type: 'string',
      description: 'Par exemple "250ml" ou "500ml" pour les boissons',
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
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'price',
      category: 'category.name',
    },
    prepare({title, media, subtitle, category}) {
      return {
        title,
        media,
        subtitle: `${category ? `${category} - ` : ''}${subtitle}`,
      }
    },
  },
})