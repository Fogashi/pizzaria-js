import { Response,Request } from "express";
import { ListORdersService } from "../../services/order/ListOrderService";

class ListOrdersController{
    async handle(req: Request,res:Response){
        const listOrdersService = new ListORdersService();
        const orders = await listOrdersService.execute();

        return res.json(orders);

    }
}

export {ListOrdersController}