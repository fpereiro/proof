var dale   = require ('dale');
var teishi = require ('teishi');

var tm = function (machine, initial, iterations) {
   var ic = 0, pos = 0, tape = [], config = initial, longestName = 0;
   dale.do (machine, function (v, k) {
      if (k.length > longestName) longestName = k.length;
   });

   var pad = function (s, l) {
      if (l === 0 || (s + '').length === l) return s;
      if ((s + '').length < l) return s + dale.do (dale.times (l - (s + '').length), function () {return ' '}).join ('');
   }

   var run = function (lastConfig) {
      var scanned = tape [pos];
      if (scanned === undefined) {
         scanned = tape [pos] = ' ';
      }
      if (scanned === ' ') scanned = 'none';
      var actions = machine [config] [scanned];
      if (! actions) actions = machine [config] ['else'];
      if (! actions) return console.log ('ERROR: No matching config for scanned symbol', scanned, 'with config', config);
      dale.do (actions.slice (0, -1), function (action) {
         if (action === 'L') return pos--;
         if (action === 'R') {
            pos++;
            if (tape [pos] === undefined) tape [pos] = ' ';
            return;
         }
         if (action === 'E') return tape [pos] = ' ';
         if (action.match (/^P.$/)) return tape [pos] = action [1];
      });
      if (ic++ > iterations) return;
      if (config !== actions [actions.length - 1]) {
         console.log (pad ('', 4), pad ('',     longestName), '  ', pad ('', pos) + '_');
         console.log (pad (ic, 4), pad (config, longestName), '->', tape.join (''));
      }
      config = actions [actions.length - 1];
      run ();
   }
   run ();
}

var sqroot2 = {
   begin: {
      none: ['P@', 'R', 'P1', 'new']
   },
   new:   {
      '@':  ['R', 'mark-digits'],
      else: ['L', 'new'],
   },
   'mark-digits': {
      0:    ['R', 'Px', 'R',            'mark-digits'],
      1:    ['R', 'Px', 'R',            'mark-digits'],
      none: ['R', 'Pz', 'R', 'R', 'Pr', 'find-x'],
   },
   'find-x': {
      x:    ['E',      'first-r'],
      '@':  [          'find-digits'],
      else: ['L', 'L', 'find-x'],
   },
   'first-r': {
      r:    ['R', 'R', 'last-r'],
      else: ['R', 'R', 'first-r'],
   },
   'last-r': {
      r:    ['R', 'R',             'last-r'],
      none: ['Pr', 'R', 'R', 'Pr', 'find-x'],
   },
   'find-digits': {
      '@':  ['R', 'R', 'find-1st-digit'],
      else: ['L', 'L', 'find-digits'],
   },
   'find-1st-digit': {
      x:    ['L',      'found-1st-digit'],
      y:    ['L',      'found-1st-digit'],
      z:    ['L',      'found-2nd-digit'],
      none: ['R', 'R', 'find-1st-digit'],
   },
   'found-1st-digit': {
      0: ['R',           'add-zero'],
      1: ['R', 'R', 'R', 'find-2nd-digit'],
   },
   'find-2nd-digit': {
      x:    ['L',      'found-2nd-digit'],
      y:    ['L',      'found-2nd-digit'],
      none: ['R', 'R', 'find-2nd-digit'],
   },
   'found-2nd-digit': {
      0:    ['R', 'add-zero'],
      1:    ['R', 'add-one'],
      none: ['R', 'add-one'],
   },
   'add-zero': {
      r:    ['Ps',     'add-finished'],
      u:    ['Pv',     'add-finished'],
      else: ['R', 'R', 'add-zero'],
   },
   'add-one': {
      r:    ['Pv',           'add-finished'],
      u:    ['Ps', 'R', 'R', 'carry'],
      else: ['R', 'R',       'add-one'],
   },
   carry: {
      r:    ['Pu',           'add-finished'],
      none: ['Pu',           'new-digit-is-zero'],
      u:    ['Pr', 'R', 'R', 'carry'],
   },
   'add-finished': {
      '@':  ['R', 'R', 'erase-old-x'],
      else: ['L', 'L', 'add-finished'],
   },
   'erase-old-x': {
      x:    ['E', 'L', 'L',  'print-new-x'],
      z:    ['Py', 'L', 'L', 'print-new-x'],
      else: ['R', 'R',       'erase-old-x']
   },
   'print-new-x': {
      '@':  ['R', 'R', 'erase-old-y'],
      y:    ['Px',     'find-digits'],
      none: ['Px',     'find-digits'],
   },
   'erase-old-y': {
      y:    ['E', 'L', 'L', 'print-new-y'],
      else: ['R', 'R',      'erase-old-y'],
   },
   'print-new-y': {
      '@':  ['R',       'new-digit-is-one'],
      else: ['Py', 'R', 'reset-new-x'],
   },
   'reset-new-x': {
      none: ['R', 'Px', 'flag-result-digits'],
      else: ['R', 'R',  'reset-new-x'],
   },
   'flag-result-digits': {
      s:    ['Pt', 'R', 'R', 'unflag-result-digits'],
      v:    ['Pw', 'R', 'R', 'unflag-result-digits'],
      else: ['R', 'R',       'flag-result-digits'],
   },
   'unflag-result-digits': {
      s:    ['Pr', 'R', 'R', 'unflag-result-digits'],
      v:    ['Pu', 'R', 'R', 'unflag-result-digits'],
      else: ['find-digits'],
   },
   'new-digit-is-zero': {
      '@':  ['R', 'print-zero-digit'],
      else: ['L', 'new-digit-is-zero'],
   },
   'print-zero-digit': {
      0:    ['R', 'E', 'R',       'print-zero-digit'],
      1:    ['R', 'E', 'R',       'print-zero-digit'],
      none: ['P0', 'R', 'R', 'R', 'cleanup'],
   },
   'new-digit-is-one': {
      '@':  ['R', 'print-one-digit'],
      else: ['L', 'new-digit-is-one'],
   },
   'print-one-digit': {
      0:    ['R', 'E', 'R',       'print-one-digit'],
      1:    ['R', 'E', 'R',       'print-one-digit'],
      none: ['P0', 'R', 'R', 'R', 'cleanup'],
   },
   cleanup: {
      none: [               'new'],
      else: ['E', 'R', 'R', 'cleanup'],
   }
}

tm (sqroot2, 'begin', process.argv [2]);
