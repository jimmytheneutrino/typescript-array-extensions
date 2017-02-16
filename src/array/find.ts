interface Array<T> {
    find(callbackFn: CallbackFn<T, boolean>): T | null;
}

((proto) => {
    proto.find = function find<T>(this: Array<T>, callbackFn: CallbackFn<T, boolean>): T | null {
        let result: T | null = null;

        this.some((value, index, array) => {
            let isFound = callbackFn(value, index, array);

            if (isFound) {
                result = value;
            }

            return isFound;
        });

        return result;
    }
})(Array.prototype);