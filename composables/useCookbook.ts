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
        "2. Heat a large grill pan over medium heat. Add chicken breasts and cook until golden with grill marks and no pink remaining, 8 minutes per side. Transfer to a plate to let rest, then thinly slice.",
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
      image: "/images/spinach_gnocchi_soup.jpeg",
      links: [
        {
          name: "Original Recipe",
          url: "https://www.saltandlavender.com/spinach-gnocchi-soup/",
        },
      ],
    },
    {
      id: "tofu_bowl_peanut_sauce",
      name: "Soy Tofu Bowl with Peanut Sauce",
      ingredients: [
        "14 oz. firm tofu ",
        "1 Tbsp light oil",
        "2 Tbsp soy sauce",
        "1 clove garlic, minced",
        "1 Tbsp brown sugar",
        "2 cups brown rice",
        "3.25 cups water",
        "1/2 tsp salt",
        "1 Tbsp toasted sesame oil",
        "1/4 cup natural style creamy peanut butter",
        "1 Tbsp Sriracha",
        "1 tsp soy sauce",
        "1 tsp grated fresh ginger",
        "1 tsp brown sugar",
        "3 Tbsp hot water",
        "1 tsp oil for pan frying",
        "1/2 lb. snap peas",
        "2 green onions, sliced",
        "1 Tbsp sesame seeds",
      ],
      directions: [
        "1. Begin by pressing the tofu for about 30 minutes to remove the excess moisture. Place the block of tofu between two flat plates, rimmed baking sheets, or cutting boards and place something heavy on top, like a cast iron skillet or a pot full of water. If using cutting boards or something without a rim to hold in the water that seeps out, place paper towels or a clean dishcloth under the tofu to catch the liquid as it is expelled.",
        "2. While the tofu is pressing, begin the rice. Cook your rice according to the package directions, making sure to include salt. Once the rice has cooked, fluff it with a fork and then drizzle 1/2 Tbsp toasted sesame oil over top. Fold the oil into the rice, making sure not to stir too vigorously, then repeat with the second 1/2 Tbsp of sesame oil. The rice should now have a wonderful toasty nutty flavor and aroma. Set the rice aside.",
        "3. Once the tofu has pressed, pour off the excess liquid. Slice the block of tofu into 16 triangles (I cut the thickness of the block in half, then cut the stacked halves into quarters, and each piece into two triangles). Place the tofu pieces in a shallow bowl or dish.",
        "4. In a small bowl, stir together the ingredients for the tofu marinade: oil, soy sauce, minced garlic, and brown sugar. Pour the marinade over the tofu pieces and turn them all to make sure all sides are coated. Allow the tofu to marinate for about 20 minutes, turning the pieces once or twice during that time. After 20 minutes, most of the marinade should be absorbed.",
        "5. While the tofu is marinating and the rice is cooking prepare the spicy peanut sauce. In a bowl stir together the peanut butter, sriracha, soy sauce, grated ginger, brown sugar, and enough hot water to create a smooth sauce (3-4 Tbsp). Set the sauce aside.",
        "6. Once the tofu has marinated, heat a large non-stick skillet over medium flame. Add just a splash of oil to the skillet (about 1 tsp) and swirl to coat the skillet. Add the tofu pieces and any remaining marinade, and cook on each side until deeply browned. ",
        "7. Once the tofu pieces are browned, remove them from the skillet and add the snap peas. Quickly sauté the snap peas in the skillet until they turn bright green and are still crisp. You just want to remove the raw edge. Remove them from the skillet to prevent over cooking.",
        "8. To build the bowls, add about 1.5 cups sesame rice to each bowl and then top with 1/4 of the tofu pieces and snap peas. Drizzle spicy peanut sauce over each bowl and then sprinkle sliced green onions and sesame seeds over each.",
      ],
      rating: {
        josh: 4,
        ellie: 4,
      },
      image: "/images/tofu_bowl_peanut_sauce.jpeg",
      links: [
        {
          name: "Original Recipe",
          url: "https://www.budgetbytes.com/soy-marinated-tofu-bowls-spicy-peanut-sauce/",
        },
      ],
    },
    {
      id: "mango_tofu_bowl",
      name: "Mango Coconut Tofu Bowl",
      ingredients: [
        "1.5 cups uncooked jasmine or basmati rice",
        "1 clove garlic, minced",
        "3/4 tsp salt",
        "1 13.5oz. can coconut milk",
        "1 cup water",
        "1 lime",
        "1/4 cup honey",
        "1/2 Tbsp soy sauce",
        "1 tsp corn starch",
        "1 14oz. package firm or extra firm tofu",
        "1 pinch salt",
        "2 Tbsp corn starch",
        "2 Tbsp neutral oil for frying",
        "1 mango",
        "1 avocado, sliced",
        "2-3 green onions, sliced",
        "1 pinch crushed red pepper",
        "1 handful fresh cilantro",
      ],
      directions: [
        "1. Begin by pressing the tofu. Remove the tofu from the package, draining away all moisture. Wrap the tofu in a clean, lint-free dish towel or a few layers of paper towel. Place the wrapped tofu between two plates and place something heavy on top (cast iron pan or pot full of water). Let the tofu press for at least 30 minutes.",
        "2. To make the Savory Coconut Rice, combine the uncooked rice, minced garlic, salt, coconut milk, and water in a medium pot. Place a lid on the pot and bring to a boil over high heat. Once it reaches a boil, turn the heat down to low and let simmer for 20 minutes. Turn the heat off and let the pot sit, undisturbed, for 10 more minutes. Fluff the rice with a fork and set aside.",
        "3. While the rice is cooking, prepare the honey lime glaze. Use a zester, microplane, or small-holed cheese grater to remove the thin layer of green zest from the lime. Squeeze the juice from the lime into a separate bowl (you'll need about 1/4 cup juice). Combine the juice with 1/2 tsp of the zest, honey, soy sauce, and corn starch in a bowl. Stir until the corn starch and honey are dissolved.",
        "4. After the tofu has been pressed, cut it into 1/2 inch cubes. Blot with a paper towel if needed to make sure the surface is dry. Season the tofu with a pinch of salt. Sprinkle the corn starch over top and gently toss until all the pieces are well coated.",
        "5. Heat the oil in a large skillet over medium heat until the oil is shimmering. Add the tofu and fry on until golden brown on each side (about 3 minutes each side). Remove the fried tofu from the pan and turn the heat down to low. While the tofu fries, cut the mango into cubes.",
        "6. Give the prepared glaze a quick stir, then add it to the skillet. Allow the glaze to begin to simmer, at which point it will thicken. Once thickened, turn the heat off and add the fried tofu and cubed mango. Toss to coat in the glaze.",
        "7. To build the bowls, place about one cup of the savory coconut rice in the bottom of each bowl, then top with a scoop of the mango and tofu. Add sliced green onions, sliced avocado, a pinch of red pepper flakes, and a few sprigs of cilantro on top of each bowl.",
      ],
      rating: {
        josh: 4,
        ellie: 4,
      },
      image: "/images/mango_tofu_bowl.jpeg",
      links: [
        {
          name: "Original Recipe",
          url: "https://www.budgetbytes.com/mango-coconut-tofu-bowls/",
        },
      ],
    },
  ];
};
