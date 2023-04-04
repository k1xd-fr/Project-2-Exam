'use strict';

/**
 * add-ing router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::add-ing.add-ing');
