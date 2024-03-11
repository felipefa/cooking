import { supabase } from './supabase';

export async function findByRecipeId(recipeId: string) {
  try {
    const { data } = await supabase
      .from('preparations')
      .select()
      .eq('recipe_id', recipeId)
      .order('step')
      .returns<Preparation[]>();

    return data ?? [];
  } catch (error) {
    console.error('Error fetching preparations by recipe id', error);
    return [];
  }
}
