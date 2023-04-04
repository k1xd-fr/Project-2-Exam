'use strict';

/**
 * add-ing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-ing.add-ing');
