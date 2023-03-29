'use strict';

/**
 * add-pizza controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::add-pizza.add-pizza');
