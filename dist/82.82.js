webpackJsonp([82],{313:function(e,n){e.exports=function(e){var n={className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]};return{aliases:["mk","mak"],contains:[e.HASH_COMMENT_MODE,{begin:/^\w+\s*\W*=/,returnBegin:!0,relevance:0,starts:{end:/\s*\W*=/,excludeEnd:!0,starts:{end:/$/,relevance:0,contains:[n]}}},{className:"section",begin:/^[\w]+:\s*$/},{className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{"meta-keyword":".PHONY"},lexemes:/[\.\w]+/},{begin:/^\t+/,end:/$/,relevance:0,contains:[e.QUOTE_STRING_MODE,n]}]}}}});
//# sourceMappingURL=82.82.js.map