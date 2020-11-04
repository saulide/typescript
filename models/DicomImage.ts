import Image, {ImageProperties} from './Image';

export interface DicomImageProperties extends ImageProperties {
    modality: "CT"| "MR"
}

export class DicomImage extends Image {
    constructor(attr: DicomImageProperties = { modality: 'CT'}) {
        super(attr)
    }
}