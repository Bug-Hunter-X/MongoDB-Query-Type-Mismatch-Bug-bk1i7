# MongoDB Query Type Mismatch Bug
This repository demonstrates a common issue in MongoDB queries: type mismatches.  The provided Javascript code shows a query that might fail or produce unexpected results if the `age` field in the database doesn't consistently hold integer values.

The `bug.js` file contains the erroneous code.  The solution, `bugSolution.js`, demonstrates how to mitigate this issue by using appropriate type checking and handling potential errors more robustly.

## How to Reproduce
1. Clone the repository.
2. Ensure you have a MongoDB instance running.
3. Set up a collection named 'users' with documents that have varied `age` field types (integer, string, missing).
4. Run `bug.js`. Observe the unexpected results or errors.
5. Run `bugSolution.js` to see the corrected query.