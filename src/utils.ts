export function chunked<T>(arr: T[], size: number): T[][]  {
    return arr.reduce<T[][]>((acc, val, ind) => {
        const subIndex = ind / size | 0;
        if(Array.isArray(acc[subIndex])){
            acc[subIndex].push(val);
        } else {
            acc[subIndex] = [val];
        };
        return acc;
    }, []);
};

export function chunk_from_bool(arr: boolean[], size: number): number[][] {
    let res: number[] = arr.reduce<number[]>((acc, val, ind) => {
        if(val) {
            acc.push(ind);
        }

        return acc;
    }, []);
    return chunked(res, size)
}
