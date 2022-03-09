import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/ICategory.repository";
import { CategoryRepository } from "../../modules/cars/repositories/implementations/Categories.repository";

// ICategoriesRepository
container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);
