type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
};

type Top = Pick<AllType, "name" | "color">;
type Bottom = Pick<AllType, "position" | "weight">;

function compare<T extends Top, B extends Bottom>(top: T, bottom: B): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}

export {};