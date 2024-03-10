const imagePath = `${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/ingredients`;

export function getImagePath(imageName: string) {
  return `${imagePath}/${imageName}`;
}
