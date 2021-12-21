export class VillainDto{
    constructor(
        public name? : string,
        public alias? : string,
        public bio ?: string,
        public gender?: string,
        public birthday?: Date,
        public website?: string,
        public website_name? : string,
        public planet ?: string,
        public strength?: number,
        public health?: number,
        public mana ?: number,
        public defense ?: number,
        public evil_level ?: number,
        public img ?: string
    ){}
}

export class VillainListDto{
    constructor(
        public id ?: number,
        public name? : string,
        public img ? : string,
        public alias ?: string
    ){}
}

export class VillainDetailDto extends VillainDto{}