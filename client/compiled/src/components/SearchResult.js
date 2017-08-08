'use strict';

var SearchResult = function SearchResult(_ref) {
  var title = _ref.title,
      year = _ref.year,
      director = _ref.director,
      genres = _ref.genres;
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      title
    ),
    React.createElement(
      'td',
      null,
      year
    ),
    React.createElement(
      'td',
      null,
      director
    ),
    React.createElement(
      'td',
      null,
      genres.join(', ')
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHQiLCJ0aXRsZSIsInllYXIiLCJkaXJlY3RvciIsImdlbnJlcyIsImpvaW4iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZUFBZSxTQUFmQSxZQUFlO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsTUFBZUMsUUFBZixRQUFlQSxRQUFmO0FBQUEsTUFBeUJDLE1BQXpCLFFBQXlCQSxNQUF6QjtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLSDtBQUFMLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0M7QUFBTCxLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtDO0FBQUwsS0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFLQyxhQUFPQyxJQUFQLENBQVksSUFBWjtBQUFMO0FBSkYsR0FEaUI7QUFBQSxDQUFuQiIsImZpbGUiOiJTZWFyY2hSZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoUmVzdWx0ID0gKHt0aXRsZSwgeWVhciwgZGlyZWN0b3IsIGdlbnJlc30pID0+IChcbiAgPHRyPlxuICAgIDx0ZD57dGl0bGV9PC90ZD5cbiAgICA8dGQ+e3llYXJ9PC90ZD5cbiAgICA8dGQ+e2RpcmVjdG9yfTwvdGQ+XG4gICAgPHRkPntnZW5yZXMuam9pbignLCAnKX08L3RkPlxuICA8L3RyPlxuKTsiXX0=