// SVG Text drawer with click event
interface SVGTextProps {
    imageBase64: string;
    text: string;
    
    // Display
    imagePos: [number, number];
    textPos: [number, number];

    onClick: (x: number, y: number) => void;
}

// Redraw optimisation

const shouldUpdate = (oldProps: SVGTextProps, newProps: SVGTextProps) : boolean => {

}

// Fail Open approch:


// Adding new feature
