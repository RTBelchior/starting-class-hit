import { User, UserCredential } from "firebase/auth";
import { Observable } from "rxjs/internal/Observable";

export interface AuthInterface {
   signIn(email: string, password: string):Observable<UserCredential>;

   logOut(): Observable<void>;

   isAuthenticated():boolean;
   
   getUser(): Observable<User| null> 
}