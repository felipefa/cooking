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
    console.error('Error fetching ingredients', error);
    return [];
  }
}