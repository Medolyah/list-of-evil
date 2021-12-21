import { VillainListDto, VillainDetailDto } from './villain.dto';

export class VillainModel{
    constructor( key, dto: VillainListDto){
        this.link = key;
        this.img = dto.img;
        this.name = VillainHelperClass.getName(dto.alias, dto.name);
    }
    public link : string;
    public img : string;
    public name: string;
}

export class VillainDetailModel extends VillainDetailDto{
    constructor(dto : VillainDetailDto){
        super();
        this.name = VillainHelperClass.getName(dto.alias, dto.name);
        this.bio = dto.bio;
        this.gender = dto.gender;
        this.birthday = dto.birthday;
        this.website = dto.website;
        this.website_name = dto.website_name;
        this.planet = dto.planet;
        this.strength = dto.strength;
        this.health = dto.health;
        this.mana = dto.mana;
        this.defense = dto.defense;
        this.evil_level = dto.evil_level / 100;
        this.evil_level_color = VillainDetailModel.evil_severity(dto.evil_level);
        this.img = dto.img;
    }
    public name? : string;
    public bio ?: string;
    public gender?: string;
    public birthday?: Date;
    public website?: string;
    public website_name? : string;
    public planet ?: string;
    public strength?: number;
    public health?: number;
    public mana ?: number;
    public defense ?: number;
    public evil_level ?: number;
    public evil_level_color ? : string;
    public img ?: string;
    

    public static evil_severity(evil_level :number){

        if(evil_level >= 75){
            return "primary"
        }
        else if(evil_level >= 50){
            return "danger"
        }
        else if(evil_level >= 25){
            return "warning"
        }
        else{
            return "success"
        }
    }


}

export class VillainHelperClass{
    public static getName(alias, name){
        let finalName; 
        if (alias && name){
            finalName = alias + " (" + name + ")";
        }
        else if (name && !alias){
            finalName = name;
        }
        else if (alias + !name){
            finalName = alias;
        }
        else{
            finalName ="Unkown"
        }
        return finalName;
    }
}
