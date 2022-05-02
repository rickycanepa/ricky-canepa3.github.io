// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./ricky-canepa3.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

 var maleCount = function(array) {
    let males = _.filter(array, function(element) {
    if (element.gender === 'male') {
        return true;
    } else {
        return false;
    }
    });
    return males.length;
    };
    
    var femaleCount = function(array) {
        let numFemales = _.reduce (array, function(accumulator, current, index, collection) {
            if (current.gender === 'female') {
                accumulator += 1;
            }
        return accumulator;
        }, 0)
        return numFemales;
    };
    
    var oldestCustomer = function(array){
        let oldest = _.reduce(array, function(accumulator, current, index, collection) {    
            if (current.age > accumulator.age) {
                accumulator = current;
            }
                return accumulator;
            }) 
        return oldest.name;
    }  

    var youngestCustomer = function(array) {
        var custName2;
        var custIndex2 = 0;
        for (var i = 1; i <= array.length - 1; i ++)
            if(array[custIndex2].age > array[i].age) {
                custIndex2 = i;
            }
            custName2 = array[custIndex2].name;
            return custName2;
    };

    var averageBalance = function(array) {
        // loop through array and add each balance to all customers
            
            var sum = 0;
            for (var i = 0; i < array.length; i++) {
                sum += Number(array[i].balance.replace(/[$,]/g, ""));
            }
            return sum/array.length;
        };

    var firstLetterCount = function(array, letter) {
        let count = _.reduce(array,function(acc, customer) {
            if(customer.name[0].toLowerCase() === letter.toLowerCase()){
                    return acc + 1;
                }
                return acc;
            }, 0);
            return count;
       };



    var friendFirstLetterCount = function(array, customer, letter) {
        var list = _.reduce(array, function(acc, customerObj) {
            if(customerObj.name === customer) {
                var acc = _.filter(customerObj.friends, function(friend, i, friends) {
                
                    return friend.name[0].toLowerCase() === letter.toLowerCase()
                })
                return acc;
            }
            return acc;
           
        }, []);
        return list.length;
    }

    var friendsCount = function(array, name) {
        var result = _.filter(array, function(customerObj) {
            for(var i = 0; i < customerObj.friends.length; i++) {
                if (customerObj.friends[i].name === name) {
                    return customerObj;
                }
            }
        });
        return _.pluck(result, "name");
    };

    var topThreeTags = function(array) {
        var myArray = [];
        var topTags = [];
        
        
        var tags = _.pluck(customers, "tags");
        
        var allTags = _.reduce(tags, function(acc, currTag) {
            return acc.concat(currTag);
        }).sort();
        
        var total = allTags.reduce(function(count, tag) {
            count[tag] ? count[tag] = count[tag] + 1 : count[tag] = 1;
            return count;
        }, {});
        
       for(var key in total){
           myArray.push([key, total[key]]);
       }
       var top = myArray.sort(function(acc, currTag) {
           return currTag[1] - acc[1];
       }).slice(0, 3);
       
       
       _.filter(top, function(topTagArr) {
           return topTagArr[0] ? topTags.push(topTagArr[0]) : null;
       });
       return topTags;
    };


    var genderCount = function(array) {
        var genCountObj = _.reduce(array, function(resultObj, customerObj) {
                if(resultObj[customerObj.gender]) {
                    resultObj[customerObj.gender] += 1;
                } else {
                    resultObj[customerObj.gender] = 1;
                }
                return resultObj
            },{});
            return genCountObj;
            
         };

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
