import { Component, OnInit } from '@angular/core';
import { VillainService } from '../villain.service';
import { VillainDto } from '../villain.dto';

@Component({
    selector: 'app-villain-secret-input',
    templateUrl: './villain-secret-input.component.html',
})
export class VillainSecretInput implements OnInit {


    constructor(private webApi: VillainService) {
        this.villain = new VillainDto();
     }


    async ngOnInit() {

    }


    villain: VillainDto;
    async submitForm() {
        console.log("submitted")
        await this.webApi.setEvilData(this.villain);
    }
} 