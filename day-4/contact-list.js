// #!/usr/bin/env node

'use strict';

/**
 * Create a factory function called `makeContact` that takes in `id`, `nameFirst`, and `nameLast`.
 * This function should returns a contact object.
 *
 * ex: makeContact(0, 'Max', 'Gaudin') // => { id: 0, nameFirst: 'Max', nameLast: 'Gaudin' }
 *
 */

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
  };
}

var contacts = [
  {
    id: 1,
    nameFirst: 'Max',
    nameLast: 'Gaudin',
  },
  {
    id: 2,
    nameFirst: 'John',
    nameLast: 'Fraboni',
  },
  {
    id: 3,
    nameFirst: 'Alon',
    nameLast: 'Robinson',
  },
  {
    id: 4,
    nameFirst: 'Mykia',
    nameLast: 'Smith',
  },
  {
    id: 5,
    nameFirst: 'Alice',
    nameLast: 'Green',
  },
];

/**
 * Create a function called `findContact` that takes in an array of contact objects and a
 * fullName (ex: "Max Gaudin"). This function should return the contact object in the array
 * that matches the `fullName` input, or it should returned undefined if no object is found
 * matching.
 */

function findContact(array, fullName) {
  // YOUR CODE HERE
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    if (`${contact.nameFirst} ${contact.nameLast}` === fullName) {
      return contact;
    }
  }
  return undefined;
}

/**
 * Create a function called `removeContact` that takes in an array of contact objects and a
 * contact object to remove. This function search through the array and remove the contact object
 * if found.
 */
function removeContact(array, contact) {
  // YOUR CODE HERE
  const index = array.findIndex(item => item.id === contact.id);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

/**
 * Create a function called `getNamesThatBeginWithLetter` that takes in an array of contact objects.
 * This function should iterate through the array and return a new array of all of the contact
 * objects whose first names begin with input letter
 */
function getNamesThatBeginWithLetter(array, letter) {
  // YOUR CODE HERE
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const contact = array[i];
    if (contact.nameFirst.toLowerCase().startsWith(letter.toLowerCase())) {
      result.push(contact); // Push the object itself, not the formatted name string
    }
  }
  return result;
}

/**
 * Create a function called `getAllContactNames` that takes in an array of contact objects.
 * This function should return a string of each object's full name followed by a linebreak character.
 *
 * example:
 *
 *    getAllContactNames(contacts); // => 'Max Gaudin\nJohn Fabroni\nAlon robinson\nMykia Smith\Alice Green'
 */
function getAllContactNames(array) {
  // YOUR CODE HERE
  const names = [];
  for (let i = 0; i < array.length; i++) {
    const contact = array[i];
    names.push(`${contact.nameFirst} ${contact.nameLast}`);
  }
  return names.join('\n');
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
