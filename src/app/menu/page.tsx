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
    <main className="menu-premium min-h-screen bg-[#f7f2eb] text-[#291d18]">
      <SiteHeader />

      {/* Editorial hero */}
      <section className="relative isolate flex min-h-[570px] items-end overflow-hidden bg-[#211712] px-5 pb-16 pt-24 sm:min-h-[650px] sm:px-10 sm:pb-20">
        <img
          src="/images/restaurant/restaurant-photo-02.jpg"
          alt="Chocolate City dining experience"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1d1511]/90 via-[#1d1511]/60 to-[#1d1511]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1d1511]/70 via-transparent to-[#1d1511]/15" />

        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#e9a17b]">
            Chocolate City · Bar & Restaurant
          </p>

          <h1 className="max-w-4xl font-serif text-6xl font-normal leading-[0.98] tracking-[-0.045em] text-[#fffaf4] sm:text-7xl md:text-8xl">
            A menu made
            <br />
            for <em className="text-[#e9a17b]">moments.</em>
          </h1>

          <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              From slow mornings and familiar favourites to memorable meals
              shared around the table. Find something you'll love.
            </p>

            <a
              href="#menu-selection"
              className="inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#e9a17b] pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#e9a17b]"
            >
              Explore the menu <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
            <span>{dishes.length} menu listings</span>
            <span>{categories.length - 1} categories</span>
            <span>Prices in KES</span>
          </div>
        </div>
      </section>

      {/* Menu selection */}
      <section
        id="menu-selection"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b95b32]">
              Discover something delicious
            </p>
            <h2 className="font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-6xl">
              The menu
              <br />
              <em>at Chocolate City.</em>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#796b61] md:justify-self-end">
            Explore our selection of food and beverages. Browse by category
            or search for a particular dish or drink.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 border-y border-[#291d18]/15 py-5">
          <label
            htmlFor="menu-search"
            className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#796b61]"
          >
            Find your favourite
          </label>

          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="text-2xl text-[#b95b32]">
              ⌕
            </span>
            <input
              id="menu-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search dishes, drinks or categories..."
              className="w-full bg-transparent py-2 text-base text-[#291d18] outline-none placeholder:text-[#9b8d82] sm:text-lg"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-xs font-semibold uppercase tracking-wider text-[#b95b32] hover:text-[#291d18]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category navigation */}
        <div className="mb-12">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#796b61]">
            Browse categories
          </p>

          <div className="flex gap-2 overflow-x-auto pb-4">
            {categories.map((category) => {
              const selected = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={selected}
                  className={`shrink-0 rounded-full border px-5 py-3 text-xs font-semibold transition ${
                    selected
                      ? "border-[#291d18] bg-[#291d18] text-[#fffaf4]"
                      : "border-[#291d18]/20 bg-transparent text-[#c8b6a4] hover:border-[#b95b32] hover:text-[#b95b32]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results heading */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[#291d18]/15 pb-5">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b95b32]">
              The selection
            </p>
            <h3 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
              {activeCategory === "All" ? "Our complete menu" : activeCategory}
            </h3>
          </div>

          <p className="text-xs text-[#796b61]">
            Showing <strong className="text-[#291d18]">{visibleDishes.length}</strong>{" "}
            {visibleDishes.length === 1 ? "item" : "items"}
          </p>
        </div>

        {/* Dish listings */}
        {visibleDishes.length > 0 ? (
          <div className="grid gap-x-14 lg:grid-cols-2">
            {visibleDishes.map((dish, index) => (
              <article
                key={`${dish.category}-${dish.name}-${index}`}
                className="group border-b border-[#291d18]/10 py-6 transition-colors hover:border-[#b95b32]/50 sm:py-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.23em] text-[#b95b32]">
                      {dish.category}
                    </p>
                    <h4 className="font-serif text-xl font-normal leading-snug tracking-[-0.02em] text-[#f3e8d9] transition-colors group-hover:text-[#e58b5d] sm:text-2xl">
                      {dish.name}
                    </h4>
                  </div>

                  <span className="shrink-0 pt-5 text-sm font-semibold tabular-nums text-[#c8b6a4]">
                    {dish.price === undefined ? "Ask us" : formatPrice(dish.price)}
                  </span>
                </div>

                {dish.note && (
                  <p className="mt-3 max-w-md text-xs leading-6 text-[#796b61]">
                    {dish.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-[#291d18]/15 px-6 py-16 text-center">
            <h3 className="font-serif text-3xl">Nothing found just yet.</h3>
            <p className="mt-3 text-sm text-[#796b61]">
              Try another search term or browse a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-6 rounded-full bg-[#291d18] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#b95b32]"
            >
              View the full menu
            </button>
          </div>
        )}

        <p className="mt-10 text-[11px] leading-6 text-[#796b61]">
          Menu items and prices are transcribed from the supplied Chocolate
          City Food Menu 2026 PDF. Please confirm availability and prices
          with the restaurant before ordering.
        </p>
      </section>

      {/* Reservation invitation */}
      <section className="relative isolate overflow-hidden bg-[#291d18] px-5 py-20 text-[#fffaf4] sm:px-8 sm:py-24">
        <img
          src="/images/restaurant/restaurant-photo-18.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-[#291d18]/75" />

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#e9a17b]">
              Your table is waiting
            </p>
            <h2 className="max-w-2xl font-serif text-4xl font-normal leading-tight tracking-[-0.035em] sm:text-6xl">
              Good food is better
              <br />
              <em>when shared.</em>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">
              Planning a meal or a special gathering? Speak to our team about
              reservations and menu availability.
            </p>
          </div>

          <a
            href="tel:+254703827955"
            className="inline-flex w-fit shrink-0 items-center justify-center border border-[#e9a17b] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#e9a17b] hover:text-[#291d18]"
          >
            Call 0703 827 955
          </a>
        </div>
      </section>

      <footer className="bg-[#211712] px-5 py-8 text-[#fffaf4]/60 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 text-xs">
          <p>Chocolate City · Bar & Restaurant</p>
          <nav className="flex flex-wrap gap-5">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/locations" className="transition hover:text-white">Locations</Link>
            <Link href="/events" className="transition hover:text-white">Events</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
