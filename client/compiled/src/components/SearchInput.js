'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInput = function (_React$Component) {
  _inherits(SearchInput, _React$Component);

  function SearchInput(props) {
    _classCallCheck(this, SearchInput);

    return _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call(this, props));
  }

  _createClass(SearchInput, [{
    key: 'handleInput',
    value: function handleInput() {
      this.props.fetchMovies(this.refs.category.value, this.refs.data.value);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect() {
      if (this.refs.category.value === 'year') {
        $(this.refs.data).attr('type', 'number');
      } else {
        $(this.refs.data).attr('type', 'text');
      }
      this.handleInput();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'select',
          { ref: 'category', onInput: this.handleSelect.bind(this) },
          React.createElement(
            'option',
            { value: 'title' },
            'Title'
          ),
          React.createElement(
            'option',
            { value: 'year' },
            'Year'
          ),
          React.createElement(
            'option',
            { value: 'director' },
            'Director'
          ),
          React.createElement(
            'option',
            { value: 'genre' },
            'Genre'
          )
        ),
        React.createElement('input', { ref: 'data', type: 'text', onInput: this.handleInput.bind(this) })
      );
    }
  }]);

  return SearchInput;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaElucHV0LmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsInByb3BzIiwiZmV0Y2hNb3ZpZXMiLCJyZWZzIiwiY2F0ZWdvcnkiLCJ2YWx1ZSIsImRhdGEiLCIkIiwiYXR0ciIsImhhbmRsZUlucHV0IiwiaGFuZGxlU2VsZWN0IiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1hBLEtBRFc7QUFHbEI7Ozs7a0NBRWE7QUFDWixXQUFLQSxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxLQUExQyxFQUFpRCxLQUFLRixJQUFMLENBQVVHLElBQVYsQ0FBZUQsS0FBaEU7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSSxLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEtBQW5CLEtBQTZCLE1BQWpDLEVBQXlDO0FBQ3ZDRSxVQUFFLEtBQUtKLElBQUwsQ0FBVUcsSUFBWixFQUFrQkUsSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0IsUUFBL0I7QUFDRCxPQUZELE1BRU87QUFDTEQsVUFBRSxLQUFLSixJQUFMLENBQVVHLElBQVosRUFBa0JFLElBQWxCLENBQXVCLE1BQXZCLEVBQStCLE1BQS9CO0FBQ0Q7QUFDRCxXQUFLQyxXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsS0FBSSxVQUFaLEVBQXVCLFNBQVMsS0FBS0MsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBaEM7QUFDRTtBQUFBO0FBQUEsY0FBUSxPQUFNLE9BQWQ7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxPQUFNLE1BQWQ7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBUSxPQUFNLFVBQWQ7QUFBQTtBQUFBLFdBSEY7QUFJRTtBQUFBO0FBQUEsY0FBUSxPQUFNLE9BQWQ7QUFBQTtBQUFBO0FBSkYsU0FERjtBQU9FLHVDQUFPLEtBQUksTUFBWCxFQUFrQixNQUFLLE1BQXZCLEVBQThCLFNBQVMsS0FBS0YsV0FBTCxDQUFpQkUsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkM7QUFQRixPQURGO0FBV0Q7Ozs7RUFoQ3VCQyxNQUFNQyxTIiwiZmlsZSI6IlNlYXJjaElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgaGFuZGxlSW5wdXQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaE1vdmllcyh0aGlzLnJlZnMuY2F0ZWdvcnkudmFsdWUsIHRoaXMucmVmcy5kYXRhLnZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdCgpIHtcbiAgICBpZiAodGhpcy5yZWZzLmNhdGVnb3J5LnZhbHVlID09PSAneWVhcicpIHtcbiAgICAgICQodGhpcy5yZWZzLmRhdGEpLmF0dHIoJ3R5cGUnLCAnbnVtYmVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcy5yZWZzLmRhdGEpLmF0dHIoJ3R5cGUnLCAndGV4dCcpO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUlucHV0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3QgcmVmPVwiY2F0ZWdvcnlcIiBvbklucHV0PXt0aGlzLmhhbmRsZVNlbGVjdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGl0bGVcIj5UaXRsZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5ZWFyXCI+WWVhcjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkaXJlY3RvclwiPkRpcmVjdG9yPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdlbnJlXCI+R2VucmU8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxpbnB1dCByZWY9XCJkYXRhXCIgdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=