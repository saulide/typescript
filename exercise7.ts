interface SaveButton {
    type: 'save'
}

interface LoadButton {
    type: 'load'
}

type Button = SaveButton | LoadButton;
type ButtonType = 'save' | 'load';

// Exercise for all: Make it dry!

type TButtonType = Button['type'];

type TButtonType2 = Pick<Button, 'type'>