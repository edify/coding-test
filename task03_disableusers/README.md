# Disable users

Write a method that receives a JSON string containing a list of objects representing users and disable all users that, given the current date, are expired.

The function returns a JSON string containing all the users received, with the users that are expired marked as disabled.

This is an example of the input string:

```
'[{"usr":"diego.maradona","enabled":true,"expires":"13-05-2015"}, {"usr":"neymarjr","enabled":true,"expires":"05-12-2016"}, {"usr":"bryan.ruiz","enabled":false,"expires":"23-12-2016"}, {"usr":"lsuarez","enabled":true,"expires":"03-07-2015"}]'
```

Keep in mind that although the example only has three records, the input string could contain any number of records.
