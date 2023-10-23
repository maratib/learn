use('spring')
db.student.find(
  {
    $or: [
      { name: 'John' },
      { mail: 'peter@gmail.com' }
    ]
  }
)

