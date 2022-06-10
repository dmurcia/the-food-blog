import { apiEngine } from '@/api'

/**
 * Get random recipes
 * @param {} body - The options of this endpoint
 * @returns {object} - The data of this endpoint
 */
export const getRamdomRecipes = (body) =>
  apiEngine('GET', 'recipes/random', { body })

/**
*
* @param {object} body - The options of this endpoint
* @returns {object} - The data of this endpoint
*/
export const getRecipeById = (body) =>
  apiEngine('GET', 'recipes', { body })
