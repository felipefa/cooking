import { supabase } from './supabase';

export async function findByIngredientsIds(ingredientIds: string[]) {
  try {
    const { data } = await supabase
      .rpc('recipes_by_ingredients', { ids: ingredientIds })
      .returns<Recipe[]>();

    return data ?? [];
  } catch (error) {
    console.error('Error fetching recipes by ingredient ids', error);
    return [];
  }
}

export async function show(recipeId: string) {
  try {
    const { data } = await supabase
      .from('recipes')
      .select()
      .eq('id', recipeId)
      .returns<Recipe>()
      .single<Recipe>();

    return data;
  } catch (error) {
    console.error('Error fetching recipe by id', error);
    return null;
  }
}
