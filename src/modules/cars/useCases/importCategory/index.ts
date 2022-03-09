import { CategoryRepository } from "../../repositories/implementations/Categories.repository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImporCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = null;

const importCatetogyUseCase = new ImporCategoryUseCase(categoryRepository);

const importCategoryController = new ImportCategoryController(
    importCatetogyUseCase
);

export { importCategoryController };
