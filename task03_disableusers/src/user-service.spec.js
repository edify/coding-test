const UserService = require('./UserService');

test('disableUsers regular case', function() {
  let userService = new UserService();
  let payload = `
    [
      {"usr":"diego.maradona","enabled":true,"expires":"13-05-2017"},
      {"usr":"neymarjr","enabled":true,"expires":"12-05-2028"},
      {"usr":"bryan.ruiz","enabled":false,"expires":"23-12-2017"},
      {"usr":"lsuarez","enabled":true,"expires":"07-03-2016"}
    ]`;

  let results = userService.disableUsers(payload);

  expect(JSON.parse(results)).toEqual([
    {usr:"diego.maradona",enabled:false,expires:"13-05-2017"},
    {usr:"neymarjr",enabled:true,expires:"12-05-2028"},
    {usr:"bryan.ruiz",enabled:false,expires:"23-12-2017"},
    {usr:"lsuarez",enabled:false,expires:"07-03-2016"}
  ]);
});

test('disableUsers empty list', function() {
  let userService = new UserService();
  let payload = '[]';

  let results = userService.disableUsers(payload);
  expect(JSON.parse(results)).toEqual([]);
});
