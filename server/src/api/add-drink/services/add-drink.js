'use strict';

/**
 * add-drink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-drink.add-drink');
