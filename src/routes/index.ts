import { Router } from "express";

import { categoryRoutes } from "./category.route";
import { specificationRoutes } from "./specification.route";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/specifications", specificationRoutes);

export { router };
