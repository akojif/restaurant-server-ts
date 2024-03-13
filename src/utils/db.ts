import pgPromise, { IDatabase } from "pg-promise";

class Database {
  private db: IDatabase<any>;

  constructor() {
    const pgp = pgPromise({});
    const dbConfig = {
      host: "localhost",
      port: 5432,
      database: "random_restaurant_db",
      user: "randomdude",
      password: "gsHo@aIQR+U-DaWqN",
    };
    this.db = pgp(dbConfig);
  }

  async createDish(
    restaurantId: string,
    name: string,
    description: string,
    price: number
  ) {
    const query =
      "INSERT INTO dishes (restaurant_id, name, description, price) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [restaurantId, name, description, price];
    return this.db.one(query, values);
  }

  async addToMenu(restaurantId: string, dishId: string) {
    const query =
      "INSERT INTO menu_items (restaurant_id, dish_id) VALUES ($1, $2) RETURNING *";
    const values = [restaurantId, dishId];
    return this.db.one(query, values);
  }

  async addToppingToDish(dishId: string, toppingId: string) {
    const query =
      "INSERT INTO dish_toppings (dish_id, topping_id) VALUES ($1, $2) RETURNING *";
    const values = [dishId, toppingId];
    return this.db.one(query, values);
  }

  async addExtraToDish(dishId: string, extraId: string) {
    const query =
      "INSERT INTO dish_extras (dish_id, extra_id) VALUES ($1, $2) RETURNING *";
    const values = [dishId, extraId];
    return this.db.one(query, values);
  }

  async getAllRestaurants() {
    const query = "SELECT * FROM restaurants";
    return this.db.any(query);
  }
}

export const db = new Database();