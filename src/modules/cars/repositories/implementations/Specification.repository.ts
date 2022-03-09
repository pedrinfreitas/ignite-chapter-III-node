import { Specification } from "../../entities/Specification.entities";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../ISpecification.repository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: SpecificationRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
        });

        this.specifications.push(specification);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((e) => e.name === name);

        return specification;
    }
}

export { SpecificationRepository };
