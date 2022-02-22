import { CategoryRepository } from "../../repositories/implementations/Category.repository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImporCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();

const importCatetogyUseCase = new ImporCategoryUseCase(categoryRepository);

const importCategoryController = new ImportCategoryController(
    importCatetogyUseCase
);

export { importCategoryController };
