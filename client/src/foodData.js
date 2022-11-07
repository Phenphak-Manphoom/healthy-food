const healthyFood = [
  {
    name: "Classic White Chicken Chili",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "Soups",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-soup-recipes-white-chicken-chili-1634592750.jpg?crop=0.910xw:0.911xh;0.0719xw,0.0543xh&resize=980:*",
    description:
      "Aching for a chili night? This white-bean version uses healthier chicken, but still packs in the flavor.",
  },
  {
    name: "Chicken-and-Spinach Tortellini Soup",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 250,
        large: 300,
      },
    ],
    category: "Soups",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-soup-recipes-tortellini-1634592941.jpg?crop=1xw:0.9999530428249437xh;center,top&resize=980:*",
    description:
      "This fast soup comes together in a hurry with rotisserie chicken and fresh baby spinach.",
  },
  {
    name: "Pesto Chicken Minestrone",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "Soups",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pesto-chicken-minestrone-1571153080.jpg?crop=0.951xw:0.793xh;0.0123xw,0.0918xh&resize=980:*",
    description:
      "This minestrone soup is overflowing with filling ingredients, like fiber-rich kidney beans, protein-packed chicken, and nutrient-rich kale.",
  },
  {
    name: "Vegetarian Chili with Grains and Beans",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "Soups",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetarian-chili-1578331694.jpg?crop=1xw:1xh;center,top&resize=980:*",
    description:
      "This slow-cooker chili is as filling as its meatier mainstay because of its hearty helping of high-protein wheat berries and kidney beans.",
  },
  {
    name: "Spiced Sweet Potato-and-Peanut Puree",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 400,
      },
    ],
    category: "Soups",
    image:
      "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/40/slow-cooker-sweet-potato-1015_1.jpg?crop=1.0xw:1xh;center,top&resize=980:*",
    description: "Heat up your evening with this rich, spicy soup.",
  },
  {
    name: "Chicken Meatball and Vegetable Noodle Soup",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 350,
        large: 400,
      },
    ],
    category: "Soups",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-soup-recipes-chicken-meatball-1532455353.jpg?crop=1xw:1xh;center,top&resize=980:*",
    description:
      "Swap out noodles for spiralized vegetables in this low-carb soup.",
  },
  {
    name: "Steak Sandwich With Arugula",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 250,
        large: 300,
      },
    ],
    category: "Sanwishes",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/steak-sandwich-with-arugula-1628706684.jpg?crop=0.668xw:1.00xh;0.219xw,0&resize=980:*",
    description:
      "A juicy, hearty steak sandwich is the best thing to banish midday hunger pangs.",
  },
  {
    name: "Salmon BLT",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 350,
        large: 400,
      },
    ],
    category: "Sanwishes",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/salmon-blt-ghk-1532637320-1-1562903310.jpg?crop=1xw:1xh;center,top&resize=980:*",
    description:
      "We reinvented the diner staple to dial down the sodium and fat —and give it a hit of heart-healthy omega-3 fatty acids.",
  },
  {
    name: "Tea Sandwiches",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 250,
        large: 300,
      },
    ],
    category: "Sanwishes",
    image:
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/15/1491935870-mike-garten-finger-sandwiches-0517.jpg?crop=1xw:0.99975xh;center,top&resize=980:*",
    description:
      "Eating healthy doesn't mean depriving yourself completely. Delicate and small, these portion-controlled finger sandwiches pack in a ton of your fave flavors, so it's the perfect way to satisfy a pimiento cheese craving.",
  },
  {
    name: "Turkey Burger With Sweet Potato Fries",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 350,
        large: 400,
      },
    ],
    category: "Sanwishes",
    image:
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/37/1474042183-ghk090115ybdroz-turkey-burger.jpg?crop=0.713xw:0.791xh;0.103xw,0.164xh&resize=980:*",
    description:
      "A life without burgers and fries is a sad life indeed, so we made healthier versions for those days when you need to eat a little lighter.",
  },
  {
    name: "Mushroom Quinoa Burger",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 350,
        large: 400,
      },
    ],
    category: "Sanwishes",
    image:
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/43/1477592728-ghk060116ykmushroom-quinoa-burger.jpg?crop=0.852xw:0.853xh;0.111xw,0.0178xh&resize=980:*",
    description:
      "This blend of 'shrooms and whole grains won't fall apart while you cook it the way that other veggie burgers do.",
  },
  {
    name: "Roasted Butternut Squash Salad With Tahini Vinaigrette",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 250,
        large: 300,
      },
    ],
    category: "Salads",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roasted-butternut-squash-salad-with-tahini-vinaigrette-1606251455.jpg?crop=0.668xw:1.00xh;0.250xw,0&resize=980:*",
    description:
      "Roasting the squash and onions intensifies their sweetness without adding any extra sugar.",
  },
  {
    name: "Radicchio Salad With Roasted Fennel and Shrimp",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 350,
      },
    ],
    category: "Salads",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/radicchio-salad-with-roasted-fennel-and-shrimp-1606238609.jpg?crop=1xw:1xh;center,top&resize=980:*",
    description:
      "Makes this full-flavored salad even more of a meal by serving over sourdough toast.",
  },
  {
    name: "Greek Salad Recipe",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 350,
        large: 350,
      },
    ],
    category: "Salads",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghk060120savorfeature-002-1608234179.jpg?crop=0.714xw:0.715xh;0.0918xw,0.145xh&resize=980:*",
    description:
      "Omitting the optional feta cheese means you could go full vegan with this taste-of-summer salad.",
  },
  {
    name: "Salmon With Grapefruit and Lentil Salad",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 300,
        medium: 450,
        large: 550,
      },
    ],
    category: "Salads",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/salmon-with-grapefruit-and-lentil-salad-1588780461.jpg?crop=1xw:0.9988558352402745xh;center,top&resize=980:*",
    description:
      "Serve the salad on its own for a protein-packed lunch or add seared salmon for a quick dinner.",
  },
  {
    name: "Seared Steak and Rye Panzanella",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 250,
        large: 300,
      },
    ],
    category: "Salads",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-salads-steak-rye-panzanella-wdy-1527878636.jpg?crop=0.883xw:0.883xh;0.0493xw,0.0352xh&resize=980:*",
    description:
      "For those days when you're extra hungry, but still need your greens.",
  },
  {
    name: "White Bean and Tuna Salad With Basil Vinaigrette",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 250,
        large: 300,
      },
    ],
    category: "Salads",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ghk050119weeknight-001-1608233063.jpg?crop=0.711xw:0.808xh;0.0748xw,0.102xh&resize=980:*",
    description:
      "A classic combo gets an update with a fragrant basil dressing.",
  },
  {
    name: "Roasted Hazelnut & Pistachio Bark",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 250,
        large: 300,
      },
    ],
    category: "Desserts",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-desserts-roasted-hazelnut-bark-1652898813.jpg?crop=1.00xw:0.834xh;0,0.129xh&resize=980:*",
    description:
      "This decadent dessert is made from just three ingredients: dark chocolate, flaky salt, and toasted nuts. The darker the chocolate, the less sugar is in it!",
  },
  {
    name: "Brandied Strawberry Shortcakes with Malted Whipped Cream",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 250,
        large: 300,
      },
    ],
    category: "Desserts",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-desserts-strawberry-shortcake-1652898946.jpg?crop=1.00xw:0.834xh;0,0.0568xh&resize=980:*",
    description:
      "You can cut back on the sugar to make this simple dessert even healthier—or skip the whipped cream and use yogurt instead!",
  },
  {
    name: "Strawberry-Almond Crumble Pie",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 250,
        large: 300,
      },
    ],
    category: "Desserts",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-desserts-strawberry-almond-pie-1652899144.jpg?crop=1.00xw:0.835xh;0,0.0738xh&resize=980:*",
    description:
      "Fresh fruit is always a good way to get a healthy sweet treat. Oat-based crumbles add a bit more fiber than a standard pie crust topping.",
  },
  {
    name: "Marbled Tahini Shortbread Cookies",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 130,
        medium: 230,
        large: 330,
      },
    ],
    category: "Desserts",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-desserts-tahini-shortbread-1652899483.jpg?crop=1.00xw:0.834xh;0,0.0420xh&resize=980:*",
    description:
      "These rich cookies have just 2 teaspoons of sugar per bar, and are flavored primarily with tahini paste!",
  },
  {
    name: "Carrot-Nut Bread with Sour Cream Glaze",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 250,
        large: 330,
      },
    ],
    category: "Desserts",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-desserts-carrot-nut-1652900615.jpg?crop=0.935xw:0.780xh;0.0323xw,0.0443xh&resize=980:*",
    description:
      "It's like a sneaky way of getting everyone to eat their vegetables!",
  },
  {
    name: "Chocolate-Cinnamon Marble Bread",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 170,
        medium: 250,
        large: 300,
      },
    ],
    category: "Desserts",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-desserts-chocolate-marble-1652900700.jpg?crop=1.00xw:0.834xh;0,0.0624xh&resize=980:*",
    description:
      "This quick bread scratches that cake itch without being quite so decadent. And because you're making it yourself, you can decide exactly how much sugar goes in.",
  },
  {
    name: "Blackberry Coconut Tart",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 250,
        large: 300,
      },
    ],
    category: "Desserts",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-desserts-blackberry-coconut-tart-1652885695.jpeg?crop=0.781xw:0.750xh;0.150xw,0.107xh&resize=980:*",
    description:
      "Fresh blackberries and coconut make for a delicious, not-too-sweet dessert.",
  },
  {
    name: "Cucumber Water",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 150,
        medium: 250,
        large: 300,
      },
    ],
    category: "Drinks",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2021/06/Cucumber-Water-002-735x919.jpg",
    description:
      "This cucumber water recipe is oh so refreshing, with 0 calories and no sugar. You may have seen it at spas or beauty salons, and the botanical flavor tastes like poolside relaxion in a sip.",
  },
  {
    name: "Iced Tea",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: "Drinks",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2020/07/Iced-Tea-001-735x919.jpg",
    description:
      "Unsweetened iced tea is a delicious healthy alternative to soda! ",
  },
  {
    name: "Strawberry Water",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: "Drinks",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-005.jpg",
    description:
      "Here's a favorite healthy drink: Strawberry Water! This delicious flavored water has the essence of that red berry is it refreshing",
  },
  {
    name: "Mint Tea",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: "Drinks",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2020/06/Mint-Tea-006-735x919.jpg",
    description:
      "This mint tea is restorative, delicious, and takes just 5 minutes to steep into a flavorful herbal tea. It tastes fresh and bright. It’s a great way to wake up in the morning as an alternative to coffee.",
  },
  {
    name: "Green Juice",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 100,
        medium: 150,
        large: 200,
      },
    ],
    category: "Drinks",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2021/06/Green-Juice-Recipe-007-735x919.jpg",
    description:
      "Green juice is a blend of green veggies that come together into a healthy drink!",
  },
  {
    name: "Chia Almond Butter Toast",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 250,
        large: 300,
      },
    ],
    category: "Toasts",
    image:
      "https://media.self.com/photos/592dc482451b692bd2abad8b/master/w_1600%2Cc_limit/0617-chia-almond-butter-toast.jpg",
    description:
      "Thanks to almond butter, whole grain bread, and chia seeds, just one slice of this toast has 8 grams of protein.",
  },
  {
    name: "Avocado Pomegranate Toast",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 250,
        large: 300,
      },
    ],
    category: "Toasts",
    image:
      "https://media.self.com/photos/592dc483bbfb8a0dbe144468/master/w_1600%2Cc_limit/avocado-pomegranate-toast-13crop.jpg",
    description:
      "You will definitely not regret topping your next avocado toast with pomegranate seeds.",
  },
  {
    name: "Strawberry, Avocado, and White Cheddar Toast",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 250,
        large: 300,
      },
    ],
    category: "Toasts",
    image:
      "https://media.self.com/photos/592dc483ba39e8269a675730/master/w_1600%2Cc_limit/starwberry-avo-toast.jpg",
    description:
      "Strawberries, cheese, avocado, and honey may sound like a weird combination, but it really works. ",
  },
  {
    name: "Hard-Boiled Egg and Herb Toast ",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 250,
        large: 300,
      },
    ],
    category: "Toasts",
    image:
      "https://media.self.com/photos/592dc482cbd81b664a97a24e/master/w_1600%2Cc_limit/0517-hard-boiled-egg-toast.jpg",
    description:
      "Prep hard-boiled eggs ahead of time to make this toast even faster.",
  },
  {
    name: "Pear Chutney Cheese Toast",
    sizes: ["small", "medium", "large"],
    prices: [
      {
        small: 200,
        medium: 250,
        large: 300,
      },
    ],
    category: "Toasts",
    image:
      "https://media.self.com/photos/592dc484451b692bd2abad8f/master/w_1600%2Cc_limit/Pear-Chutney-Cheese-Toast-11.jpg",
    description:
      "Channel your inner Brit by making this tangy, cheesy, chutney toast. ",
  },
];

export default healthyFood;
