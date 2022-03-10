import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/ICategory.repository";
import { CategoryRepository } from "../../modules/cars/repositories/implementations/Categories.repository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/Specification.repository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecification.repository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);
