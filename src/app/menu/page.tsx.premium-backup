"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

type Dish = {
  name: string;
  category: string;
  price?: number;
  note?: string;
};

const categories = [
  "All",
  "Breakfast",
  "Pastries & Eggs",
  "Coffee & Tea",
  "Shakes & Juices",
  "Starters & Soups",
  "Light Meals",
  "Side Dishes",
  "Beef",
  "Fish",
  "Goat",
  "Chicken & Grill",
  "Indian Cuisine",
  "Pasta",
  "Platters",
  "Vegetarian",
  "Kids Menu",
  "Pizza",
  "Desserts",
];

const dishes: Dish[] = [
  // BREAKFAST — PDF page 2
  { name: "Breakfast 1", category: "Breakfast", price: 700, note: "Baked beans, Spanish omelette, nduma and avocado" },
  { name: "Breakfast 2", category: "Breakfast", price: 900, note: "Toasted bread, sausage, bacon and eggs" },
  { name: "Breakfast 3", category: "Breakfast", price: 800, note: "Ngwaci, scrambled eggs, sausage and mixed garden vegetables" },
  { name: "African Breakfast", category: "Breakfast", price: 800, note: "Ossobuko soup with vegetables, nduma and boiled corn" },
  { name: "Vegetarian / Healthy Breakfast", category: "Breakfast", price: 900, note: "Vegetable samosa, potatoes, mixed garden vegetables and boiled corn" },
  { name: "City Breakfast Salad", category: "Breakfast", price: 800, note: "Fresh tropical fruits with honey yoghurt or ice cream and caramelised nuts" },

  // PASTRIES, EGGS & CEREALS — PDF page 2
  { name: "French Toast", category: "Pastries & Eggs", price: 250 },
  { name: "Muffins", category: "Pastries & Eggs", price: 250 },
  { name: "Tea Scones", category: "Pastries & Eggs", price: 200 },
  { name: "Toasted Bread", category: "Pastries & Eggs", price: 250 },
  { name: "Waffles with Chicken Nuggets", category: "Pastries & Eggs", price: 750 },
  { name: "Boiled Eggs", category: "Pastries & Eggs", price: 200 },
  { name: "Egg Benedict", category: "Pastries & Eggs", price: 550 },
  { name: "Fried Eggs", category: "Pastries & Eggs", price: 200 },
  { name: "Fried Omelette", category: "Pastries & Eggs", price: 200 },
  { name: "House Omelette", category: "Pastries & Eggs", price: 500 },
  { name: "Scrambled Eggs", category: "Pastries & Eggs", price: 250 },
  { name: "Spanish Omelette", category: "Pastries & Eggs", price: 300 },
  { name: "Corn Flakes with Milk", category: "Pastries & Eggs", price: 350 },
  { name: "Granola with Yoghurt", category: "Pastries & Eggs", price: 550 },
  { name: "Weetabix with Milk", category: "Pastries & Eggs", price: 350 },
  { name: "Weetos with Milk", category: "Pastries & Eggs", price: 350 },

  // HOT BEVERAGES, COFFEE & TEA — PDF page 3
  { name: "Black Chocolate", category: "Coffee & Tea", price: 200 },
  { name: "Cafe Latte", category: "Coffee & Tea", price: 300 },
  { name: "Cappuccino Single", category: "Coffee & Tea", price: 300 },
  { name: "Cappuccino Double", category: "Coffee & Tea", price: 350 },
  { name: "Caffe Latte Double", category: "Coffee & Tea", price: 350 },
  { name: "Caffe Latte Single", category: "Coffee & Tea", price: 300 },
  { name: "Dawa", category: "Coffee & Tea", price: 300 },
  { name: "Espresso", category: "Coffee & Tea", price: 200 },
  { name: "Espresso Double", category: "Coffee & Tea", price: 300 },
  { name: "Espresso Single", category: "Coffee & Tea", price: 200 },
  { name: "Glass of Milk", category: "Coffee & Tea", price: 300 },
  { name: "Natural Yoghurt", category: "Coffee & Tea", price: 500 },
  { name: "Hot Chocolate White", category: "Coffee & Tea", price: 300 },
  { name: "Iced Coffee Double", category: "Coffee & Tea", price: 350 },
  { name: "Iced Coffee Single", category: "Coffee & Tea", price: 300 },
  { name: "Lemon Tea with Honey", category: "Coffee & Tea", price: 250 },
  { name: "Lemon Water with Honey", category: "Coffee & Tea", price: 100 },
  { name: "Machiatto", category: "Coffee & Tea", price: 300 },
  { name: "Machiatto Double", category: "Coffee & Tea", price: 350 },
  { name: "Machiatto Single", category: "Coffee & Tea", price: 300 },
  { name: "Mocha Double", category: "Coffee & Tea", price: 400 },
  { name: "Mocha Mint Double", category: "Coffee & Tea", price: 400 },
  { name: "Mocha Mint Single", category: "Coffee & Tea", price: 350 },
  { name: "Mocha Single", category: "Coffee & Tea", price: 350 },
  { name: "Oats of Porridge", category: "Coffee & Tea", price: 300 },
  { name: "Uji Power", category: "Coffee & Tea", price: 300 },
  { name: "Vanilla Latte Double", category: "Coffee & Tea", price: 400 },
  { name: "White Chocolate", category: "Coffee & Tea", price: 300 },
  { name: "Wimbi Porridge", category: "Coffee & Tea", price: 250 },
  { name: "Americano Double", category: "Coffee & Tea", price: 300 },
  { name: "Americano Single", category: "Coffee & Tea", price: 250 },
  { name: "Black Coffee", category: "Coffee & Tea", price: 300 },
  { name: "Vanilla Latte Single", category: "Coffee & Tea", price: 350 },
  { name: "African Tea", category: "Coffee & Tea", price: 200 },
  { name: "Black Tea", category: "Coffee & Tea", price: 150 },
  { name: "English Tea", category: "Coffee & Tea", price: 250 },
  { name: "Ginger Tea", category: "Coffee & Tea", price: 200 },
  { name: "Green Herbal Tea", category: "Coffee & Tea", price: 250 },
  { name: "Herbal Tea", category: "Coffee & Tea", price: 250 },
  { name: "Hibiscus Herbal Tea", category: "Coffee & Tea", price: 250 },
  { name: "Hot Ginger Lemon Tea", category: "Coffee & Tea", price: 250 },
  { name: "Iced Tea Black", category: "Coffee & Tea", price: 250 },
  { name: "Iced Tea White", category: "Coffee & Tea", price: 250 },
  { name: "Masala Tea", category: "Coffee & Tea", price: 250 },
  { name: "Mint Herbal Tea", category: "Coffee & Tea", price: 250 },
  { name: "Mixed Tea", category: "Coffee & Tea", price: 200 },
  { name: "Moring Herbal Tea", category: "Coffee & Tea", price: 250 },

  // SHAKES, SMOOTHIES & JUICES — PDF page 4
  { name: "Banana Shake", category: "Shakes & Juices", price: 450 },
  { name: "Chocolate Shake", category: "Shakes & Juices", price: 400 },
  { name: "Date Shake", category: "Shakes & Juices", price: 500 },
  { name: "Espresso Shake", category: "Shakes & Juices", price: 450 },
  { name: "Mango Shake", category: "Shakes & Juices", price: 450 },
  { name: "Oreo Shake", category: "Shakes & Juices", price: 450 },
  { name: "Vanilla Shake", category: "Shakes & Juices", price: 400 },
  { name: "Classic Smoothie", category: "Shakes & Juices", price: 400 },
  { name: "Green Smoothie", category: "Shakes & Juices", price: 500 },
  { name: "Healthy Blend", category: "Shakes & Juices", price: 500 },
  { name: "Manpino", category: "Shakes & Juices", price: 400 },
  { name: "Mixed Berry Smoothie", category: "Shakes & Juices", price: 600 },
  { name: "Shujaa", category: "Shakes & Juices", price: 650 },
  { name: "Strawberry Delight", category: "Shakes & Juices", price: 500 },
  { name: "Tree Tomato Pineapple", category: "Shakes & Juices", price: 500 },
  { name: "Chocolate Milkshake", category: "Shakes & Juices", price: 400 },
  { name: "Strawberry Milkshake", category: "Shakes & Juices", price: 400 },
  { name: "Vanilla Milkshake", category: "Shakes & Juices", price: 400 },
  { name: "Carrot Juice", category: "Shakes & Juices", price: 350 },
  { name: "Cocktail Juice", category: "Shakes & Juices", price: 400 },
  { name: "Jamaican Carrot", category: "Shakes & Juices", price: 350 },
  { name: "Lemon and Ginger", category: "Shakes & Juices", price: 300 },
  { name: "Mango Juice", category: "Shakes & Juices", price: 300 },
  { name: "Orange Juice", category: "Shakes & Juices", price: 300 },
  { name: "Passion Juice", category: "Shakes & Juices", price: 300 },
  { name: "Pineapple Juice", category: "Shakes & Juices", price: 350 },
  { name: "Pineapple Mint Juice", category: "Shakes & Juices", price: 350 },
  { name: "Sugarcane Ginger Lemon", category: "Shakes & Juices", price: 350 },
  { name: "Tamarind Juice", category: "Shakes & Juices", price: 400 },
  { name: "Vanilla Ice Cream Drink", category: "Shakes & Juices", price: 300 },
  { name: "Watermelon Juice", category: "Shakes & Juices", price: 250 },

  // STARTERS & SOUPS — PDF page 5
  { name: "Banana Split", category: "Starters & Soups", price: 450 },
  { name: "Caesar Salad Classic", category: "Starters & Soups", price: 750 },
  { name: "Chefs Salad", category: "Starters & Soups", price: 700 },
  { name: "Waldorf Salad", category: "Starters & Soups", price: 800 },
  { name: "Fruit Salad", category: "Starters & Soups", price: 400, note: "With honey and yoghurt" },
  { name: "Bone Soup Plain", category: "Starters & Soups", price: 300 },
  { name: "Bone Soup with Corn", category: "Starters & Soups", price: 400 },
  { name: "Chicken Broth with Bread Rolls", category: "Starters & Soups", price: 450 },
  { name: "Cream of Aubergines and Apple Soup", category: "Starters & Soups", price: 500, note: "With bread rolls" },
  { name: "Cream Roasted Potatoes and Pesto Croutons", category: "Starters & Soups", price: 500 },
  { name: "Mushroom Soup", category: "Starters & Soups", price: 500 },

  // LIGHT MEALS — PDF page 5
  { name: "BBQ Wing with Fries", category: "Light Meals", price: 900 },
  { name: "Beef Burger", category: "Light Meals", price: 800 },
  { name: "Beef Cheese Burger", category: "Light Meals", price: 800 },
  { name: "Beef Samosa (3 pcs) with Kachumbari", category: "Light Meals", price: 350 },
  { name: "Beef Sausage", category: "Light Meals", price: 250 },
  { name: "Beef Skewers", category: "Light Meals", price: 900 },
  { name: "Beer Battered Fish and Chips", category: "Light Meals", price: 750 },
  { name: "Buffalo Chicken Wings", category: "Light Meals", price: 900 },
  { name: "Butternut Squash with Bread Rolls", category: "Light Meals", price: 600 },
  { name: "Chefs Signature with Chips", category: "Light Meals", price: 1500 },
  { name: "Chicken Burger", category: "Light Meals", price: 900 },
  { name: "Chicken Cheese Burger", category: "Light Meals", price: 650 },
  { name: "Choma Sausage", category: "Light Meals", price: 150 },
  { name: "Choma Sausage with Chips", category: "Light Meals", price: 200 },
  { name: "Classic Burger", category: "Light Meals", price: 1100 },
  { name: "Fish Burger", category: "Light Meals", price: 1000 },
  { name: "Fish Fingers with Chips", category: "Light Meals", price: 850 },
  { name: "French Fries", category: "Light Meals", price: 350 },
  { name: "Honey Glazed Chicken Wings", category: "Light Meals", price: 800 },
  { name: "Kebabs (3 pcs)", category: "Light Meals", price: 900 },
  { name: "Mini Chips", category: "Light Meals", price: 200 },
  { name: "Periperi Chicken Wings", category: "Light Meals", price: 850 },
  { name: "Small World Mighty Burger", category: "Light Meals", price: 1500 },
  { name: "Snack Liver with Fries and Kachumbari", category: "Light Meals", price: 700 },
  { name: "Spicy Lamb Meat Balls", category: "Light Meals", price: 600 },
  { name: "Steacky Chicken Wings", category: "Light Meals", price: 850 },
  { name: "Toasted Sandwich", category: "Light Meals", price: 500 },
  { name: "Vegetable Burger", category: "Light Meals", price: 800 },

  // SIDE DISHES — PDF page 6
  { name: "Chapati", category: "Side Dishes", price: 200 },
  { name: "Chips Masala", category: "Side Dishes", price: 400 },
  { name: "Creamed Spinach", category: "Side Dishes", price: 200 },
  { name: "Githeri Minji", category: "Side Dishes", price: 300 },
  { name: "Githeri Special", category: "Side Dishes", price: 400 },
  { name: "Kachumbari", category: "Side Dishes", price: 200 },
  { name: "Mashed Potatoes", category: "Side Dishes", price: 350 },
  { name: "Mukimo", category: "Side Dishes", price: 350 },
  { name: "Papadum", category: "Side Dishes", price: 150 },
  { name: "Pilau", category: "Side Dishes", price: 300 },
  { name: "Plantain", category: "Side Dishes", price: 500 },
  { name: "Potatoes", category: "Side Dishes", price: 300 },
  { name: "Rice", category: "Side Dishes", price: 200 },
  { name: "Roast Potatoes", category: "Side Dishes", price: 350 },
  { name: "Sauted Potatoes", category: "Side Dishes", price: 350 },
  { name: "Spinach", category: "Side Dishes", price: 150 },
  { name: "Ugali", category: "Side Dishes", price: 200 },
  { name: "Ugali Wimbi", category: "Side Dishes", price: 200 },
  { name: "Vegetable Rice", category: "Side Dishes", price: 250, note: "Minji, carrots and capsicum" },

  // BEEF — PDF page 6
  { name: "Beef KG", category: "Beef", price: 1400 },
  { name: "Beef Steak", category: "Beef", price: 900 },
  { name: "Beef Stew", category: "Beef", price: 550 },
  { name: "Beef Stew with Green and Ugali", category: "Beef", price: 900 },
  { name: "Grilled Rib Eye Steak", category: "Beef", price: 1150 },
  { name: "Lamb Chops KG", category: "Beef", price: 2000 },
  { name: "Stir Fried Beef", category: "Beef", price: 1050 },
  { name: "T Bone Steak", category: "Beef", price: 1500 },

  // FISH — PDF page 6
  { name: "Coated Fish", category: "Fish", price: 850 },
  { name: "Tilapia Fillet", category: "Fish", price: 1500 },
  { name: "Whole Tilapia", category: "Fish", price: 1500 },

  // GOAT — PDF page 6
  { name: "Boiled Goat KG", category: "Goat", price: 1400 },
  { name: "Goat 1/2KG Fry", category: "Goat", price: 900 },
  { name: "Goat Arm (3 pax)", category: "Goat", price: 3300 },
  { name: "Goat Arm KG", category: "Goat", price: 2000 },
  { name: "Goat Choma KG", category: "Goat", price: 1800 },
  { name: "Goat Leg (5 pax)", category: "Goat", price: 4900 },
  { name: "Goat Rib KG", category: "Goat", price: 2500 },
  { name: "Goat Rib (5 pax)", category: "Goat", price: 4900 },
  { name: "Mbuzi Choma KG", category: "Goat", price: 2000 },
  { name: "Mbuzi Fry 1/2KG", category: "Goat", price: 700 },
  { name: "Mbuzi Fry KG", category: "Goat", price: 1400 },

  // CHICKEN & GRILL — PDF page 6
  { name: "Chicken Breast", category: "Chicken & Grill", price: 1050 },
  { name: "Chicken Broiler 1/4", category: "Chicken & Grill", price: 550 },
  { name: "Chicken Curry", category: "Chicken & Grill", price: 1000 },
  { name: "Chicken Kienyeji 1/2", category: "Chicken & Grill", price: 1500 },
  { name: "Chicken Kienyeji Full", category: "Chicken & Grill", price: 2800 },
  { name: "Full Chicken Broiler", category: "Chicken & Grill", price: 2200 },
  { name: "Roast Chicken 1/4 with Chips", category: "Chicken & Grill", price: 500 },
  { name: "Roast Chicken with Chips", category: "Chicken & Grill", price: 700 },
  { name: "Stir Fried Chicken", category: "Chicken & Grill", price: 750 },
  { name: "Kuku Choma Full", category: "Chicken & Grill", price: 2300 },

  // INDIAN CUISINE — PDF page 7
  { name: "Beef Curry", category: "Indian Cuisine", price: 1000, note: "Served with naan bread or rice" },
  { name: "Chicken Curry", category: "Indian Cuisine", price: 1000 },
  { name: "Swahili Veg Curry", category: "Indian Cuisine", price: 600, note: "Served with naan bread or rice" },
  { name: "Chicken Biryani", category: "Indian Cuisine", price: 1000 },
  { name: "Chicken Pilau", category: "Indian Cuisine", price: 900 },
  { name: "Beef Pilau", category: "Indian Cuisine", price: 900 },
  { name: "Mahamri", category: "Indian Cuisine", price: 100 },
  { name: "Buffet", category: "Indian Cuisine", price: 5500 },
  { name: "Chicken Drumstick", category: "Indian Cuisine", price: 1000 },

  // PASTA — PDF page 7
  { name: "Fusili Alfredo Chicken and Mushroom", category: "Pasta", price: 800 },
  { name: "Penne Bolognaise", category: "Pasta", price: 700 },
  { name: "Spaghetti Arabiata Spicy", category: "Pasta", price: 600 },

  // PLATTERS — PDF page 7
  { name: "Jumbo Platter", category: "Platters", price: 4500 },
  { name: "Kuku Mseto", category: "Platters", price: 4000 },
  { name: "Mini Platter", category: "Platters", price: 2000 },

  // VEGETARIAN — PDF page 7
  { name: "Lentils Curry, Rice, Chapati and Mashed Potatoes", category: "Vegetarian", price: 600 },
  { name: "Palak Panner, Rice, Chapati and Papadum", category: "Vegetarian", price: 900 },
  { name: "Tawa Mushroom, Rice, Chapati and Mashed Potatoes", category: "Vegetarian", price: 800 },
  { name: "Plantain", category: "Vegetarian", price: 500 },

  // KIDS MENU — PDF page 7
  { name: "Bolognaise Sauce with Mashed Potatoes", category: "Kids Menu", price: 500 },
  { name: "Chicken Lollipops", category: "Kids Menu", price: 600 },
  { name: "Chicken Nuggets with Fries", category: "Kids Menu", price: 550 },
  { name: "Chips and Sausage", category: "Kids Menu", price: 500 },
  { name: "Fish Fingers with Fries", category: "Kids Menu", price: 550 },
  { name: "Ice Cream", category: "Kids Menu", price: 400 },
  { name: "Kiddies Beef Burger with Chips", category: "Kids Menu", price: 500 },
  { name: "Spaghetti Bolognaise", category: "Kids Menu", price: 380 },
  { name: "Vanilla Latte Single", category: "Kids Menu", price: 350 },

  // DESSERTS — PDF page 8
  { name: "Fruit Salad", category: "Desserts", price: 500, note: "With honey and yoghurt" },
  { name: "Ice Cream", category: "Desserts", price: 400 },
  { name: "Banana Split", category: "Desserts", price: 400 },
  { name: "Mini Chocolate", category: "Desserts", price: 280 },
  { name: "Chocolate 80 Grams", category: "Desserts", price: 550 },

  // PIZZAS — PDF page 8
  { name: "Choma Pizza Medium", category: "Pizza", price: 900 },
  { name: "Choma Pizza Big", category: "Pizza", price: 1200 },
  { name: "Choma Pizza Small", category: "Pizza", price: 600 },
  { name: "Four Seasons Pizza Big", category: "Pizza", price: 900 },
  { name: "Four Seasons Pizza Medium", category: "Pizza", price: 900 },
  { name: "Four Seasons Pizza Small", category: "Pizza", price: 600 },
  { name: "Hawaiian Pizza Medium", category: "Pizza", price: 900 },
  { name: "Hawaiian Pizza Small", category: "Pizza", price: 600 },
  { name: "Kenyan Pizza Big", category: "Pizza", price: 1100 },
  { name: "Kenyan Pizza Medium", category: "Pizza", price: 800 },
  { name: "Kenyan Pizza Small", category: "Pizza", price: 500 },
  { name: "Kuku Pizza Big", category: "Pizza", price: 1200 },
  { name: "Kuku Pizza Medium", category: "Pizza", price: 900 },
  { name: "Kuku Pizza Small", category: "Pizza", price: 600 },
  { name: "Margherita Small", category: "Pizza", price: 500 },
  { name: "Margherita Big", category: "Pizza", price: 1100 },
  { name: "Margherita Medium", category: "Pizza", price: 800 },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [search, setSearch] = useState("");

  const visibleDishes = useMemo(() => {
    const query = search.trim().toLowerCase();

    return dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === "All" || dish.category === activeCategory;
      const matchesSearch =
        !query ||
        dish.name.toLowerCase().includes(query) ||
        dish.category.toLowerCase().includes(query) ||
        dish.note?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const formatPrice = (price: number) =>
    `KES ${price.toLocaleString("en-KE")}`;

  return (
    <main className="menu-premium min-h-screen bg-[#171412] text-white">
      <SiteHeader />
      <section className="relative isolate overflow-hidden border-b border-white/10 px-5 pb-12 pt-12 sm:px-8 sm:pt-20">
        <img
          src="/images/restaurant/restaurant-photo-01.jpg"
          alt="Chocolate City restaurant interior"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-gradient-to-r from-[#171412]/85 via-[#171412]/55 to-[#171412]/25"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#f0783e]">
            Chocolate City · Bar & Restaurant
          </p>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                Good food.
                <span className="block text-[#f0783e]">Great moments.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Explore our food and drinks menu, from breakfast favourites
                and freshly prepared meals to pizzas, platters and desserts.
              </p>
            </div>
            <a
              href="tel:+254703827955"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#c65d24] px-6 py-4 font-bold text-white transition hover:bg-[#e16d2d]"
            >
              Reserve a table · 0703 827 955
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider text-white/60">
            <span className="rounded-full border border-white/15 px-4 py-2">
              {dishes.length}+ menu listings
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              Prices in KES
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              Food & beverages
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="sticky top-0 z-20 -mx-5 border-b border-white/10 bg-[#171412]/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8">
          <label htmlFor="menu-search" className="sr-only">
            Search the menu
          </label>
          <input
            id="menu-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search dishes, drinks or categories..."
            className="w-full rounded-lg border border-[#8f7766]/30 bg-[#211b17] px-5 py-4 text-sm text-[#f5eee7] shadow-sm outline-none placeholder:text-[#b9a99d]/55 transition duration-300 focus:border-[#c9784e] focus:ring-1 focus:ring-[#c9784e]/30"
          />
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Browse by category
            </p>
            <select
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
              aria-label="Select menu category"
              className="w-full appearance-none rounded-lg border border-[#8f7766]/35 bg-[#211b17] px-4 py-3 text-sm text-[#f5eee7] outline-none transition duration-300 hover:border-[#c9784e]/70 focus:border-[#c9784e] sm:w-80"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-[#211b17]">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 mt-7 flex items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
          <p className="text-sm text-white/55">
            Showing <span className="font-bold text-white">{visibleDishes.length}</span>{" "}
            {visibleDishes.length === 1 ? "item" : "items"}
          </p>
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-sm font-semibold text-[#f0783e] hover:text-white"
            >
              Clear search
            </button>
          )}
        </div>

        <div className="mb-5 mt-10 border-b border-[#8f7766]/25 pb-7 sm:mt-14">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f0783e]">
            The Chocolate City selection
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.035em] text-[#f5eee7] sm:text-[2.65rem]">
                {activeCategory === "All" ? "Our Menu" : activeCategory}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                Thoughtfully prepared favourites, made for good food and great moments.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.16em] text-white/40">
              {visibleDishes.length} {visibleDishes.length === 1 ? "item" : "items"}
            </span>
          </div>
        </div>

        {visibleDishes.length > 0 ? (
          <div className="grid gap-x-14 lg:grid-cols-2">
            {visibleDishes.map((dish, index) => (
              <article
                key={`${dish.category}-${dish.name}-${index}`}
                className="group border-b border-white/[0.08] py-6 transition-all duration-300 hover:border-[#c9784e]/55 hover:bg-white/[0.015] sm:py-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="menu-dish-category mb-2.5 text-[9px] font-semibold uppercase tracking-[0.27em] text-[#d98255]/90">
                      {dish.category}
                    </p>
                    <h2 className="menu-dish-name font-serif text-[1.3rem] font-normal tracking-[-0.02em] text-[#f5eee7] transition-colors duration-300 group-hover:text-[#e8a17c]">
                      {dish.name}
                    </h2>
                  </div>
                  <span className="menu-dish-price">
                    {dish.price === undefined ? "Ask us" : formatPrice(dish.price)}
                  </span>
                </div>
                {dish.note && (
                  <p className="menu-dish-description mt-2.5 max-w-md text-[12px] leading-6 text-[#b9aaa0]/65">
                    {dish.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 px-6 py-16 text-center">
            <h2 className="text-xl font-bold">No menu items found</h2>
            <p className="mt-2 text-sm text-white/55">
              Try another search term or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-full bg-[#c65d24] px-5 py-3 text-sm font-bold hover:bg-[#e16d2d]"
            >
              Show full menu
            </button>
          </div>
        )}
      </section>

      <section className="border-t border-white/10 bg-[#211b17] px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-[#c65d24]/30 bg-[#c65d24]/[0.08] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0783e]">
              Your table is waiting
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Make it a Chocolate City moment.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
              Call our team to ask about availability, menu items and current prices.
            </p>
          </div>
          <a
            href="tel:+254703827955"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#c65d24] px-7 py-4 font-bold text-white hover:bg-[#e16d2d]"
          >
            Call 0703 827 955
          </a>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-5 text-sm text-white/50">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/locations" className="hover:text-white">Our locations</Link>
          <Link href="/events" className="hover:text-white">Events</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
        <p className="mx-auto mt-6 max-w-7xl text-xs leading-5 text-white/35">
          Menu items and prices are transcribed from the supplied Chocolate City
          Food Menu 2026 PDF. Please confirm availability and prices with the
          restaurant before ordering. Some spellings in the source menu have
          been standardized for readability.
        </p>
      </section>
    </main>
  );
}
