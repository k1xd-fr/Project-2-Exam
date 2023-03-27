'use strict';

/**
 * add-action controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::add-action.add-action');
