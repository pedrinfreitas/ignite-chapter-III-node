import { SpecificationRepository } from "../../repositories/Specification.repository";
import { ListSpecificationsController } from "./listSpecificationsController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
    specificationRepository
);

const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
);

export { listSpecificationsController };
