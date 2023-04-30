# Lab 4 Part 2 Answers

1. 2 will get printed to the console. i is declared as a var so it can be seen by line 12 despite being out of line 12's scope. Its value will be 3 because after the iteration where the last element (index = 2) is reached, i will increment to 3 which isn't less than the list's length of 3, which will cause the for-loop to terminate.
2. 150 will get printed to the console. discountedPrice is a var so it can be seen by line 12 despite being out of line 12's scope. Its value will be 150 because in the last iteration of the for-loop, the last element of prices is being accessed which has a value of 300. The discount is calculated by the equation expressed when the variable is declared to get a final value of 150.
3. 150 will get printed to the console. At the final iteration of the for-loop, the last element of prices is being accessed which has a value of 300. discountedPrice is calculated to be 150 from earlier in the iteration. finalPrice is then calculated again to be 150, which is what it ends as at the end of the for-loop.
4. The function will return \[50,100,150\]. At the end of the for-loop, the discounted price is pushed to the array discounted. By the parameters given to the function, the algorithm is going to return each original price cut in half.
5. Line 12 is going to return an error. i is declared within the for-loop, which is a smaller scope than Line 12. Since the let keyword implies a limited scope based on where the variable was declared, this means that i is not going to be accessible from Line 12, causing an error to be returned.
6. Line 12 is going to return an error. discountedPrice is declared within the for-loop, which is a smaller scope than Line 12. Since the let keyword implies a limited scope based on where the variable was declared, this means that discountedPrice is not going to be accessible from Line 12, causing an error to be returned.
7. 150 will be printed to the console. finalPrice is declared within the scope of the main function body, which is the same scope as Line 12. At the final iteration of the for-loop, 50% of 300 is calculated, so that is going to be the value of finalPrice by the time Line 12 is called.
8. The function will return \[50,100,150\]. At the end of the for-loop, the discounted price is pushed to the array discounted. By the parameters given to the function, the algorithm is going to return each original price cut in half.
9. Line 12 is going to return an error. i is declared within the for-loop, which is a smaller scope than Line 12. Since the const keyword also implies a limited scope based on where the variable was declared, this means that i is not going to be accessible from Line 12, causing an error to be returned.
10. 3 is going to be printed to the console. length is declared in the main function body, which is in the same scope as Line 12. Since the length of the array being inputted is 3, that is what is going to be printed to the console at Line 12.
11. An empty array will be returned. Because of the const keyword used when declaring discounted, the array is not going to be edited at the end of each iteration of the for-loop.
12. <ol type="A">  
        <li>student.name</li>
        <li>student["Grad Year"]</li>
        <li>student.greeting()</li>
        <li>student["Favorite Teacher"].name</li>
        <li>student.courseLoad[0]</li>
    </ol>
    <br>
13. <ol type="A">  
        <li>'32' -> + also acts as the string concatenation operator, so 2 is converted to a string and concatenated with 3</li>
        <li>1 -> - is only a numerical operator, so '3' is converted to 3 and operated on</li>
        <li>3 -> null becomes 0, so the equivalent would be 3-0</li>
        <li>'3null' -> since '3' is a string, null is also converted to a string and concatenated</li>
        <li>4 -> true = 1, so operation becomes 3+1</li>
        <li>0 -> false and null are numerically converted to 0, so operation becomes 0+0</li>
        <li>'3undefined' -> since '3' is a string, undefined is converted to a string and concatenated</li>
        <li>NaN -> - is a numerical operation, so the operation gets converted to 3 - NaN which is undefined</li>
    </ol>
    <br>
14. <ol type="A">
        <li>true -> '2' becomes the number 2, and 2 is greater than 1</li>
        <li>false -> '2' is greater than '1' lexicographically</li>
        <li>true -> '2' becomes 2 which makes the statement true</li>
        <li>false -> they are different types so it automatically returns false</li>
        <li>false -> true is equal to 1 numerically</li>
        <li>true -> any number above 0 has a boolean value of true</li>
    </ol>
15. == attempts to do type conversion to figure out if the RHS and LHS are equal. On the other hand, === will only compare if the types are equal. It will always return false if the types are different.
16. \[within part2-question16.js\]
17. \[1,4,9\] will be returned. At every iteration of the for-loop, the next element in "array" is passed into the doSomething function inputted as the "callback" parameter and then added to the newArr variable. Once "array" has been iterated through the main modifyArray function returns that newArr.
18. \[within part2-question18.js\]
19. 1 4 3 2