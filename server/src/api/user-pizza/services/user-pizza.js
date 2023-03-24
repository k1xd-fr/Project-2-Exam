'use strict';

/**
 * user-pizza service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-pizza.user-pizza');
