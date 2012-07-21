_.find
======

Query JSON using MongoDB-style syntax, surfaced as an Underscore.js mixin.

###Usage

One-off query:

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
	
	_(subject).find({
		hello:'world'
	});
	// { hello: 'world', goodnight: 'moon' }
```


Grab a handle using an empty query, then query against the handle
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
	

	var handle = _(subject).find();
	
	handle.find({hello:'world'});
	
	// { hello: 'world', goodnight: 'moon' }
```