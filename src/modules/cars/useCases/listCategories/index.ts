import { CategoryRepository } from "../../repositories/implementations/Category.repository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepository = CategoryRepository.getInstance();

const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository);

const listCategoriesController = new ListCategoriesController(
    listCategoryUseCase
);

export { listCategoriesController };
