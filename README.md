# Budget Mix

Welcome to Budget Mix, your personal finance tracker that helps you take control of your finances, manage your budget, and plan for the future. Built with Next.js, TypeScript, Prisma, and PostgreSQL, Budget Mix is designed to provide an efficient, feature-rich solution for managing personal finance.

## Features
- **Expense Tracking**: Track your expenses effortlessly to get a clear picture of where your money is going.
- **Budget Planning**: Set budgets for different categories and keep your spending in check.
- **Advanced Analytics**: Get insights into your spending patterns with detailed charts and reports.
- **Mobile-Optimized**: Access your finances from any device with a responsive, mobile-friendly interface.
- **User-Friendly Interface**: Easy to navigate and use, providing a seamless experience for all users.

## Technologies Used
- **Next.js**: A React framework for server-rendered or statically-exported React applications.
- **TypeScript**: A statically typed superset of JavaScript that enhances development with type safety and advanced features.
- **Prisma**: An open-source ORM for simplifying database access with PostgreSQL.
- **PostgreSQL**: A powerful, open-source object-relational database system for storing and managing the application’s data.

## Getting Started
### Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js**
- **npm** (or **yarn**)
- **PostgreSQL**

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/JadynWor/budget_mix.git
   cd budget_mix
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the necessary environment variables (e.g., `DATABASE_URL`, `NEXTAUTH_SECRET`, etc.).

4. **Run Database Migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```

You can now access the application at `http://localhost:3000`.

## License
Budget Mix is open source and available under the MIT License.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## Contact
For any questions or inquiries, reach out via [GitHub](https://github.com/JadynWor/budget_mix).

