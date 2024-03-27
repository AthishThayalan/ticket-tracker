# Ticket Tracker

The Ticket Tracker app is a versatile project management tool designed to streamline task management and enhance team collaboration. Users can easily filter tasks by name and role, simplifying the process of finding and organizing tasks. Leveraging React Router, the app seamlessly navigates between its various pages, including a dynamic homepage providing names of all members of the team, a comprehensive tickets page for task management, and individual profile pages for each team member.

## Features

- View all tickets with the ticket counter persisting with local storage.
- Can filter tickets by name and/or role
- Can click on any tile on the homepage to review extra details about the person.

## Technologies Used

- **React**: React was utilized as the primary framework for building the user interface, with TypeScript providing static typing and enhanced development experience.
- 
## How to Use

1. Clone or download the repository to your local machine.
2. Open terminal and run npm install in the directory.
3. Then run "npm run dev".
4. open the local host link in the terminal.
5. Enjoy using the Ticket Tracker !

Demo : Coming soon!

## Project Structure
- **src/**
  - **Containers/**
    - **Homepage.tsx**: Contains the logic for the homepage component.
    - **Homepage.scss**: Contains the styling for the homepage component.
    - **ProfilePage.tsx**: Contains the logic for individual profile pages.
    - **ProfilePage.scss**: Contains the styling for individual profile pages.
    - **TicketsPage.tsx**: Contains the logic for the tickets page component.
    - **TicketsPage.scss**: Contains the styling for the tickets page component.
    
  - **Counter/**
    - **Counter.tsx**: Contains the logic for the counter feature.
    - **Counter.scss**: Contains the styling for the counter component.
    
  - **EmployeeCard/**
    - **EmployeeCard.tsx**: Contains the logic for displaying employee information.
    - **EmployeeCard.scss**: Contains the styling for the employee card component.
    
  - **EmployeeName/**
    - **EmployeeName.tsx**: Contains the logic for displaying employee names.
    - **EmployeeName.scss**: Contains the styling for the employee name component.
    
  - **Filter/**
    - **Filter.tsx**: Contains the logic for the filter feature.
    - **Filter.scss**: Contains the styling for the filter component.
    
  - **Header/**
    - **Header.tsx**: Contains the logic for the header section.
    - **Header.scss**: Contains the styling for the header component.
    
  - **Nav/**
    - **Nav.tsx**: Contains the logic for the navigation menu.
    - **Nav.scss**: Contains the styling for the navigation menu component.
