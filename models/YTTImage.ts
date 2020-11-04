import Image, {ImageProperties} from './Image';

export interface YTTImageProperties extends ImageProperties {
    sideEffect: "yellow" | "red"
}

export class YTTImage extends Image {
    constructor(attr: YTTImageProperties = { sideEffect: 'yellow'}) {
        super(attr)
    }
}