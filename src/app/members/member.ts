export class Member {
    constructor(
        public codeName: string,
        public firstName: string,
        public lastName: string,
        public specialty: string,
        public startedMagic?: string,
        public intro?: string,
        public batch?: string,
        public fb_page?: string,
        public ig_page?: string,
        public tw_page?: string
    ) { }

}
