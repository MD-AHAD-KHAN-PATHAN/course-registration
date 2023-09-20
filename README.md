# Course Registration

- ## My Four Project Features.

1. **Course Selection:** This feature allows students to select the multiple course they are interested in, and add them to their course list. Students are able to view the chosen course's name.

2. **Total Hours Calculation:** This feature calculates and displays the total number of hours associated with the courses selected by the student. It helps students ensure that they meet minimum credit requirements and manage their course load effectively.

3. **Remaining Credit Hours Tracking:** This feature keeps track of the student's remaining credit hours and calculates the needed hours to select the courses.

4. **Total Price Estimation:** This feature calculates the total cost of the selected courses based on their course fees.


- ## How I managed the state in my Course Registration project.


In this project, I am using React's **useState** and **useEffect** hooks to manage the state of my application. Here's an explanation of how i am managing state:

1. **useState** is used to define several pieces of state in my component:

- **carts :** state stores an empty array initially, which is later populated with data fetched from 'data.json'.
- **selectedCards :** state stores an empty array initially, which is used to keep track of selected course cards.
- **totalHours :** state initializes with a value of 0 and is used to keep track of the total credit hours of the selected courses.
- **totalPrice :** state initializes with a value of 0 and is used to keep track of the total price of the selected courses.

2. I use the **useEffect** hook is used to fetch data from 'data.json' and populate the **carts** state with the fetched data. This effect runs only once, as indicated by the empty dependency array (**[]**), ensuring it only runs after the initial render.

3. **handleClick** function is an event handler used when a course card is clicked. Here's how I manage the state within this function:

- Then I extract the **credit** and **price** properties of the clicked card.

- Then I check if adding the **credit** of the selected card would keep the **totalHours** under or equal to 20. If it does, I proceed to add the card; otherwise, I show a toast message indicating the remaining credit hours.

- If the selected card is not already in the **selectedCards** array, then I update the **totalHours** by add the card's **credit** and the **totalPrice** by add the card's **price**.

- Then add the selected card to the **selectedCards** array and update the state for both **totalHours** and **totalPrice**.

- If the selected card is already in **selectedCards**, then I show a toast message indicating that the course is already selected.

In summary, I am using React's state management to keep track of selected course cards, the total credit hours, and the total price. When a course card is clicked, then I update these states based on the selected card's properties and ensure that the total credit hours do not exceed 20.