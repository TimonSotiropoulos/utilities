'use strict';
// *******************************************************
// Utilities - General Helper Functinos
// -------------------------------------------------------
// This file contains general utility functions
// -------------------------------------------------------

/**
* @function createArrayOfLength
* Returns an array of the length provided as a param
* @param length - The length of an array that you want
* @return array
*/
export const createArrayOfLength = (length) => {
    return [...Array(length).keys()];
};
