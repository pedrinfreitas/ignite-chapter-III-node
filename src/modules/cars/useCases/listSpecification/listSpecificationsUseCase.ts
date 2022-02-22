import { Specification } from "../../models/Specification.model";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecification.repository";

class ListSpecificationsUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute(): Specification[] {
        const specifications = this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
