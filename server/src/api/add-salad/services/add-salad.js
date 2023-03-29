'use strict';

/**
 * add-salad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-salad.add-salad');
