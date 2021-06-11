export class Utility {

    /* Check if object is blank */
    static isEmptyObj(obj: any): boolean {
        if (obj) {
            return Object.keys(obj).length === 0 ? true : false;
        } else {
            return true;
        }
    }

    /* Object with blank keys */
    static objKeys(obj: any): void {
        const blankObj = Object.keys(obj).reduce(
            (accumulator: any, current) => {
                accumulator[current] = 'new';
                return accumulator;
            }, {});
        return blankObj;
    }
}
