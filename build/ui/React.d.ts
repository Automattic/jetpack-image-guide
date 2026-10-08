import { MeasurableImageStore } from '../stores/MeasurableImageStore.ts';
import type { GuideSize } from '../types.ts';
import './style.scss';
import './react-transitions.scss';
type Position = {
    top: number;
    left: number;
};
type MouseLeave = React.MouseEventHandler<HTMLDivElement>;
export declare function JetpackLogo({ size, bg }: {
    bg?: string;
    size?: number;
}): import("react").JSX.Element;
export declare function AdminBarToggle({ href }: {
    href: string;
}): import("react").JSX.Element;
export declare function Bubble({ index, store, onHover, intro, }: {
    index: number;
    store: MeasurableImageStore;
    onHover: (index: number, position: Position) => void;
    intro?: boolean;
}): import("react").JSX.Element;
export declare function Popup({ store, size, position, onMouseLeave, }: {
    store: MeasurableImageStore;
    size: GuideSize;
    position: Position;
    onMouseLeave: MouseLeave;
}): import("react").JSX.Element;
export declare function Main({ stores }: {
    stores: MeasurableImageStore[];
}): import("react").JSX.Element;
export {};
