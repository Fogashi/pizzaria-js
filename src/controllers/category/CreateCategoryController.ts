import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoruService";

class CreateCategoryController{
    async handle(req: Request, res: Response){
        const {name } = req.body;
const createaCategoryService = new CreateCategoryService

const category = await createaCategoryService.execute({
    name
});

return res.json(category)
    }
}

export { CreateCategoryController }