/**
 * Utility functions for class name manipulation
 */

/**
 * Concatenates class names, filtering out falsy values
 * @param {...string} classes - Class names to concatenate
 * @returns {string} Combined class names
 */
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

/**
 * Conditionally applies class names based on a condition
 * @param {boolean} condition - Whether to apply the class
 * @param {string} ifTrue - Class to apply if condition is true
 * @param {string} ifFalse - Class to apply if condition is false
 * @returns {string} The appropriate class name
 */
export function conditionalClass(condition, ifTrue, ifFalse = '') {
    return condition ? ifTrue : ifFalse;
}

/**
 * Merges multiple class name objects/strings
 * @param {...(string|Object)} inputs - Class names or objects with class mappings
 * @returns {string} Combined class names
 */
export function mergeClasses(...inputs) {
    const classes = [];
    
    inputs.forEach(input => {
        if (typeof input === 'string') {
            classes.push(input);
        } else if (typeof input === 'object' && input !== null) {
            Object.entries(input).forEach(([className, condition]) => {
                if (condition) {
                    classes.push(className);
                }
            });
        }
    });
    
    return classes.filter(Boolean).join(' ');
}
