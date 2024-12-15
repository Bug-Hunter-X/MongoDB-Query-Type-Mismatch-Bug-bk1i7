```javascript
const query = {
  $or: [
    { age: { $type: 'int', $gt: 30 } },
    { age: { $exists: false } } // Handle missing age field
  ]
};

db.collection('users').find(query).toArray((err, users) => {
  if (err) {
    console.error('Error executing query:', err);
    // More robust error handling, like logging to file or alerting
  } else {
    console.log(users);
  }
});
```