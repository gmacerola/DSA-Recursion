// Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countingSheep(num) {
  // Base case
  if (num <= 0) {
    console.log("All sheep jumped over the fence");
    return;
  }
  // General case
  console.log(num + ": Another sheep jumps over the fence");
  countingSheep(num - 1);
}

// 2. Power Calculator

function powerCalculator(n1, n2) {
  if (n2 <= 0) {
    console.log("exponent should be >= 0");
    return;
  }
  console.log(Math.pow(n1, n2));
}

// 3. Reverse String

// function reverseString(string) {
//   if (string === "") {
//     return string;
//   }
//   return reverseString(string.substr(1)) + string.charAt(0);
// }
// console.log(reverseString("sandy"));

// 4. nth Triangular Number

// function nthTraingularNumber(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n + nthTraingularNumber(n - 1);
// }
// console.log(nthTraingularNumber(5));

// // 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

// function stringSplitter()

// 6. Fibonacci

// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5));

// 7. Factorial

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(6));

// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

// function maze

// 9. Find ALL the ways out of the maze

// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

// 11. Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes

// 12. Binary Representation

// function binary(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return binary(n / 2) + (n % 2);
// }

// console.log(binary(14));

// class GFG {
//     static void bin(int n)
//     {
//         /* step 1 */
//         if (n > 1)
//             bin(n / 2);

//         /* step 2 */
//         System.out.print(n % 2);
//     }

//     // Driver code
//     public static void main(String[] args)
//     {
//         bin(7);
//         System.out.println();
//         bin(4);
//     }
// }

// // This code is contributed
// // by ChitraNayal
