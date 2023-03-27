'use strict';

/**
 * add-pizza router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::add-pizza.add-pizza');
