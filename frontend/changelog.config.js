module.exports = {
	disableEmoji: false,
	format: '{type}{scope}: {emoji}{subject}',
	list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
	maxMessageLength: 64,
	minMessageLength: 3,
	questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
	scopes: [],
	"types": {
		"chore": {
			"description": "Build process or auxiliary tool changes",
			"emoji": "🛠",
			"value": "chore"
		},
		"docs": {
			"description": "Documentation only changes",
			"emoji": "📚",
			"value": "docs"
		},
		"feat": {
			"description": "A new feature",
			"emoji": "✨",
			"value": "feat"
		},
		"fix": {
			"description": "A bug fix",
			"emoji": "🐛",
			"value": "fix"
		},
		"perf": {
			"description": "A code change that improves performance",
			"emoji": "⚡️",
			"value": "perf"
		},
		"refactor": {
			"description": "A code change that improves code quality/readability",
			"emoji": "🌈",
			"value": "refactor"
		},
		"release": {
			"description": "Create a release commit",
			"emoji": "🏹",
			"value": "release"
		},
		"test": {
			"description": "Test code",
			"emoji": "🚨",
			"value": "test"
		},
	}
};