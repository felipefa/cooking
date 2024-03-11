# Cooking

This repo contains a React Native application that is a cooking guide that provides various recipes for its users. The app was made to practice the use of RN while integrating it with Supabase.

## Technologies Used

- React Native
- Expo
- Supabase

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with `npm install`.
4. Set up Supabase with a new project.
5. Create the tables based on files included in the `database` folder.
6. Add a query function on your Supabase project based on the `recipes_by_ingredients.sql` file.
6. Create a `.env.local` file in the root directory and add the following variables:
   - `EXPO_PUBLIC_SUPABASE_URL` - the url of your supabase project.
   - `EXPO_PUBLIC_SUPABASE_ANON_KEY` - the key of your supabase project.
7. Start the app with `npm start`.

Enjoy cooking!
