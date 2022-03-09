import { Category } from "../../entities/Category.entities";
import { ICategoryRepository } from "../../repositories/ICategory.repository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase };
