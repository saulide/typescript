import Image from "./models/Image";
import { DicomImage } from "./models/DicomImage";
import { YTTImage } from "./models/YTTImage";

export function createImage<
T extends Image = Image,
K extends DicomImage | YTTImage = DicomImage | YTTImage
>(Ctor: new (...args: any[]) => T, attributes: K) :T {
    return new Ctor(attributes);
}

const img = createImage(Image, {id: 2});
const dicomImage = createImage(DicomImage, {id: 2});
const yttImage = createImage(YTTImage, {id: 2});


