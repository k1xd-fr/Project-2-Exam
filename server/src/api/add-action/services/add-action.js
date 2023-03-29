'use strict';

/**
 * add-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-action.add-action');
