export const useCookbook = (): Array<{
  id: string;
  name: string;
  ingredients: Array<string>;
  directions: Array<string>;
  rating: {
    josh: 1 | 2 | 3 | 4 | 5;
    ellie: 1 | 2 | 3 | 4 | 5;
  };
  image: string;
  links: Array<{ name: string; url: string }>;
}> => {
  /*
    For now, I am not going to feature any editing on the data.
    So just return the object with the data.
  */
  return [
    {
      id: "thai_chicken_lettuce_wraps",
      name: "Thai Chicken Lettuce Wraps",
      ingredients: [
        "Sweet Chili Sauce",
        "Soy Sauce",
        "Lime Juice",
        "Olive oil",
        "Sriracha",
        "Ginger",
        "Garlic",
        "Chicken Breasts",
        "Butterhead Lettuce",
        "Red Onion",
        "Carrot",
        "Cilantro",
      ],
      directions: [
        "1. In a large bowl, combine chili sauce, soy sauce, lime juice, oil, Sriracha, ginger, and garlic. Whisk to combine. Add chicken breasts to bowl and toss with marinade.",
        "2. Heat a large grill pan over medium heat. Add chicken breasts and cook until golden with grill marks and no pink remaining, 8 to 10 minutes per side. Transfer to a plate to let rest, then thinly slice.",
        "3. Build your lettuce cups: Fill lettuce cups with chicken and garnish with onion, carrot, and cilantro. Serve with lime wedges on the side.",
      ],
      rating: {
        josh: 5,
        ellie: 5,
      },
      image: "/images/thai_chicken_lettuce_wraps.png",
      links: [
        {
          name: "Original Recipe at Delish",
          url: "https://www.delish.com/cooking/recipe-ideas/recipes/a57645/thai-chicken-lettuce-cups-recipe/",
        },
      ],
    },
    {
      id: "spinach_gnocchi_soup",
      name: "Parmesan Gnocchi Mushroom Soup",
      ingredients: [
        "1 tablespoon olive oil",
        "1 tablespoon butter",
        "1/2 medium onion chopped",
        "2 sticks celery chopped finely",
        "1 tablespoon flour",
        "3 cloves garlic minced",
        "16 ounces cremini mushrooms sliced or chopped",
        "4 cups chicken or veggie broth",
        "2 dashes Italian seasoning",
        "1 pound potato gnocchi",
        "1 cup heavy/whipping cream",
        "2 cups (packed) fresh baby spinach",
        "1 cup freshly grated parmesan cheese",
        "Salt & pepper to taste",
      ],
      directions: [
        "1. Prep your onion and celery and melt the oil & butter in a soup pot over medium-high heat.",
        "2. Add the onion and celery to the pot and sauté for 5 minutes (it's ok if the onions brown a bit). I like to cut up the mushrooms while it's cooking to save time.",
        "3. Stir in the flour and cook for about 30 seconds.",
        "4. Add in the garlic and mushrooms and cook for 5 minutes or so. Once the mushrooms start to release water, give it a good stir to scrape up any brown bits from the bottom of the pot. ",
        "5. Add the chicken broth, Italian seasoning, and gnocchi to the pot. Increase the heat to high and bring the soup to a boil. Once it's boiling, reduce the heat so it's gently simmering for 5 minutes.",
        "6. Stir in the cream, spinach, and parmesan cheese. Increase the heat to medium and cook for another 5 minutes or until the spinach is tender and wilted, the cheese melts into the broth, and the broth has thickened up a bit.",
        "7. Season with salt & pepper as needed. Serve immediately. If you wish, you can grate some extra parmesan cheese on top of the bowls.",
      ],
      rating: {
        josh: 5,
        ellie: 5,
      },
      image: "/images/thai_chicken_lettuce_wraps.png",
      links: [
        {
          name: "Original Recipe",
          url: "https://www.saltandlavender.com/spinach-gnocchi-soup/",
        },
      ],
    },
  ];
};
