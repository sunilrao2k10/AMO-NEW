export class Utility{
    static isEmptyObj(obj: any): boolean {
        if (obj){
            return Object.keys(obj).length === 0 ? true : false;
        } else {
            return true;
        }
    }
}
