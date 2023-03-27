'use strict';

/**
 * add-pizza service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-pizza.add-pizza');
