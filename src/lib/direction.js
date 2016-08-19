const direction = (Δx, Δy) => {
    const getNext = (x, y) => {
        const target = {
            x: x + Δx,
            y: y + Δy,
        };

        if (target.x > 7 || target.x < 0 || target.y > 7 || target.y < 0) {
            // Put something here to indicate end of board
            return;
        }

        return target;
    };

    return { getNext };
};
