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
    let k: keyof SVGTextProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k]) {
            if (k !== 'onClick') return true;
        }
    }
    return false;
}

// Fail Open approch:

const shouldUpdateFailOpen = (oldProps: SVGTextProps, newProps: SVGTextProps) : boolean => {
    return (
        oldProps.textPos !== newProps.textPos ||
        oldProps.imagePos !== newProps.imagePos
    );
}

// Adding new feature

const REQUIRES_UPDATE: {[k in keyof SVGTextProps] : boolean} = {
    imageBase64: false,
    ...
}

const shouldUpdate2 = (oldProps: SVGTextProps, newProps: SVGTextProps) : boolean => {
    let k: keyof SVGTextProps;
    for (k in oldProps) {
        if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
            return true;
        }
    }
    return false;
}