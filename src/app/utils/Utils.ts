import { Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import * as jwt_decode from "jwt-decode";
import { User } from '../models/User';
export default class Utils {


    constructor() { }


    static getCurrentUserRole(storage: WebStorageService): string {
        try {
            //decode the token and get the role
            let token = storage.get('Authorization') ;
            let role = (jwt_decode(token.replace('Bearer ', '')).sub);
            return role;
        }
        catch (Error) {
            return null;
        }
    }


}
