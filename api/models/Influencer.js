/**
 * Influencer.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    title: { type: 'string', defaultsTo: 'Why good fit' },
    firstname: { type: 'string' },
    lastname: { type: 'string' },
    screenName: { type: 'string' },
    avatarUrl: { type: 'string' },
    email: { type: 'string', isEmail: true, unique: true },
    phone: { type: 'string' },
    gender: { type: 'string', isIn: ['male', 'female', 'other'], required: true },
    description: { type: 'string' },
    passionPoints: { type: 'string' },
    isPublished: { type: 'boolean', defaultsTo: true },


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    projects: {
      collection: 'project',
      via: 'influencer',
      through: 'campaign',
    },
    providers: {
      collection: 'provider',
      via: 'influencer',
      through: 'channel'
    },
    attributes: {
      collection: 'attribute',
      via: 'influencer',
      through: 'trait',
    },
    locations: {
      collection: 'location',
      via: 'influencers',
    },
    personalities: {
      collection: 'personality',
      via: 'influencers',
    },
    tags: {
      collection: 'tag',
      via: 'influencers',
    },
    posts: {
      collection: 'post',
      via: 'influencer',
    }

  },

};

