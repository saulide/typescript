export interface ImageProperties {
    id?: string;
    user?: string;
    source?: string;
    [key: string] : any; // index signature
}

export class Image {
    [key: string] : any;
    constructor(attr: ImageProperties = {}) {
        // tslint:disable-next-line: forin
        for (const key in attr) {
            this[key] = attr[key];
        }
    }
}

export default Image;