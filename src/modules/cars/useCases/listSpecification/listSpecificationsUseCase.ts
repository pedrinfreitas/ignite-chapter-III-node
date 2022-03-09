import { Specification } from "../../entities/Specification.entities";
import { ISpecificationRepository } from "../../repositories/ISpecification.repository";

class ListSpecificationsUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute(): Specification[] {
        const specifications = this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
