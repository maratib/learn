use('spring')
db.student.find(
  {
    $or: [
      { name: 'John' },
      { mail: 'peter@gmail.com' }
    ]
  }, {
  _id: 0, name: 1
}
)

