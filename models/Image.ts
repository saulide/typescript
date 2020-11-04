export interface ImageProperties {
    id?: string;
    user?: string;
    source?: string;
}

export class Image {
    constructor(attr: ImageProperties = {}) {
        // tslint:disable-next-line: forin
        for (const key in attr) {
            // @ts-ignore
            this[key] = attr[key];
        }
    }
}

export default Image;