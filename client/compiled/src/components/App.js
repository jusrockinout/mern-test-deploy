'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      searchResults: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'fetchMovies',
    value: function fetchMovies(category, data) {
      console.log('Fetching movies');
      var options = {};
      options[category] = data;
      $.ajax({
        url: 'http://127.0.0.1:3000/classes/movies',
        method: 'POST',
        data: JSON.stringify(options),
        dataType: 'json',
        success: function (res) {
          this.setState({ searchResults: res.results });
        }.bind(this),
        error: function error(err) {
          console.log(err);
        }
      });
      // this.setState({'searchResults': window.movies.filter((movie)=> movie[category] === data)});
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Movie Search'
        ),
        React.createElement(SearchInput, { fetchMovies: _.debounce(this.fetchMovies.bind(this), 200) }),
        React.createElement(SearchResults, { movies: this.state.searchResults })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFJlc3VsdHMiLCJjYXRlZ29yeSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlcyIsInNldFN0YXRlIiwicmVzdWx0cyIsImJpbmQiLCJlcnJvciIsImVyciIsIl8iLCJkZWJvdW5jZSIsImZldGNoTW92aWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWU7QUFESixLQUFiO0FBRmtCO0FBS25COzs7O2dDQUVZQyxRLEVBQVVDLEksRUFBTTtBQUMzQkMsY0FBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsVUFBSUMsVUFBVSxFQUFkO0FBQ0FBLGNBQVFKLFFBQVIsSUFBb0JDLElBQXBCO0FBQ0FJLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxhQUFLLHNDQURBO0FBRUxDLGdCQUFRLE1BRkg7QUFHTFAsY0FBTVEsS0FBS0MsU0FBTCxDQUFlTixPQUFmLENBSEQ7QUFJTE8sa0JBQVUsTUFKTDtBQUtMQyxpQkFBUyxVQUFTQyxHQUFULEVBQWM7QUFDckIsZUFBS0MsUUFBTCxDQUFjLEVBQUNmLGVBQWVjLElBQUlFLE9BQXBCLEVBQWQ7QUFDRCxTQUZRLENBRVBDLElBRk8sQ0FFRixJQUZFLENBTEo7QUFRTEMsZUFBTyxlQUFTQyxHQUFULEVBQWM7QUFDbkJoQixrQkFBUUMsR0FBUixDQUFZZSxHQUFaO0FBQ0Q7QUFWSSxPQUFQO0FBWUE7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxXQUFELElBQWEsYUFBYUMsRUFBRUMsUUFBRixDQUFXLEtBQUtDLFdBQUwsQ0FBaUJMLElBQWpCLENBQXNCLElBQXRCLENBQVgsRUFBd0MsR0FBeEMsQ0FBMUIsR0FGRjtBQUdFLDRCQUFDLGFBQUQsSUFBZSxRQUFRLEtBQUtsQixLQUFMLENBQVdDLGFBQWxDO0FBSEYsT0FERjtBQU9EOzs7O0VBbkNldUIsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBmZXRjaE1vdmllcyAoY2F0ZWdvcnksIGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgbW92aWVzJyk7XG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICBvcHRpb25zW2NhdGVnb3J5XSA9IGRhdGE7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMC9jbGFzc2VzL21vdmllcycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hSZXN1bHRzOiByZXMucmVzdWx0c30pO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeydzZWFyY2hSZXN1bHRzJzogd2luZG93Lm1vdmllcy5maWx0ZXIoKG1vdmllKT0+IG1vdmllW2NhdGVnb3J5XSA9PT0gZGF0YSl9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllIFNlYXJjaDwvaDE+XG4gICAgICAgIDxTZWFyY2hJbnB1dCBmZXRjaE1vdmllcz17Xy5kZWJvdW5jZSh0aGlzLmZldGNoTW92aWVzLmJpbmQodGhpcyksIDIwMCl9Lz5cbiAgICAgICAgPFNlYXJjaFJlc3VsdHMgbW92aWVzPXt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=