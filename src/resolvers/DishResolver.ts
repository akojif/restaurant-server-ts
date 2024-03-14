import { db } from '../utils/db';

export const dishResolver = {
    Dish: {
        toppings: async (parent: any) => {
            return db.getDishToppings(parent.id);
        },
        extras: async (parent: any) => {
           return db.getDishExtras(parent.id);
        }
    },
    Mutation: {
        createDish: async (_: any, args: { restaurantId: string, name: string, description: string, price: number }) => {
            const { restaurantId, name, description, price } = args;
            try {
                const dish = await db.createDish(restaurantId, name, description, price);
                return dish;
            } catch (error:any) {
                throw new Error(`Failed to create dish: ${error.message}`);
            }
        },
        addToppingToDish: async (_: any, args: { dishId: string, toppingId: string }) => {
            const { dishId, toppingId } = args;
            try {
                await db.addToppingToDish(dishId, toppingId);
                const dish = await db.getDishById(dishId);
                return dish;
            } catch (error:any) {
                throw new Error(`Failed to add topping to dish: ${error.message}`);
            }
        },
        addExtraToDish: async (_: any, args: { dishId: string, extraId: string }) => {
            const { dishId, extraId } = args;
            try {
                await db.addExtraToDish(dishId, extraId);
                const dish = await db.getDishById(dishId);
                return dish;
            } catch (error:any) {
                throw new Error(`Failed to add extra to dish: ${error.message}`);
            }
        }
    }
};