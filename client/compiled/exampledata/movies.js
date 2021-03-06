'use strict';

var movies = [{
  'title': 'Toy Story 3',
  'year': '2010',
  director: 'Lee Unkrich',
  genres: ['Animation', 'Adventure', 'Comedy']
}, {
  'title': 'Hellboy II: The Golden Army',
  'year': '2008',
  director: 'Guillermo del Toro',
  genres: ['Action', 'Adventure', 'Fantasy']
}, {
  'title': 'Deapool',
  'year': '2016',
  director: 'Tim Miller',
  genres: ['Action', 'Adventure', 'Comedy']
}, {
  'title': 'Suicide Squad',
  'year': '2016',
  director: 'David Ayer',
  genres: ['Action', 'Adventure', 'Comedy']
}, {
  'title': 'Zootopia',
  'year': '2010',
  director: 'Byron Howard',
  genres: ['Animation', 'Action', 'Adventure']
}, {
  'title': 'Seed of Chucky',
  'year': '2004',
  director: 'Don Mancini',
  genres: ['Comedy', 'Fantasy', 'Horror']
}, {
  'title': 'Tangled',
  'year': '2010',
  director: 'Byron Howard',
  genres: ['Animation', 'Adventure', 'Comedy']
}, {
  'title': 'Home Alone',
  'year': '1990',
  director: 'Chris Columbus',
  genres: ['Family', 'Comedy']
}, {
  'title': 'Harry Potter and the Sorcerer\'s Stone',
  'year': '2001',
  director: 'Chris Columbus',
  genres: ['Adventure', 'Family', 'Fantasy']
}, {
  'title': 'Harry Potter and the Chamber of Secrets',
  'year': '2002',
  director: 'Chris Columbus',
  genres: ['Adventure', 'Family', 'Fantasy']
}, {
  'title': 'Harry Potter and the Prisoner of Azkaban',
  'year': '2004',
  director: 'Alfonso Cuarón',
  genres: ['Adventure', 'Family', 'Fantasy']
}, {
  'title': 'Harry Potter and the Order of the Phoenix',
  'year': '2007',
  director: 'David Yates',
  genres: ['Adventure', 'Family', 'Fantasy']
}, {
  'title': 'Harry Potter and the Half-Blood Prince',
  'year': '2009',
  director: 'David Yates',
  genres: ['Adventure', 'Family', 'Fantasy']
}, {
  'title': 'Harry Potter and the Deathly Hallows: Part 1',
  'year': '2010',
  director: 'David Yates',
  genres: ['Adventure', 'Family', 'Fantasy']
}, {
  'title': 'Harry Potter and the Deathly Hallows: Part 2',
  'year': '2011',
  director: 'David Yates',
  genres: ['Adventure', 'Family', 'Fantasy']
}];

window.movies = movies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGVkYXRhL21vdmllcy5qcyJdLCJuYW1lcyI6WyJtb3ZpZXMiLCJkaXJlY3RvciIsImdlbnJlcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxTQUFTLENBQ1g7QUFDRSxXQUFTLGFBRFg7QUFFRSxVQUFRLE1BRlY7QUFHRUMsWUFBVSxhQUhaO0FBSUVDLFVBQVEsQ0FBRSxXQUFGLEVBQWUsV0FBZixFQUE0QixRQUE1QjtBQUpWLENBRFcsRUFPWDtBQUNFLFdBQVMsNkJBRFg7QUFFRSxVQUFRLE1BRlY7QUFHRUQsWUFBVSxvQkFIWjtBQUlFQyxVQUFRLENBQUUsUUFBRixFQUFZLFdBQVosRUFBeUIsU0FBekI7QUFKVixDQVBXLEVBYVg7QUFDRSxXQUFTLFNBRFg7QUFFRSxVQUFRLE1BRlY7QUFHRUQsWUFBVSxZQUhaO0FBSUVDLFVBQVEsQ0FBRSxRQUFGLEVBQVksV0FBWixFQUF5QixRQUF6QjtBQUpWLENBYlcsRUFtQlg7QUFDRSxXQUFTLGVBRFg7QUFFRSxVQUFRLE1BRlY7QUFHRUQsWUFBVSxZQUhaO0FBSUVDLFVBQVEsQ0FBRSxRQUFGLEVBQVksV0FBWixFQUF5QixRQUF6QjtBQUpWLENBbkJXLEVBeUJYO0FBQ0UsV0FBUyxVQURYO0FBRUUsVUFBUSxNQUZWO0FBR0VELFlBQVUsY0FIWjtBQUlFQyxVQUFRLENBQUUsV0FBRixFQUFlLFFBQWYsRUFBeUIsV0FBekI7QUFKVixDQXpCVyxFQStCWDtBQUNFLFdBQVMsZ0JBRFg7QUFFRSxVQUFRLE1BRlY7QUFHRUQsWUFBVSxhQUhaO0FBSUVDLFVBQVEsQ0FBRSxRQUFGLEVBQVksU0FBWixFQUF1QixRQUF2QjtBQUpWLENBL0JXLEVBcUNYO0FBQ0UsV0FBUyxTQURYO0FBRUUsVUFBUSxNQUZWO0FBR0VELFlBQVUsY0FIWjtBQUlFQyxVQUFRLENBQUUsV0FBRixFQUFlLFdBQWYsRUFBNEIsUUFBNUI7QUFKVixDQXJDVyxFQTJDWDtBQUNFLFdBQVMsWUFEWDtBQUVFLFVBQVEsTUFGVjtBQUdFRCxZQUFVLGdCQUhaO0FBSUVDLFVBQVEsQ0FBRSxRQUFGLEVBQVksUUFBWjtBQUpWLENBM0NXLEVBaURYO0FBQ0UsV0FBUyx3Q0FEWDtBQUVFLFVBQVEsTUFGVjtBQUdFRCxZQUFVLGdCQUhaO0FBSUVDLFVBQVEsQ0FBRSxXQUFGLEVBQWUsUUFBZixFQUF5QixTQUF6QjtBQUpWLENBakRXLEVBdURYO0FBQ0UsV0FBUyx5Q0FEWDtBQUVFLFVBQVEsTUFGVjtBQUdFRCxZQUFVLGdCQUhaO0FBSUVDLFVBQVEsQ0FBRSxXQUFGLEVBQWUsUUFBZixFQUF5QixTQUF6QjtBQUpWLENBdkRXLEVBNkRYO0FBQ0UsV0FBUywwQ0FEWDtBQUVFLFVBQVEsTUFGVjtBQUdFRCxZQUFVLGdCQUhaO0FBSUVDLFVBQVEsQ0FBRSxXQUFGLEVBQWUsUUFBZixFQUF5QixTQUF6QjtBQUpWLENBN0RXLEVBbUVYO0FBQ0UsV0FBUywyQ0FEWDtBQUVFLFVBQVEsTUFGVjtBQUdFRCxZQUFVLGFBSFo7QUFJRUMsVUFBUSxDQUFFLFdBQUYsRUFBZSxRQUFmLEVBQXlCLFNBQXpCO0FBSlYsQ0FuRVcsRUF5RVg7QUFDRSxXQUFTLHdDQURYO0FBRUUsVUFBUSxNQUZWO0FBR0VELFlBQVUsYUFIWjtBQUlFQyxVQUFRLENBQUUsV0FBRixFQUFlLFFBQWYsRUFBeUIsU0FBekI7QUFKVixDQXpFVyxFQStFWDtBQUNFLFdBQVMsOENBRFg7QUFFRSxVQUFRLE1BRlY7QUFHRUQsWUFBVSxhQUhaO0FBSUVDLFVBQVEsQ0FBRSxXQUFGLEVBQWUsUUFBZixFQUF5QixTQUF6QjtBQUpWLENBL0VXLEVBcUZYO0FBQ0UsV0FBUyw4Q0FEWDtBQUVFLFVBQVEsTUFGVjtBQUdFRCxZQUFVLGFBSFo7QUFJRUMsVUFBUSxDQUFFLFdBQUYsRUFBZSxRQUFmLEVBQXlCLFNBQXpCO0FBSlYsQ0FyRlcsQ0FBYjs7QUE2RkFDLE9BQU9ILE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6Im1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtb3ZpZXMgPSBbXG4gIHtcbiAgICAndGl0bGUnOiAnVG95IFN0b3J5IDMnLFxuICAgICd5ZWFyJzogJzIwMTAnLFxuICAgIGRpcmVjdG9yOiAnTGVlIFVua3JpY2gnLFxuICAgIGdlbnJlczogWyAnQW5pbWF0aW9uJywgJ0FkdmVudHVyZScsICdDb21lZHknIF1cbiAgfSxcbiAge1xuICAgICd0aXRsZSc6ICdIZWxsYm95IElJOiBUaGUgR29sZGVuIEFybXknLFxuICAgICd5ZWFyJzogJzIwMDgnLFxuICAgIGRpcmVjdG9yOiAnR3VpbGxlcm1vIGRlbCBUb3JvJyxcbiAgICBnZW5yZXM6IFsgJ0FjdGlvbicsICdBZHZlbnR1cmUnLCAnRmFudGFzeScgXVxuICB9LFxuICB7XG4gICAgJ3RpdGxlJzogJ0RlYXBvb2wnLFxuICAgICd5ZWFyJzogJzIwMTYnLFxuICAgIGRpcmVjdG9yOiAnVGltIE1pbGxlcicsXG4gICAgZ2VucmVzOiBbICdBY3Rpb24nLCAnQWR2ZW50dXJlJywgJ0NvbWVkeScgXVxuICB9LFxuICB7XG4gICAgJ3RpdGxlJzogJ1N1aWNpZGUgU3F1YWQnLFxuICAgICd5ZWFyJzogJzIwMTYnLFxuICAgIGRpcmVjdG9yOiAnRGF2aWQgQXllcicsXG4gICAgZ2VucmVzOiBbICdBY3Rpb24nLCAnQWR2ZW50dXJlJywgJ0NvbWVkeScgXVxuICB9LFxuICB7XG4gICAgJ3RpdGxlJzogJ1pvb3RvcGlhJyxcbiAgICAneWVhcic6ICcyMDEwJyxcbiAgICBkaXJlY3RvcjogJ0J5cm9uIEhvd2FyZCcsXG4gICAgZ2VucmVzOiBbICdBbmltYXRpb24nLCAnQWN0aW9uJywgJ0FkdmVudHVyZScgXVxuICB9LFxuICB7XG4gICAgJ3RpdGxlJzogJ1NlZWQgb2YgQ2h1Y2t5JyxcbiAgICAneWVhcic6ICcyMDA0JyxcbiAgICBkaXJlY3RvcjogJ0RvbiBNYW5jaW5pJyxcbiAgICBnZW5yZXM6IFsgJ0NvbWVkeScsICdGYW50YXN5JywgJ0hvcnJvcicgXVxuICB9LFxuICB7XG4gICAgJ3RpdGxlJzogJ1RhbmdsZWQnLFxuICAgICd5ZWFyJzogJzIwMTAnLFxuICAgIGRpcmVjdG9yOiAnQnlyb24gSG93YXJkJyxcbiAgICBnZW5yZXM6IFsgJ0FuaW1hdGlvbicsICdBZHZlbnR1cmUnLCAnQ29tZWR5JyBdXG4gIH0sXG4gIHtcbiAgICAndGl0bGUnOiAnSG9tZSBBbG9uZScsXG4gICAgJ3llYXInOiAnMTk5MCcsXG4gICAgZGlyZWN0b3I6ICdDaHJpcyBDb2x1bWJ1cycsXG4gICAgZ2VucmVzOiBbICdGYW1pbHknLCAnQ29tZWR5JyBdXG4gIH0sXG4gIHtcbiAgICAndGl0bGUnOiAnSGFycnkgUG90dGVyIGFuZCB0aGUgU29yY2VyZXJcXCdzIFN0b25lJyxcbiAgICAneWVhcic6ICcyMDAxJyxcbiAgICBkaXJlY3RvcjogJ0NocmlzIENvbHVtYnVzJyxcbiAgICBnZW5yZXM6IFsgJ0FkdmVudHVyZScsICdGYW1pbHknLCAnRmFudGFzeScgXVxuICB9LFxuICB7XG4gICAgJ3RpdGxlJzogJ0hhcnJ5IFBvdHRlciBhbmQgdGhlIENoYW1iZXIgb2YgU2VjcmV0cycsXG4gICAgJ3llYXInOiAnMjAwMicsXG4gICAgZGlyZWN0b3I6ICdDaHJpcyBDb2x1bWJ1cycsXG4gICAgZ2VucmVzOiBbICdBZHZlbnR1cmUnLCAnRmFtaWx5JywgJ0ZhbnRhc3knIF1cbiAgfSxcbiAge1xuICAgICd0aXRsZSc6ICdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBQcmlzb25lciBvZiBBemthYmFuJyxcbiAgICAneWVhcic6ICcyMDA0JyxcbiAgICBkaXJlY3RvcjogJ0FsZm9uc28gQ3VhcsOzbicsXG4gICAgZ2VucmVzOiBbICdBZHZlbnR1cmUnLCAnRmFtaWx5JywgJ0ZhbnRhc3knIF1cbiAgfSxcbiAge1xuICAgICd0aXRsZSc6ICdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBPcmRlciBvZiB0aGUgUGhvZW5peCcsXG4gICAgJ3llYXInOiAnMjAwNycsXG4gICAgZGlyZWN0b3I6ICdEYXZpZCBZYXRlcycsXG4gICAgZ2VucmVzOiBbICdBZHZlbnR1cmUnLCAnRmFtaWx5JywgJ0ZhbnRhc3knIF1cbiAgfSxcbiAge1xuICAgICd0aXRsZSc6ICdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBIYWxmLUJsb29kIFByaW5jZScsXG4gICAgJ3llYXInOiAnMjAwOScsXG4gICAgZGlyZWN0b3I6ICdEYXZpZCBZYXRlcycsXG4gICAgZ2VucmVzOiBbICdBZHZlbnR1cmUnLCAnRmFtaWx5JywgJ0ZhbnRhc3knIF1cbiAgfSxcbiAge1xuICAgICd0aXRsZSc6ICdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBEZWF0aGx5IEhhbGxvd3M6IFBhcnQgMScsXG4gICAgJ3llYXInOiAnMjAxMCcsXG4gICAgZGlyZWN0b3I6ICdEYXZpZCBZYXRlcycsXG4gICAgZ2VucmVzOiBbICdBZHZlbnR1cmUnLCAnRmFtaWx5JywgJ0ZhbnRhc3knIF1cbiAgfSxcbiAge1xuICAgICd0aXRsZSc6ICdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBEZWF0aGx5IEhhbGxvd3M6IFBhcnQgMicsXG4gICAgJ3llYXInOiAnMjAxMScsXG4gICAgZGlyZWN0b3I6ICdEYXZpZCBZYXRlcycsXG4gICAgZ2VucmVzOiBbICdBZHZlbnR1cmUnLCAnRmFtaWx5JywgJ0ZhbnRhc3knIF1cbiAgfSxcbl07XG5cbndpbmRvdy5tb3ZpZXMgPSBtb3ZpZXM7XG5cbiJdfQ==