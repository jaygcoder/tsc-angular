export class Member {
    constructor(
        public id: number,
        public codeName: string,
        public firstName: string,
        public lastName: string,
        public type: string,
        public batch: number,
        public fb_page?: string,
        public ig_page?: string,
        public tw_page?: string
    ) { }

}
