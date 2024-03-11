type Ingredient = {
  id: string;
  name: string;
  image: string;
};

type Preparation = {
  id: string;
  recipe_id: string;
  description: string;
  step: number;
};

type Recipe = {
  id: string;
  name: string;
  image: string;
  minutes: number;
};
