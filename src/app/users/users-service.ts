import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../Shared/user.model";

@Injectable({ providedIn: 'root', })
export class UsersService {
    private users: User[] = [
        new User("Konstantinos", "Koutsonasios", "Kastelorizou 3", new Date('1988-10-10')),
        new User("John", "Ferman", "Kos 4", new Date('1945-1-17')),
        new User("Simon", "Says", "Kavalas 8", new Date('1976-3-6')),
        new User("Jimmy", "Takamuree", "Tokiou 46", new Date('1992-5-9')),
        new User("Sebastian", "Linus", "Amvourgou 9", new Date('1977-7-4')),
        new User("Ermolaos", "Polidorou", "Attikis 14", new Date('2000-11-5')),
    ];

    getUsers() : Observable<User[]> {
        const users = of(this.users);
        return users;
    }

    createUser(user: User){
        this.users.push(user);
    }

    deleteUser(id: number){
        this.users.splice(id, 1);
    }

}