import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VillainDto, VillainListDto, VillainDetailDto } from './villain.dto';
import { VillainModel, VillainDetailModel } from './villain.model';
import { NgModel } from '@angular/forms';


const API_URL = "https://villains-accf8-default-rtdb.europe-west1.firebasedatabase.app/"
@Injectable({ providedIn: "root" })
export class VillainService {
    constructor(
        private http: HttpClient
    ) {

    }


    setEvilData(dto: VillainDto) {
        this.http.post(API_URL + "villains.json", dto).subscribe();
    }

    async getEvilDetail(id: string){
        let dto :VillainDetailDto[] = await this.getEvilListDtos().toPromise();
        let model;
        Object.keys(dto).map((key) => {
            if(key == id)
            model = new VillainDetailModel(dto[key])
          });
        return model;
    }

    async getEvilList(){
        let dto :VillainListDto[] = await this.getEvilListDtos().toPromise();
        let item;
        let model = [];
        Object.keys(dto).map((key) => {
          item = new VillainModel(key, dto[key])
          model.push(item);
        });
        return model;
    }

    getEvilListDtos() {
        return this.http.get<VillainDetailDto[]>(API_URL + 'villains.json');
        // let dto = this.http.get("https://Admin:nimdA123456@clusterdynamis.w6dd1.mongodb.net/DynamisDB?retryWrites=true&w=majority").subscribe();
        // console.log(dto)
        // return(dto);
    }

}