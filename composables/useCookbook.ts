export const useCookbook = () => {
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
  ];
};
