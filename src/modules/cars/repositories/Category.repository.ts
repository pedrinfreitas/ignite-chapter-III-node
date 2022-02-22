import { Category } from "../models/Category.model";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "./implementations/ICategory.repository";

class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: CategoryRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }

        return CategoryRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find((e) => e.name === name);

        return category;
    }
}

export { CategoryRepository };
