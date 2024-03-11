import { supabase } from './supabase';

export async function findAll() {
  try {
    const { data } = await supabase
      .from('ingredients')
      .select('*')
      .order('name')
      .returns<Ingredient[]>();

    return data ?? [];
  } catch (error) {
    console.error('Error fetching all ingredients', error);
    return [];
  }
}

export async function findByIds(ids: string[]) {
  try {
    const { data } = await supabase
      .from('ingredients')
      .select()
      .in('id', ids)
      .order('name')
      .returns<Ingredient[]>();

    return data ?? [];
  } catch (error) {
    console.error('Error fetching ingredients by id', error);
    return [];
  }
}

export async function findByRecipeId(recipeId: string) {
  try {
    const { data } = await supabase
      .from('recipes_ingredients')
      .select('ingredients (id, name, image)')
      .eq('recipe_id', recipeId)
      .returns<{ ingredients: Ingredient; }[]>();

    return data ? data.map((item) => item.ingredients) : [];
  } catch (error) {
    console.error('Error fetching ingredients by recipe id', error);
    return [];
  }
}
