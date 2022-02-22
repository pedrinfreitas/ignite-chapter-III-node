import { Category } from "../../models/Category.model";
import { ICategoryRepository } from "../../repositories/implementations/ICategory.repository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute(): Category[] {
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
