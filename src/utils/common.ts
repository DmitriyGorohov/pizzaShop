import { Screens } from '@src/navigation/const';

type MenuItem = {
    id: string; // Уникальный идентификатор
    title: string; // Заголовок
    route: string; // Путь для навигации
};

export const menuData: MenuItem[] = [
    {
        id: '1',
        title: 'Restaurant',
        route: Screens.SHOP,
    },
    {
        id: '2',
        title: 'Reservation',
        route: Screens.RESERVATION,
    },
    {
        id: '3',
        title: 'Loyalty card',
        route: Screens.BONUSES,
    },
    {
        id: '4',
        title: 'Contacts',
        route: Screens.CONTACTS,
    },
    {
        id: '5',
        title: 'Events',
        route: Screens.EVENTS,
    },
];

export type Product = {
    id: number;
    title: string;
    image: ReturnType<typeof require>;
    price: number;
    quantity?: number;
    oldPrice?: number;
};

export const breakfasts: Product[] = [
    {
        id: 1,
        title: 'Margherita Pizza',
        image: require('@src/assets/img-pizza/pizza/pizza-1/Rectangle2.png'),
        price: 12.99,
    },
    {
        id: 2,
        title: 'Pepperoni Pizza',
        image: require('@src/assets/img-pizza/pizza/pizza-2/pizza-2.png'),
        price: 14.29,
    },
    {
        id: 3,
        title: 'Vegetarian Pizza',
        image: require('@src/assets/img-pizza/pizza/pizza-3/image.png'),
        price: 13.29,
    },
    {
        id: 4,
        title: 'BBQ Chicken Pizza',
        image: require('@src/assets/img-pizza/pizza/pizza-4/image.png'),
        price: 11.85,
    },
    {
        id: 5,
        title: 'Four Cheese Pizza',
        image: require('@src/assets/img-pizza/pizza/pizza-5/image.png'),
        price: 10.88,
    },
];

export const lunches: Product[] = [
    {
        id: 5435,
        title: 'Spicy Jalapeño Burger',
        image: require('@src/assets/img-pizza/burger/burger-1/image.png'),
        price: 18.85,
    },
    {
        id: 115,
        title: 'Truffle Mushroom Burger',
        image: require('@src/assets/img-pizza/burger/burger-2/image.png'),
        price: 15.85,
    },
    {
        id: 235,
        title: 'Mediterranean Lamb Burger',
        image: require('@src/assets/img-pizza/burger/burger-3/image.png'),
        price: 13.85,
    },
    {
        id: 1245,
        title: 'Classic Cheeseburger',
        image: require('@src/assets/img-pizza/burger/burger-4/image.png'),
        price: 18.25,
    },
    {
        id: 2225,
        title: 'BBQ Bacon Burger',
        image: require('@src/assets/img-pizza/burger/burger-5/image.png'),
        price: 22.15,
    },
    {
        id: 1535,
        title: 'Veggie Delight Burger',
        image: require('@src/assets/img-pizza/burger/burger-6/image.png'),
        price: 10.15,
    },
];

export const dinners: Product[] = [
    {
        id: 15352,
        title: 'Bruschetta Trio',
        image: require('@src/assets/img-pizza/appe/appe-1/image.png'),
        price: 10.15,
    },
    {
        id: 15351,
        title: 'Stuffed Mushrooms',
        image: require('@src/assets/img-pizza/appe/appe-2/image.png'),
        price: 9.15,
    },
    {
        id: 15354,
        title: 'Crispy Calamari Rings',
        image: require('@src/assets/img-pizza/appe/appe-3/image.png'),
        price: 11.15,
    },
    {
        id: 15357,
        title: 'Spinach and Artichoke Dip',
        image: require('@src/assets/img-pizza/appe/appe-4/image.png'),
        price: 7.15,
    },
];

export const allProducts: Product[] = [
    {
        id: 11,
        title: 'Quinoa and Avocado Salad',
        image: require('@src/assets/img-pizza/salad/salad-1/image.png'),
        price: 12.99,
    },
    {
        id: 22,
        title: 'Greek Salad',
        image: require('@src/assets/img-pizza/salad/salad-2/image.png'),
        price: 14.29,
    },
    {
        id: 33,
        title: 'Caprese Salad',
        image: require('@src/assets/img-pizza/salad/salad-3/image.png'),
        price: 13.29,
    },
    {
        id: 44,
        title: 'Asian Sesame Salad',
        image: require('@src/assets/img-pizza/salad/salad-4/image.png'),
        price: 11.85,
    },
    {
        id: 55,
        title: 'Caesar Salad',
        image: require('@src/assets/img-pizza/salad/salad-5/image.png'),
        price: 10.88,
    },
];

export type EventType = {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    image: ReturnType<typeof require>;
};

export const events: EventType[] = [
    {
        id: 1,
        title: 'Wine & Cheese Pairing Night',
        description:
            'Embark on a journey of refined tastes with our exclusive Wine & Cheese Pairing Night. This event is perfect for wine enthusiasts and cheese connoisseurs alike. Enjoy a curated selection of the finest wines from around the world, expertly paired with an array of artisan cheeses that complement their flavors. Our sommelier will guide you through the tasting experience, sharing insights about each pairing and the stories behind them. The evening will take place in our elegant dining room, set with soft lighting and warm decor to create a sophisticated ambiance. Whether you\'re a seasoned taster or new to wine, this event promises to be an unforgettable experience. Limited seats are available for an intimate setting.',
        date: 'Saturday, March 16, 2024',
        time: 'Time: 7:00 PM - 10:00 PM',
        image: require('@src/assets/img-pizza/events/event-1/event-1.png'),
    },
    {
        id: 2,
        title: 'Live Cooking Show',
        description:
            'Join us for an exciting Live Cooking Show where culinary art comes to life. This one-of-a-kind event will feature our head chef preparing a gourmet three-course meal live in front of the audience. Learn the secrets of crafting exquisite dishes as the chef explains techniques, shares recipes, and offers professional tips throughout the evening. Guests will be served each course shortly after its preparation, ensuring a fresh and flavorful dining experience. The event will take place in our open-kitchen dining area, allowing you to observe the precision and creativity behind every dish. Perfect for food lovers and aspiring cooks, this interactive evening combines entertainment, education, and exceptional cuisine. Seats are limited for an exclusive experience.',
        date: 'Wednesday, April 3, 2024',
        time: 'Time: 6:30 PM - 9:00 PM',
        image: require('@src/assets/img-pizza/events/event-2/event-2.png'),
    },
    {
        id: 3,
        title: 'Mediterranean Feast Night',
        description:
            'Join us for an exciting Live Cooking Show where culinary art comes to life. This one-of-a-kind event will feature our head chef preparing a gourmet three-course meal live in front of the audience. Learn the secrets of crafting exquisite dishes as the chef explains techniques, shares recipes, and offers professional tips throughout the evening. Guests will be served each course shortly after its preparation, ensuring a fresh and flavorful dining experience. The event will take place in our open-kitchen dining area, allowing you to observe the precision and creativity behind every dish. Perfect for food lovers and aspiring cooks, this interactive evening combines entertainment, education, and exceptional cuisine. Seats are limited for an exclusive experience.',
        date: 'Friday, May 10, 2024',
        time: 'Time: 7:00 PM - 10:00 PM',
        image: require('@src/assets/img-pizza/events/event-3/event-3.png'),
    },
    {
        id: 4,
        title: 'Kids’ Pizza Workshop',
        description:
            'Join us for an exciting Live Cooking Show where culinary art comes to life. This one-of-a-kind event will feature our head chef preparing a gourmet three-course meal live in front of the audience. Learn the secrets of crafting exquisite dishes as the chef explains techniques, shares recipes, and offers professional tips throughout the evening. Guests will be served each course shortly after its preparation, ensuring a fresh and flavorful dining experience. The event will take place in our open-kitchen dining area, allowing you to observe the precision and creativity behind every dish. Perfect for food lovers and aspiring cooks, this interactive evening combines entertainment, education, and exceptional cuisine. Seats are limited for an exclusive experience.',
        date: 'Sunday, June 2, 2024',
        time: 'Time: 4:00 PM - 6:00 PM',
        image: require('@src/assets/img-pizza/events/event-4/event-4.png'),
    },
];
