import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Marc-André ter Stegen", role: "Goalkeeper", asal:"Jerman", club: "Barcelona", tinggi: 187, nomor: 1 },
        { id: 2, name: "Gerard Piqué", role: "Defender", asal:"Spanyol", club: "Barcelona", tinggi: 194, nomor: 3 },
        { id: 3, name: "Ivan Rakitić", role: "Midfielder", asal:"Swiss", club: "Barcelona", tinggi: 184, nomor: 4 },
        { id: 4, name: "Sergio Ramos", role: "Midfielder", asal:"Spanyol", club: "Real Madrid", tinggi: 183, nomor: 4 },
        { id: 5, name: "Denis Suárez", role: "Midfielder", asal:"Spanyol", club: "Celta Vigo", tinggi: 178, nomor: 6 },
        { id: 6, name: "Arda Turan", role: "Midfielder", asal:"Turki", club: "Barcelona", tinggi: 176, nomor: 7 },
        { id: 7, name: "Andrés Iniesta", role: "Midfielder", asal:"Spanyol", club: "Vissel Kobe", tinggi: 170, nomor: 8 },
        { id: 8, name: "Luis Suárez", role: "Forward", asal:"Uruguay", club: "Barcelona", tinggi: 181, nomor: 9 },
        { id: 9, name: "Lionel Messi", role: "Forward", asal:"Argentina", club: "Barcelona", tinggi: 170, nomor: 10 },
        { id: 10, name: "Neymar da Silva Santos Júnior ", role: "Forward", asal:"Brazil", club: "Paris Saint Germain", tinggi: 175, nomor: 10 },
        { id: 11, name: "Rafael Alcántara do Nascimento", role: "Midfielder", asal:"Brazil", club: "Barcelona", tinggi: 178, nomor: 12 },
        { id: 12, name: "Jasper Cillessen", role: "Goalkeeper", asal:"Belanda", club: "Barcelona", tinggi: 188, nomor: 13 },
        { id: 13, name: "Javier Alejandro Mascherano ", role: "Defender", asal:"Argentina", club: "Hebei China Fortune", tinggi: 174, nomor: 14 },
        { id: 14, name: "Paco Alcácer", role: "Forward", asal:"Spanyol", club: "Borussia Dortmund", tinggi: 174, nomor: 9 },
        { id: 15, name: "Jordi Alba", role: "Defender", asal:"Spanyol", club: "Barcelona", tinggi: 170, nomor: 18 },
        { id: 16, name: "Lucas Digne", role: "Defender", asal:"Franch", club: "Barcelona", tinggi: 178, nomor: 19 },
        { id: 17, name: "Sergi Roberto", role: "Midfielder", asal:"Spanyol", club: "Barcelona", tinggi: 178, nomor: 20 },
        { id: 18, name: "André Gomes", role: "Midfielder", asal:"Spanyol", club: "Everton", tinggi: 188, nomor: 21 },
        { id: 19, name: "Aleix Vidal", role: "Midfielder", asal:"Spanyol", club: "Barcelona", tinggi: 176, nomor: 22 },
        { id: 20, name: "Samuel Yves Umtiti", role: "Defender", asal:"Cameroon", club: "Barcelona", tinggi: 182, nomor: 22 },
        { id: 21, name: "Jérémy Mathieu", role: "Defender", asal:"Franch", club: "Sporting CP", tinggi: 189, nomor: 1 },
        { id: 22, name: "Jordi Masip López", role: "Goalkeeper", asal:"Spanyol", club: "Barcelona", tinggi: 180, nomor: 25 }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
