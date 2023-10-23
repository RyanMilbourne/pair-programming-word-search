const wordSearch = (array, word) => {

  // this will be our final verdict (it will either be true or false)
  let finalVerdict;

  // if the wordsearch (array) is empty, return false
  if (array.length === 0) {
    return false;
  }
  // if 'word' is not a string, return false
  if (typeof word !== 'string') {
    return false;
  }
  // if word is or has lowercase, convert to all upercase
  word = word.toUpperCase();
  // this converts horizontal lines to strings
  const horizontalJoin = array.map(ls => ls.join(''));

  // start vertical process
  const verticalJoin = [];
  // determine how many columns (array.length) there should be
  const columns = array[0].length;

  // loop through each "column" to create our vertical arrays (similar to "ther is no spoon exercise")
  for (let col = 0; col < columns; col++) {
    // establish where our new characters will be assigned to
    let newString = '';
    // now loop through each row, using the 'col' value to determine which character gets assigned to newString
    for (let row = 0; row < array.length; row++) {
      newString += array[row][col];
    }
    verticalJoin.push(newString);
  }

  // compare if word exists in horizontal line
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      finalVerdict = true;
    } // don't add else = false
  }

  // compare if word exists in vertical line (now new arrays)
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      finalVerdict = true;
    } // don't add else = false
  }

  // we check that finalVerdict = true. if so, return true... if not, return false (as per npm test requirements)
  if (finalVerdict) {
    return true;
  } else {
    return false;
  }
};

// export function
module.exports = wordSearch;