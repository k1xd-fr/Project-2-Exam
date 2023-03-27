'use strict';

/**
 * add-action router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::add-action.add-action');
