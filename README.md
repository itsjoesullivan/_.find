_.find
======

Query JSON using MongoDB-style syntax, surfaced as an Underscore.js mixin.

###Usage

```javascript

	var subject = [
		{
			hello: 'world',
			goodnight: 'moon'
		},
		{
			hello: 'dolly',
			goodnight: 'my love'
		}
	];

	_.find({
		hello:'world'
	});
	>>> { hello: 'world', goodnight: 'moon' }
```