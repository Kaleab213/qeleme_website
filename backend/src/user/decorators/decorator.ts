
import { createParamDecorator ,ExecutionContext} from "@nestjs/common";


export const UserDecorator = createParamDecorator(
    (data:string | unknown , context:ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        if(!data) return request.user;
        return request.user['data'];

        
    },
    )
  

