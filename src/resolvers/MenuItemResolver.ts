import { db } from "../utils/db";

export const menuItemResolver: any = {
  MenuItem: {
    restaurant: async (parent: any) => {
      return db.getRestaurantById(parent.restaurantId);
    },
    dish: async (parent: any) => {
      return db.getDishById(parent.dishId);
    },
  },
  Mutation: {
    addToMenu: async (
      _: any,
      args: { restaurantId: string; dishId: string }
    ) => {
      const { restaurantId, dishId } = args;
      try {
        const menuItem = await db.addToMenu(restaurantId, dishId);
        return menuItem;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Failed to add dish to menu: ${error.message}`);
        } else {
          throw new Error("An unknown error occurred while adding dish to menu");
        }
      }
    },
  },
};

export default menuItemResolver;
