## Notes

### Petzold 2008 on Turing 1936

p64

- Computable numbers: subset of real numbers whose decimals can be determined/calculated by finite means. Note: determined == calculated. Calculation as determination.

- Finite means refers to a process that could be infinite, but where each step is well defined and carried out in order. Perfect analogy with Cantor's enumerable infinite (natural numbers).

- "Although the subject (...) [is] the computable *numbers*, it is almost equally easy to define and investigate computable functions of an integral variable or a real computable variable, computable predicates, and so forth." What's the difference between a number and a function? A function takes a number and produces another one, while seeing a number as a function would be like a function that returned its own argument? That would work. But the point is that a number like pi has to be computed by a function that holds some state, then the function would be the one you call to generate the *next* digit, given the ones you already generated. This function probably only needs the position, and not the entire sequence; that, in the case of pi. What if you defined a number where the next digit was a function of all the previous digits, and where you could not skip any of them in the computation? Then the number would be akin to a chaotic process which is incompressible (all the previous information is necessary and equally relevant to represent it exactly).

- "The fundamental problems involved are, however, the same in each case, and I have chosen the computable numbers for explicit treatment as involving the least cumbrous technique."

- "This will include a development of the theory of functions of a real variable expressed in terms of computable numbers." This needs to be done.

p65

- "According to my definition, a number is computable if its decimal can be written down by a machine." Computability as an explicit process of transformation that can be mechanized. By mechanizing it and taking the human away from it, we feel the process can carry itself out, given energy, like a physical process.

- Petzold: "automated computing". We now simply say "computing", and when a human does it, "manual computing".

p66

- "(...) computable numbers include all numbers which could naturally be regarded as computable." Computable numbers are the "naturally regarded" computable numbers, makes me think of Feigenbaum's (from Gleick) "what in a reasonable man's mind" standard of proof. Petzold: in the list are rationals, algebraic numbers, and some trascendentals: pi, e; and only real parts of things because Turing placed the discussion on real terms (excluding complex variables). But not necessary all trascendentals. Note: trascendentals seem to straddle the computable and uncomputable, like some problems are straddling positions 1 (ch1) and 2 (ch2) in the Chomsky Hierarchy.

- "The computable numbers do not, however, include all definable numbers, and an example is given of a definable number which is not computable." I dare to say that then those numbers are definable in terms comprehensible to us humans, but are not algorithmically definable. They will involve existential or universal quantifiers, but won't be generatie (or may be generative, but we don't know or say how).

- "Although the class of computable numbers is so great, and in many ways similar to the class of real numbers, it is nevertheless enumerable." Computables are then mappable to the enumerable infinite; and reals, while similar to computable ones, are not - they are beyond enumerable.

p67

- "In Section 8 I examine certain arguments which would seem to prove the contrary. By the correct application of one of these arguments, conclusions are reached which are superficially similar to those of Godel." Similar how, and why superficially?

- "In particular, it is shown (Section 11) that the Hilbertian Entscheidungsproblem can have no solution." Then there's no general process for solving any problem. The question is, what does "solving" mean? If problems can be generated/simulated by algorithmic processes (like a simulation of a chaotic system or a TM itself), what does it mean that some of those cannot be "solved"? Solving as reducing or compressing. The real is question is that of what means to *solve* something.

- Church's "effective calculability" as equivalent to Turing's "computability". "The proof of equivalence (...) is outlined in an appendix to the present paper."

p68

- Section 1: Computing machines.

- "No real attempt will be made to justify the definitions given until we reach Section 9. For the present I shall only say that the justification lies in the fact that the human memory is necessarily limited." Provisional justification of them all is the finity of human memory.

- "We may compare a man in the process of computing (...) to a machine which is only capable of a finite number of conditions q1, q2, ..., qR, which will be called "m-configurations". Man or machine as the same thing. The intention here is to talk about computation in the abstract, as its own ideal Platonic concept, which ironically also means that it can be implemented on machines and hence can be quite physical.

- Petzold: "The *m* stands for *machine*." Configurations as states of mind.

p69

- "The machine is supplied with a "tape" (the analogue of paper) running through it, and divided into sections (called "squares") each capable of bearing a "symbol"." Tape is subdivided memory; memory is divided on addresses. The symbol is not necessarily binary.

- "At any moment there is just one square, say the r-th, bearing the symbol S (r) which is "in the machine". We call this square the "scanned square". The symbol on the scanned square may be called the "scanned symbol". The "scanned symbol" is the only one of which the machine is, so to speak, "directly aware"." So, the machine only reads a symbol at a time. The input is then atomic. Every action is done one at a time, and reading data is the same because it's one of the actions.

p70

- "However, by altering its m-configuration the machine can effectively remember some of the symbols which it has "seen" (scanned) previously." Memory retrieval is also encoded into the mconfs. Memory is also step-wise. This insistence on step-wise processes is the essence of algorithms (and perhaps constructible mathematics).

- "The possible behaviour of the machine at any moment is determined by the m-configuration qn and then scanned symbol S (r). This pair qn, S (r) will be called the "configuration": thus the configuration determines the possible behaviour of the machine." Current mconf + position of the tape with associated symbol = configuration. Conf determines behaviour of the machine.

- Actions that can be done by the machine: write a symbol (on a blank square, or also overwrite an existing one); erase scanned symbol. And change the square being scanned but only by one position, either left or right.

p71

- In addition, the m-configuration may be changed. Note: no symbol can be interpreted as a certain kind of symbol, so that erasing a symbol is merely writing this kind of symbol on the square.

- "Some of the symbols written down will form the sequence of figures which is the decimal of the real number which is being computed. The others are just rough notes to "assist the memory". It will only be these rough notes which will be liable to erasure." Distinction between results and temporary calculations. A function produces and temporarily stores data that won't be outputted nor retained. Is this essential or are these temporary results *muda*?

- "It is my contention that these operations include all those which are used in the computation of a number. The defense of this contention will be easier when the theory of the machines is familiar to the reader."

p72

- Section 2: Automatic machines.

- "If at each stage the motion of a machine (in the sense of Section 1) is *completely* determined by the configuration, we shall call the machine an "automatic machine" (or a-machine)." Those are the default now.

- "For some purposes we might use machines (choice machines or c-machines) whose motion is only partially determined by the configuration (hence the use of the word "possible" in Section 1)." A program waiting for input from the user is a c-machine.

- "When such a machine reaches one of these ambiguous configurations, it cannot go on until some arbitrary choice has been made by an external operator. This would be the case if we were using machines to deal with axiomatic systems." Why do axioms require human and presumably non-algorithmic input? In any case, it's amazing that Turing is writing of "machines to deal with axiomatic systems."

- "In this paper I deal only with automatic machines, and will therefore often omit the prefix a-."

- "If an a-machine prints two kinds of symbols, of which the first kind (called figures) consists entirely of 0 and 1 (the others being called symbols of the second kind), then the machine will be called a computing machine." OK! An a-machine that prints *binary* numbers (figures, which are the end result) and also prints other symbols only for computation/scratchpad reasons, is a *computing machine*.

p73

- If machine starts with blank tape (and presumably some m-configs) and it is started on the "correct" m-config, then "the subsequence of the symbols printed by it which are of the first kind will be called the *sequence computed by the machine*." Note: *sequence computed by the machine* is the output.

- "The real number whose expression as a binary decimal is obtained by prefacing this sequence by a decimal point is called the *number computed by the machine*." Note: so, the output must be prefixed by a point to be a number expressed as a binary decimal. Although I believe you could still program these machines to start by putting a 0 and then a dot, although then the dot would be a symbol of the second kind in that it is not a zero or one, so that makes things more cumbersome. So while it's likely possible, it is inconvenient, so better to go with this convention.

p74

- Petzold's restating: "The number computed by the machine is the binary fraction obtained by prefacing this sequence with a binary point." Note from Petzold: all numbers generated by a TM will be between 0 and 1, but "this short range should be fine for any insights into enumerability that might be needed." Note: recurring idea, whatever is between 0 and 1 represents all reals anyway. Whatever happens on one side of the dot, can happen on the other side, and considering both at the same time doesn't seem to alter the fundamental problem, at least intuitively. Feels true, though I wonder if it's been proven. The universe in a speck, the infinity in a single unit.

p75

- "At any stage of the motion of the machine, the number of the scanned square, the complete sequence of all the symbols on the tape, and the m-configuration will be said to describe the *complete configuration* at that stage." Note: triplet of position, contents of the tape and the current m-configuration. Though the list of m-configs should also be counted as an input, unless we put the m-configs as being the machine itself.

- "The changes of the machine and tape between successive complete configurations will be called the *moves* of the machine." Note; in "complete" configuration, is there a hint of a multi-step process that is "completed" before the next process takes place?

p76

- "If a computing machine never writes down more than a finite number of symbols of the first kind, it will be called *circular*. Otherwise it is said to be *circle-free*."

- "A machine will be circular if it reaches a configuration from which there is no possible move, or if it goes on moving, and possibly printing symbols of the second kind, but cannot print any more symbols of the first kind. The significance of the term "circular" will be explained in Section 8." Petzold's note: "Turing wants his machines to keep printing digits *forever*. The circle-free machines are the good machiens. If a machine really wants to compute the binary equivalent of 1/4, it should print 0 and 1 and then continue printing 0s forever." Note: this is confusing at the beginning, because you'd expect a program to finish and give you the right result (assumption/axiom: program === computer). Definitely you don't want a program to compute 1/4 and keep on going forever. But by making correct programs keep on going forever, you only have two categories: programs that do what they are expected, and the ones that halt and do not. Otherwise you'd have three categories: programs that halt because they are done, programs that don't halt because they are doing the right thing (computing a periodic or trascendental number) and because of that cannot stop; and faulted programs. By making right programs keep on printing, even if it is an endless list of 0s, you simply divide it in two. Makes it so much easier. Also, though, it could be said that a program that keeps on printing 0s stops producing any useful information and is converting energy into 0s, but not energy into information.

- "*Computable sequences and numbers*: A sequence is said to be computable if it can be computed by a circle-free machine. A machine is computable if it differes by an integer from the number computed by a circle-free machine." Number as sequence, the dot is irrelevant.

p77

- "We shall avoid confusion by speaking more often of computable sequences than of computable numbers."

p79

- "A machine can be constructed to compute the sequence 010101..."

p79-80

- "The machine is to have the for m-configurations b, c, k, e and is capable of printing "0" and "1". THe behavior of the machine is described in the following table in which "R" means "the machine moves so that it scans the square immediatelyon the right of the one it was scanning previously." Similarly for "L". "E" means "the scanned symbol is erased" and "P" stands for "prints"".

p80

- "This table (and all succeeding tables of the same kind) is to be understood to mean that for a configuration described in the first two columsn the operations in the third column are carried out successively, and the machine then goes over into the m-configuration described in the last column."

- Petzold: "The table has four columns, separated into two pairs: 1) configuration: a) m-config; b) symbol; 2) behaviour: a) operations; b) final m-config." Note: configuration is input, behaviour is output; 1a) and 2b) pertain to the m-config; 1b) and 2a) pertain to the tape (both the symbols and the position). A Turing machine operates on itself. But so far it doesn't write its own m-configurations, otherwise it would be self-modifiable at that level too.

- "When the second column is left blank, it is understood that the behaviour of the third and fourth columns applies for any symbol and no symbol." So, "any" symbol is anything except blank, and if the column itself is blank it means both any symbol and no symbol.

- "The machine starts in the m-configuration b with a blank tape."

p81

- Petzold: "Turing's machines always start in m-configuration b (for *begin* (...)). Here's the long awaited machine:"

```
configuration         behaviour
mconf   symbol   operations   final mconf
b        none       P0, R         c
c        none           R         k
k        none       P1, R         f
f        none           R         b
```

- Petzold: "Although the tape is theoretically infinite in both directions, the machines that turing describes in this paper require only that the tape extend infinitely towards the right because that's where the digits of the computable sequences are printed:" If that's the case, then why not start only with the requirement of a tape that has infinite squares but starts at 0?

p82

Some observations on this machine:

- It never goes to the left. It just keeps on moving to the right.
- It leaves a blank square between the numbers printed: 0 1 0 1, instead of 0101
- Two configs (c and f) are the same in their operations, but they differ in which mconf they set afterwards. And you need those two different target mconfs, because one prints 0 and the other one prints 1.
- This machine always assumes that there's no symbol on each scanned square. It doesn't account for a different case. But it is also true that the machine could never find a square that is not blank, if it's always moving right on a blank tape, and if it always move right after writing on a square. This is highly suggestive of which kinds of comparable analysis can be done to more complex machines in terms of how many provisions are required of them for them to not reach a state that's not determined by its set of mconfs.

p83

Petzold's machine for printing 1/4 (0 1 0 0 0...)

```
configuration         behaviour
mconf   symbol   operations   final mconf
b        none       P0, R         c
c        none           R         d
d        none       P1, R         e
e        none           R         f
f        none       P0, R         e
```

- Also another thing: both machines start with mconf b selected.
- The 1/4 machine has an extra mconf. mconf e, instead of going back to b, goes back to e instead.
- Petzold: "It should be very, very obvious that similar computing machines can be defined to compute *any rational number*. The rational numbers are not the issue here." Either my math is very limited, or the word "obvious" is very easily blandished about.

p84

- "If, contrary to the description in Section 1, we allow the letters *L, R* to appear more than once in the operations column we can simplify the table considerably."

```
mconf   symbol   operations   final mconf

         none     P0            b
b        0        R, R, P1      b
         1        R, R, P0      b
```

- Petzold: "Turing will also soon allow a configuration to have multiple P operations."

Then a mconf can have multiple shifting (moving the tape) and printing operations. However (and it'll be interesting to see if this changes) it can only take input (read a square) at the beginning, and then it can only set the next mconf once. No concept of function calls from within the operations.

- Petzold: "The important lesson is that any particular sequence can be cmputed by a variety of different machines. However, a particular automatic machine starting with a blank tape always computes the same sequence."

p85

- Petzold: "Using multiple L, R and P operations in a single configuration can simplify machines considerably, but keep in mind that these simplified tables can always be converted back into the more rigid style that allows only one L, R, or P operation per state.

- "As a slightly more difficult example we can construct a machine to compute the sequence 001011011101111011111..." Note: this means a 0, and then the following: a 0, followed by a 1. Then a 0, followed by two 1s. Then a 0, followed by three 1s.

- Petzold: "What he wants to tackle now is an irrational number, and one that very likely is also trascendental." Talk about likelihood in math like this makes a case for heuristics, or at least shows they are used in certain places, if not in proofs.

- Petzold: "When this new machine is printing a run of 1s, it must somehow "remember" how many 1s it printed in the previous run, and then print one more. By scanning back and forth, the machine always has access to the previous run so it can use that information to build the next run. It will be interesting to study Turing's strategy for accomplishing this feat."

- "The machine is to be capable of five m-configurations, viz. "o", "q", "p", "f", "b", and of printing "e", "x", "0", "1". The first three symbols on the tape will be "ee0"; the other figures follow on alternate squares.

- Petzold: "(...) he's proposing that the tape end up like this: "ee0 0 1 0 1 1 0 0 1 1 1 0 ..."".

- Petzold: "The e character is known (...) as a *schwa*." Turing uses the *schwa* for what programmes call a *sentinel*. It's a special character that, in this case, indicates the boundary of the number. The machine can move its head to the very beginning of the tape by moving left whenever the scanned square is *not* the schwa."

p86

- Petzold: "(Why are two schwas? Only one is required in this example, but Turing later creates a machine that requires to scwas for a sentinel. Perhaps he added a second schwa in this example just for consistency.)"

- Petzold: "In the first example machine, the blank squares between the 0 and 1 digits served no purpose. Here they will play an important role."

- "On the intermediate squares we never print anything but "x". These letters serve to "keep the place" for us and are erased when we have finished with them."

- Petzold: "Turing is dividing the squares of his tape into two categories. The machine prints the 0s and 1s on every other square. With the exception of the sentinel, no other symbols appear on these squares. Turing uses the intermediate squares as a temporary scratchpad of sorts. We can refer to "numeric squares" that contain 0s and 1s and "non-numeric squares" that can contain other symbols. (Turing later calls these F-squares and E-squares for *figures* and *erasable*." Note: the first schwa would be in a numberic square! Wouldn't this violate the strict rule of how a machine's output should look as per the definitions?

- "We also arrange that in the sequence of figures on alternate squares there shall be no blanks."

- Petzold: "Every new figure (...) is printed on the next available blank numeric square. No numeric squares are skipped. These restrictions are a collection of rules (...) that Emil Post later called a "Turing convention machine", which is a little more restrictive than the generalized "Turing Machine." A Turing convention machine never erases a numeric square, or writes over an existing figure on a numeric square with a different figure. These implicit rules become important later on."

p87

```
configuration                        behaviour
mconf   symbol              operations              final mconf

b        none    Pe, R, Pe, R, P0, R, R, P0, L, L        o

o         1      R, Px, L, L, L                          o
o         0                                              q

q        0, 1    R, R                                    q
q        none    P1, L                                   p

p         x      E, R                                    q
p         e      R                                       f
p        none    L, L                                    p

f        any     R, R                                    f
f        none    P0, L, L                                o
```

- Multiple symbols seen can map to a single set of operations.
- Set of operations can be empty! but the m-conf is changed. If in this case it changed to the same m-conf, you can prove that you have a circle machie if it gets to that configuration!
- The machine starts at `b`, writes `ee0 0`, sets the cursor over the first 0 and calls `o`.
- `o` only is called on F squares that are not blank (thus, only containing 0 and 1). Its purpose is to mark the 1s with x (on the E square immediately to their right). It marks the 1s from right to left (sees the 1, puts the x to its side, then goes two squares left from the marked 1). While it sees 1s, it calls itself. When it finds a 0, it calls `q` instead.
- `q` goes right over F squares. While there's 0s or 1s, it keeps on going right by calling itself. When it finds a blank, it prints a 1 and goes to the E square to its left, calling `p`.
- `p` goes left over E squares, calling itself and going left while it finds empty squares. When it finds a schwa, it goes to the next F square and calls `f`. If, instead, it finds an `x`, it deletes it, goes to the next F square and calls `q`.
- `f` goes forward over F squares, since this configuration is only called by `p` after seeing a schwa and moving one to the right. If it sees a 0 or 1, then it keeps on going to the right and calls itself. When it finds a blank F square, it prints a 0, goes two back (to the previous F square) and calls `o`. It is confusing that Turing said "any" instead of 0, 1 for this configuration, since this configuration doesn't see any other symbols since it's always on F squares.

Calls between configs:

```
b -> o
o -> q
q -> p
p -> f & q
f -> o;
```

- At first sight, it looks like the machine is always going to the "next" configuration (once a configuration stopped calling itself). If we ignore `b`, then the order would be `o`, `q`, `p`, `f`. `f` calls `o` so that would start over the cycle. This would be accurate except that `p` can also call `q` (the previous configuration); therein lies the trickiest part of the machine.

Execution:

```
  -> ee0 0 -> ee0 0 -> ee0 0 -> ee0 0   -> ee0 0 1 -> ee0 0 1 -> ee0 0 1 -> ee0 0 1 -> ee0 0 1
b      o        q          q          q         p        p        p           f            f

ee0 0 1 -> ee0 0 1   -> ee0 0 1 0 -> ee0 0 1x0 -> ee0 0 1x0 -> ee0 0 1x0 -> ee0 0 1x0 -> ee0 0 1x0   -> ee0 0 1x0 1
      f            f          o          o            q              q              q              q             p

ee0 0 1x0 1 -> ee0 0 1 0 1 -> ee0 0 1 0 1 -> ee0 0 1 0 1   -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1
       p               q                q                q               p              p              p

ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1
     p              p              p                 f                  f                  f                  f

ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 -> ee0 0 1 0 1 1   -> ee0 0 1 0 1 1 0 -> ee0 0 1 0 1 1x0 -> ee0 0 1 0 1x1x0
          f                  f                  f                o                o                o

ee0 0 1 0 1x1x0 -> ee0 0 1 0 1x1x0 -> ee0 0 1 0 1x1x0 -> ee0 0 1 0 1x1x0 -> ee0 0 1 0 1x1x0   -> ee0 0 1 0 1x1x0 1
        q                    q                    q                    q                    q                   p

ee0 0 1 0 1x1x0 1 -> ee0 0 1 0 1x1 0 1 -> ee0 0 1 0 1x1 0 1 -> ee0 0 1 0 1x1 0 1   -> ee0 0 1 0 1x1 0 1 1 ->
             p                     q                      q                      q                     p

ee0 0 1 0 1x1 0 1 1 -> ee0 0 1 0 1x1 0 1 1 -> ee0 0 1 0 1x1 0 1 1 -> ee0 0 1 0 1 1 0 1 1 -> ee0 0 1 0 1 1 0 1 1
               p                    p                    p                       q                        q

ee0 0 1 0 1 1 0 1 1 -> ee0 0 1 0 1 1 0 1 1 -> ee0 0 1 0 1 1 0 1 1   -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1
                q                        q                        q                       p                      p

ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1
               p                      p                      p                      p                      p

ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1
     p                      p                      p                         f
```

Execution (omitting steps when a mconf calls itself):

```
  -> ee0 0 -> ee0 0 -> ee0 0 1 -> ee0 0 1 -> ee0 0 1 0 -> ee0 0 1x0 -> ee0 0 1x0 1 -> ee0 0 1 0 1 -> ee0 0 1 0 1 1
b      o        q           p       f              o          q                 p             q                 p

ee0 0 1 0 1 1 -> ee0 0 1 0 1 1 0 -> ee0 0 1 0 1x1x0 -> ee0 0 1 0 1x1x0 1 -> ee0 0 1 0 1x1 0 1 -> ee0 0 1 0 1x1 0 1 1
  f                          o              q                         p                   q                       p

ee0 0 1 0 1 1 0 1 1 -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1 -> ee0 0 1 0 1 1 0 1 1 1 0
            q                             p       f                                          o
```

Sequence of calls (skipping when a mconf calls itself).

- boqpfoqpqpfoqpqpqpf

Let's split that:

- b
- oqpf
- oqpqpf
- oqpqpqpf

So there's this pattern starting always with `o` and ending with `f`. The interesting part is `qp`. The first time, there's only one `qp`. The second time, there's two `qp`s. The third time, three `qp`s. Basically, there's a `qp` for each 1 that needs to be printed. That is how the machine prints increasingly long series of 1s.

The roles begin to become clear:

- The first mconf in the repeating pattern, `o`, marks the 1s with `x`. Does it mark *all* the 1s already printed? No! It only marks those 1s it finds going left, until it finds a 0. When it finds a 0, `o` considers it as a sentinel, stops going left and calls `q`.
- The last mconf in the repeating pattern, `f`, prints the 0 after a sequence of 1s, at the very end of the sequence. It goes forward until it finds the first blank F square, prints 0 and calls `o` again.
- The first mconf of the "inner loop" of the repeating pattern, `q`, goes right on F-squares until it finds a blank one, then prints a 1 and calls `p`.
- The last mconf of the "inner loop" of the repeating pattern, `p`, is the key to the machine. If it is on a blank square, it goes left on E-squares. It is the one mconf that decides whether to call `q` again or instead go forward to `f`. `q` calls `p` again when it sees an `x` - but only after erasing the seen `x` first. If it doesn't find in x, it will go back to the beginning (the second schwa) and only then call `f` to finish the loop.

We can restate the loop in these terms:

- mark1: going left on F-squares, put an x next to each one until you find a 0. The first time the loop is executed, this operation is run with the head being on a 0, then nothing happens. Call print1.
- print1: going right on F-squares, find the next blank one and print a 1. Then go back one square, to the left of the 1 just printed. Call marktoprint.
- marktoprint: going left on E-squares, if you find an x delete it and call print1. If you are back at the beginning, call print0.
- print0: going right on F-squares, find the next blank one and print a 0. Call mark1.

The first time the loop is run: mark1 doesn't do anything. print1 prints the first 1. marktoprint goes back to the beginning without finding any 1s to mark. print0 prints the 0 after the first 1.

The second time the loop is run: mark1 goes left and marks the 1 with a `x`. print1 adds a 1 at the end, after the new 0. marktoprint finds the marked 1 (the one printed on the first loop) and calls print1, which prints another 1 at the end. marktoprint goes back and doesn't find any `x`. Finally, print0 adds the 0 at the end of the sequence.

The third time the loop is run: mark1 goes left and marks the two 1s printed on the last iteration with `x`. print1 adds a 1 at the end, after the new 0. marktoprint finds the marked 1 and calls print1 after deleting one of the `x`; print1 adds another 1; marktoprint removes the last marked 1 and calls print1; print1 adds a third 1. marktoprint goes back and doesn't find any `x`. Finally, print0 adds the 0 at the end of the sequence.

To sum it up even further: after mark1, we always call print1 and then marktoprint. the number of extra times that marktoprint calls print1 is equal to the amount of `x`s at the beginning of the loop.

p90

- Petzold: "Turing is about to show a method for notation the workings of the machine using these complete configurations - essentially snapshots of the tape together with the current m-configuration and scanned square."

- "To illustrate the working of this machine a table is given below of the first few complete configurations. These complete configurations are describe by writing down the sequence of symbols which are on the tape, with the m-configuration written below the scanned symbol. The successive complete configurations are separated by colons."

p91

```
 :ee0 0:ee0 0:ee0 0:ee0 0  :ee0 0 1:
b   o     q       q       q      p
```

p92

- Petzold: "While less visually satisfying than the physical tape, Turing's notation provides more information, in particular by indicating the next m-configuration at the current position of the head. Those successive complete configurations show a complete history of the machine's operations."

```
ee0 0 1:ee0 0 1:ee0 0 1:ee0 0 1:
   p     p        f         f
```

```
ee0 0 1:ee0 0 1  :ee0 0 1 0:
      f         f       o
```

```
ee0 0 1x0
    o
```

- "This table could also be written in the form `b:eeo0 0:eeq0 0: ... (C)`, in which a space has been made on the left of the scanned symbol and the m-configuration written in this space."

- Petzold: "Turing has flagged this format with the letter C (for "configuration"). He will refer to it in Section 6."

p93

- "This form is less easy to follow, but we shall make use of it later for theoretical purposes."

- Petzold: "Actually, in a still more modified form, it will become *essential*. Turing is already gearing up for a major presentation. He will unveil a Universal Computing Machine - today commonly termed the Universal Turing Machine or UTM - that is a functional (if not exactly commercial) equivalent of a modern computer."

- Petzold: "Try to notice what's *good* about this final format. The entire history of the operation of a machine has been arranged into a single stream of characters (...). Also notice that Turing has slipped the next m-configuration *in front of* the next scanned character. These two items in combination were defined by Turing as a *configuration*, and this pair of items occurs in the complete configuration in the same order as they occur in the first two columns of a machine table. You can take that m-configuration and symbol pair and scan through the *m-config* and *symbol* columns of a machine table looking for a match. (...) Turing will actually automate this searhcing process when construction his Universal Machine."

- "The convention of writing the figures only on alternate squares is very useful. I shall always make use of it. I shall call the one sequence of alternate squares F-squares and the other sequence E-squares. The symbols on E-squares will be liable to erasure. The symbols on F-squares form a continuous sequence. There are no blanks until the end is reached."

p94

- "There is no need to have more than one E-square between each pair of F-squares: an apparent need of more E-squares can be satisfied byhaving a sufficiently rich variety of symbols capable of being printed on E-squares." Unlimited bits by a larger vocabulary. And having it all in one square makes it simple to parse because it's already bounded.

- "If a symbol Beta is on an F-square S and a symbol Alpha is on the E-square next on the right of S, then S and Beta will be said to be *marked* with Alpha. The process of printing this Alpha will be called marking Beta (or S) with Alpha." Markings then go to the right of what they are marking. Number, then marking.

- Petzold: "However, markers are not strictly needed. It is possible to define machines that use only two symbols, or which differentiate solely between a blank square and a marked square. Such an approach was explored by mathematician Emil Post in an interesting paper that independently described a configuration similar to Turing's. (...) Post doesn't actually show his worker performing real applications. Working with squares or boxes that can be only marked or unmarked is obviously much more laborious than Turing's shortcut." I wonder if it is truly possible to write programs in them, and if so if it is possible to define a general way of converting Turing machines into Post machines that will do the same thing.

p99

- Petzold: "Let's confront our fears head on by building machines that transcend the trivial. Let's convince ourselves that Turing Machines can indeed addd and multiply (and hence, also substract, divide, calculate powers and perhaps even write poetry). The first example is a small Turing Machine that calculates all te positive integers in sequence. This machine does *not* comply with Turing's conventions because it writes each new number over the previous one. It doesn't skip any squares when printing the results, and it replaces each result with the next highest number."

```
mconf     symbol   operations   final mconf

begin      none      P0          increment

            0        P1          rewind
increment   1        P0,L        increment
           none      P1          rewind

rewind     none      L           increment
           any       R           rewind
```

Let's simulate the machine.

```
 -> 0 -> 1 -> 1  -> 1 ->  0 -> 10 -> 10 -> 10  -> 10 -> 11 -> 11 -> 11 -> 10 ->  00 -> 100
b   i    r     r    i    i     r      r      r     i     r      r    i    i     i      r

100 -> 100 -> 100  -> 100 -> 101 -> 101  -> 101 -> 100 -> 110 -> 110 -> 110  -> 110 -> 111
 r       r       r      i      r       r      i     i      r       r       r      i      r

111  -> 111 -> 110 -> 100 ->  000 -> 1000 -> 1000 -> 1000 -> 1000 -> 1000  -> 1000
   r      i     i     i      i       r        r        r        r        r       i
```

Now, skipping steps where the configuration calls itself.

```
 -> 0 -> 1 -> 1 -> 10 -> 10 -> 11 -> 11 -> 100 -> 100 -> 101 -> 101 -> 110 -> 110 -> 111 -> 111 -> 1000 -> 1000
b   i    r    i    r      i     r     i    r        i      r      i     r       i      r      i    r          i
```

- `increment` and `rewind` call each other. `increment` goes first.
- The function of `rewind` is to keep going right until it finds an empty square. When it finds an empty square, it goes one square to the left (the last square with a number on it) and calls `increment`.
- If `increment` doesn't call itself, then it is called by `begin` or `rewind`. In this case, `increment` always starts at the last number of the sequence.
- `increment` replaces 0 with 1 and 1 with 0. It also writes a 1 if it sees an empty square.
- `increment` only moves when it sees a 0; it moves left, and it keeps on calling itself. This is the only case when it calls itself; when it sees a 0 or an empty square, it calls `rewind`.

In other terms:

- `rewind` actually is in charge of going to the last number of the sequence and calling `increment`.
- Most of the logic is actually on `increment`.
- As long as it finds 1s on its way left, `increment` will replace them with 0s. When it finds a 0 or an empty space, it will print a 1 and call `rewind`.
- The first time it is called, `increment` replaces 0 with 1.
- The second time, it turns 1 into 10, first by replacing the 1, then by adding one to its left.
- The third time, it turns 10 into 11 by replacing the 0 with a 1. Notice that as soon as it replaces a 0 with a 1, it calls `rewind` again.
- The fourth time, it turns 11 into 100, first by replacing the two 1s with 0s, then adding a 1 to the left.
- The fifth time, it turns 100 into 101, by replacing the last 0 with a 1.
- The sixth time, it turns 101 into 110, by replacing the last 1 with a 0 and then turning the middle 0 into a 1.
- The seventh time, it turns 110 into 111, by replacing the last 0 with a 1.
- The eight time, it turns 111 into 1000, by replacing all the 1s with 0s and then adding a 1 at the end.

In even more succint terms:

- `increment` goes right to left, replacing 1s with 0s until it finds either a blank or a 0. Either the blank or the 0 are overwritten with a 1, and then `increment` calls `rewind`.
- When the sequence is all 1s, `increment` increases the amount of digits and sets all the previous ones to 0.
- When the sequence is partially composed of 0s and 1s, it sets all the 1s to the right of the last 0 to 0s, then turns the rightmost 0 into a 1, in effect doing a "reset" of the numeric sequence from the rightmost 0 onwards.

p100

- Petzold: "This is a machine that adheres to Turing's conventions and calculates the square root of 2 in binary. Actually, if the binary point is assumed to precede all the digits, the machine calculates (2 ^ 1/2) / 2."

- Petzold: "The algorithm implemented by the machine calculates one binary digit at a time. Suppose the machine has been running awhile and has already determined the first four digits. The first four digits of 2 ^ 1/2 in binary are 1.011, equivalent to 1.375 in decimal. What is the next digit?" Note: interesting that in when computing a binary number you only have two options for the digit. A very limited output, done more times to yield the same amount of information.

- Petzold: "The machine's strategy is always to assume that the next digit is 1. To test whether this is correct, multiply 1.0111 by itself:"

p101

1.0111 x 1.0111 = 10.00010001

Note: 10 is 2

- Petzold: "The product exceeds 2, so that assumption was incorrect. The fifth digit is instead 0, so the first five digits are 1.0110. Let's determine the sixth digit similarly. Assume that the sixth digit is 1 and mlutiply 1.01101 by itself."

```
1.01101 x 1.01101 = 1.1111101001
```

- Petzold: "The result is less than 2, so the assumption was good. We now have six digits: 1.01101, which in decimal is 1.40625. Obviously, the square-root-of-2 machine needs to multiply. In general, a multiplication of two multidigit numbers requires that each digit of one number be multiplied by each digit of the other number. If one number has *n* digits, and the other number *m* digits, the total number of digit-times-digit multiplications is (`n` x `m`). When doing multiplication by hand, we generally multiply a single digit of one number by the whole other number, yielding *n* or *m* partial products, which are then added together. The machine I'll show does the multiplication a little differently - by maintaining a running total during the multiplication. The result of each bit-by-bit multiplication is added to this running total. What makes this particular addition tricky is that each bit-by-bit product is generally *not* added to the least significant bit of the running total, but somewhere in the middle of it."

p101/102

- Petzold: "For example, consider the multiplication of 1.01101 by itself. Each of the six bits must be multiplied by itself and by the five other bits, so 36 bit-by-bit multiplications are required. The multiplications themselves are trivial: when multiplying 1 times 1, the result is 1; otherwise, the result is 0. Where this result is deposited in the running total depends on the placement of bits within the number. If the third bit from the right is multiplied by the fourth bit from the right, the result is added to the sixth place from the right in the running total. (This makes more sense when you number the bits beginning with zero: the third bit from the right is 2; the fourth bit from the right is bit 3; the sum is 5, and that's the bit position where the product goes.)" Note: If we use 1-based numbering, the multiplication of bits n & m goes in bit n+m-1 (i.e: 4 & 3 go in 4 + 3 - 1 = bit 6; bits 1 & 1 go on bit 1; bits 2 & 1 already go on bit 2).

- Petzold: "The machine I'll be showing adheres to Turing's conventions, which means that the only things it prints in the F-squares are the successive digits of the square root of 2 as they are being calculated. Everything else - including maintaining the running total of the multiplication - is done on E-squares."

- Petzold: "The machine begins in m-configuration *begin*. The machine uses an @ sign rather than a schwa for the sentinel. (...) The machine begins by printing the sentinel and the digit 1:

```
mconf     symbol   operations   final mconf

begin      none    P@, R, P1     new
```

- Petzold: "Thus, the only initial assumption the machine makes is that the square root of 2 is at least 1 but less than 2. The machine always comes back to the m-configuration *new* when it's ready to calculate a new digit. The configuration moves the head to the leftmost digit:"

```
new         @      R            mark-digits
           else    L            new
```

- Petzold: "The rest of the machine will be easier to understand if we look at what it does after it's already calculated a few digits. Here's the tape with the first three digits already computed, which is the binary equivalent of 1.25. The machine will print the fourth digit (which I'll refer to as the "unknown" digit) in the square marked with the question mark:"

```
@1 0 1 ?
```

- Petzold: "The question mark is for our benefit only; it does not actually appear on the tape (...)."

- Petzold: "In preparation for the multiplication, the machine marks the digits of the number. (Recall that Turing defined "marking" as printing a symbol to the right of a figure.) The machine uses multiple *x* markers in a manner similar to Turing's Example II (page 85) machine. The m-configuration *mark-digits* marks all the known digits with x, the unknown digit with a *z* (which I'll explain shortly) and prints one *r* in the least significant place of the running total:"

p103

```
mark-digits  0,1     R,Px,R       mark-digits
             none    R,Pz,R,R,Pr  find-x
```

- Petzold: "The tape is now: `@1x0x1x?z r`. That *r* is the least significant digit of the running total and should be interpreted as a 0. The next section prints two more *r*'s for every *x*, erasing the *x* markers in the process."

```
             x       E            first-r
find-x       @       N            find-digits
             else    L,L          find-x

first-r      r       R,R          last-r
             else    R,R          first-r

last-r       r       R,R          last-r
             none    Pr,R,R,Pr    find-x
```

Note: Petzold seems to use *N* for no operation.

- Petzold: "The tape now has a 7-digit running total symbolizing an initial value of 0000000:

```
@1 0 1 ?z r r r r r r r
```

- Petzold: "The bit order of the running total is reversed from that of the calculated number. The least significant bit of the running total is on the left. The seven initialized digits of the running total are sufficient if the assumption is correct than the unknown digit is a 1. If an eight digit is required, then the unknown digit is 0."

- Petzold: "The number the machine must multiply by itself consists of the number computed already (101 in this example) and a new digit assumed to be 1, so the number is actually 1011. To keep track of what digits are being multiplied by each other, the machine marks the digits with *x*, *y* and *z* characters. At any time during the multiplication, only one digit is marked with *x* and one digit with *y*, and the digit marked *x* is multiplied by the digit marked *y*. If the *x* and *y* markers happen to coincide, the character *z* is used, so any digit marked *z* is multiplied by itself."

- Petzold: "That's why the unknown digit (assumed to be 1) is initially marked with a *z*. The first multiplication involves that unknown digit times itself; however, it will help in the analysis of the following confiturations to keep in mind that during the multiplication, any digit could be marked with *x* and any digit with *y*, or just one digit with *z*."

p104

- Petzold: "We're now ready for the first bit-by-bit multiplication. THe machine multiplies either the two digits marked *x* and *y* by each other, or the single digit marked *z* by itself. The m-configuration *find-digits* first goes back to the sentinel and then goes to find-1st-digit to find the left-most digit marked *x*, *x*, or *z*.

```
find-digits  @       R,R          find-1st-digit
             else    L,L          find-digits

                x    L            found-1st-digit
find-1st-digit  y    L            found-1st-digit
                z    L            found-2nd-digit
               none  R,R          find-1st-digit
```

- Petzold: "If find-1st-digit detects an x, y or z, it positions the head over the digit. Depending on the letter, the machine goes to found-1st-digit or found-2nd-digit. If the first marked digit is 0, the second digit isn't required because the product will be 0 anyway. So we can add 0 to the running total by going to add-zero."

```
found-1st-digit  0   R            add-zero
                 1   R,R,R        find-2nd-digit
```

- Petzold: "If the first difit is a 1, the second digit must be found. The machine searches for the second digit marked x or y."


Full machine:

```
mconf        symbol  operations   final mconf

begin        none    P@,R,P1      new

new          @       R            mark-digits
             else    L            new

mark-digits  0,1     R,Px,R       mark-digits
             none    R,Pz,R,R,Pr  find-x

             x       E            first-r
find-x       @       N            find-digits
             else    L,L          find-x

first-r      r       R,R          last-r
             else    R,R          first-r

last-r       r       R,R          last-r
             none    Pr,R,R,Pr    find-x

find-digits  @       R,R          find-1st-digit
             else    L,L          find-digits

                x    L            found-1st-digit
find-1st-digit  y    L            found-1st-digit
                z    L            found-2nd-digit
               none  R,R          find-1st-digit

found-1st-digit  0   R            add-zero
                 1   R,R,R        find-2nd-digit

                 x   L            found-2nd-digit
find-2nd-digit   y   L            found-2nd-digit
               none  R,R          find-2nd-digit

                 0   R            add-zero
found-2nd-digit  1   R            add-one
                none R            add-one

                 r   Ps           add-finished
add-zero         u   Pv           add-finished
                else R,R          add-zero

                 r   Pv           add-finished
add-one          u   Ps,R,R       carry
                else R,R          add-one

                 r   Pu           add-finished
carry           none Pu           new-digit-is-zero
                 u   Pr,R,R       carry

add-finished     @   R,R          erase-old-x
                else L,L          add-finished

                 x   E,L,L        print-new-x
erase-old-x      z   Py,L,L       print-new-x
                else R,R          erase-old-x

                 @   R,R          erase-old-y
print-new-x      y   Pz           find-digits
                none Px           find-digits

erase-old-y      y   E,L,L        print-new-y
                else R,R          erase-old-y

print-new-y      @   R            new-digit-is-one
                else Py,R         reset-new-x

reset-new-x     none R,Px         flag-result-digits
                else R,R          reset-new-x

                   s Pt,R,R       unflag-result-digits
flag-result-digits v Pw,R,R       unflag-result-digits
                else R,R          flag-result-digits

                     s Pr,R,R     unflag-result-digits
unflag-result-digits v Pu,R,R     unflag-result-digits
                  else N          find-digits

new-digit-is-zero @   R           print-zero-digit
                 else L           new-digit-is-zero

                  0   R,E,R       print-zero-digit
print-zero-digit  1   R,E,R       print-zero-digit
                 none P0,R,R,R    cleanup

new-digit-is-one  @   R           print-one-digit
                 else L           new-digit-is-one

                  0   R,E,R       print-one-digit
print-one-digit   1   R,E,R       print-one-digit
                 none P1,R,R,R    cleanup

cleanup          none N           new
                 else E,R,R       cleanup
```

```
      -> @1   -> @1           -> @1x z r      -> @1  z r   -> @1  z r        -> @1  z r r r      -> @1  z r r r
begin     new     mark-digits          find-x      first-r            last-r              find-x    find-digits

@1  z r r r      -> @1  z r r r        -> @1  z r r r -> @1  z s r r        -> @1  z s r r -> @1  y s r r
  find-1st-digit       found-2nd-digit        add-one          add-finished      erase-old-x    print-new-x

@1x y s r r   -> @1x y s r r      -> @1x y s r r      -> @1x y s r r        -> @1x y s r r        -> @1x y s r r
  find-digits      find-1st-digit     found-1st-digit        find-2nd-digit       found-2nd-digit        add-one

@1x y s v r          -> @1x y s v r  -> @1  y s v r -> @1  y s v r   -> @1    s v r   -> @1y   s v r    -> @1y x s v r
        add-finished      erase-old-x   print-new-x      erase-old-y      print-new-y       reset-new-x        flag-result-digits
```

```
begin                -> @1
                         _
new                  -> @1
                              _
mark-digits          -> @1x z r
                          _
find-x               -> @1  z r
                                _
first-r              -> @1  z r
                                  _
last-r               -> @1  z r r r
                        _
find-x               -> @1  z r r r
                          _
find-digits          -> @1  z r r r
                           _
find-1st-digit       -> @1  z r r r
                            _
found-2nd-digit      -> @1  z r r r
                              _
add-one              -> @1  z s r r
                          _
add-finished         -> @1  z s r r
                          _
erase-old-x          -> @1  y s r r
                          _
print-new-x          -> @1x y s r r
                          _
find-digits          -> @1x y s r r
                         _
find-1st-digit       -> @1x y s r r
                            _
found-1st-digit      -> @1x y s r r
                           _
find-2nd-digit       -> @1x y s r r
                            _
found-2nd-digit      -> @1x y s r r
                                _
add-one              -> @1x y s v r
                          _
add-finished         -> @1x y s v r
                        _
erase-old-x          -> @1  y s v r
                          _
print-new-x          -> @1  y s v r
                          _
erase-old-y          -> @1    s v r
                           _
print-new-y          -> @1y   s v r
                            _
reset-new-x          -> @1y x s v r
                                _
flag-result-digits   -> @1y x t v r
                                  _
unflag-result-digits -> @1y x t u r
                          _
find-digits          -> @1y x t u r
                         _
find-1st-digit       -> @1y x t u r
```

p107

Petzold: "The multiplication completes in one of two ways, both of which you've already seen. If the machine attempts a carry from the running total into a blank square, then the result is known to exceed 2, the unknown digit is known to be 0, and the configuration becomes new-digit-is-zero. Otherwise, if the next destination for the y marker is the sentinel, then the entire multiplication has completed without the running total exceeding 2, and new-digit-is-one takes over."

Cycle of configurations per new digit to be added:

new -> mark-digits -> find-x/last-r -> BIT BY BIT MULTIPLICATIONS -> new-digit-is-zero OR new-digit-is-one -> print-zero-digit/print-one-digit -> cleanup -> new

The cycle above comprises all of the machine, except for the initial `begin` configuration which prints `@1`. It can be summarized as:
- Mark existing digits with x.
- Mark the square where the next digit will go with a z.
- Mark a number of squares to the right with r. The number is 1 plus twice the amount of existing digits. So when calculating the second digit, it's three rs. When calculating the third, it's five rs.
- Perform all bit by bit multiplications.
- Print either a zero or one.
- Clean up all the E-squares except for the sentinel.

Here's a list of the mconfigs that write the tape, and how the tape looks afterwards (E-squares are compacted and the sentinel is ommitted; then to the right you see the F-squares with the current number).

```
begin                          1
mark-digits          xzr       1
find-x                zr       1
last-r                zrrr     1
add-one               zvrr     1
erase-old-x           yvrr     1
print-new-x          xyvrr     1
add-one              xyvvr     1
erase-old-x           yvvr     1
erase-old-y            vvr     1
print-new-y          y vvr     1
reset-new-x          yxvvr     1
flag-result-digits   yxwvr     1
unflag-result-digits yxwur     1
add-one              yxwsr     1
carry                yxwsu     1
erase-old-x          y wsu     1
print-new-x          z wsu     1
add-one              z wss     1
carry                z wssu    1
print-zero-digit       wssu    10
cleanup                        10

mark-digits          xxzr      10
find-x               x zr      10
last-r               x zrrr    10
find-x                 zrrr    10
last-r                 zrrrrr  10
add-one                zvrrrr  10
erase-old-x            yvrrrr  10
print-new-x           xyvrrrr  10
add-zero              xyvsrrr  10
erase-old-x            yvsrrr  10
print-new-x          x yvsrrr  10
add-one              x yvsvrr  10
erase-old-x            yvsvrr  10
erase-old-y             vsvrr  10
print-new-y           y vsvrr  10
reset-new-x           yxvsvrr  10
flag-result-digits    yxwsvrr  10
unflag-result-digits  yxwrurr  10
add-zero              yxwsurr  10
erase-old-x           y wsurr  10
print-new-x           z wsurr  10
add-zero              z wsvrr  10
erase-old-x           y wsvrr  10
print-new-x          xy wsvrr  10
add-zero             xy wsvsr  10
erase-old-x           y wsvsr  10
erase-old-y             wsvsr  10
print-new-y          y  wsvsr  10
reset-new-x          y xwsvsr  10
flag-result-digits   y xwtvsr  10
unflag-result-digits y xwturr  10
add-one              y xwtsrr  10
carry                y xwtsur  10
erase-old-x          y  wtsur  10
print-new-x          yx wtsur  10
add-zero             yx wtsvr  10
erase-old-x          y  wtsvr  10
print-new-x          z  wtsvr  10
add-one              z  wtsvv  10
erase-old-x          y  wtsvv  10
erase-old-y             wtsvv  10
print-one-digit         wtsvv  101
cleanup                        101
```

The entire bit-by-bit multiplication concludes only in two ways:
- The multiplication doesn't exceed 0, then `new-digit-is-one` will be called. This comes from `print-new-y` when it finds the sentinel.
- The multiplication exceeds 1, then `new-digit-is-zero` will be called. This comes from `carry` when it finds an empty square.

- If we're calculating the nth digit, there's n * n bit by bit multiplications. For example, if we're calculating the second digit, we're multiplying 11 by itself, so there's four bit by bit multiplications, all of them 1 * 1. If we're calculating the third digit, we multiply 101 by itself, so there's nine bit by bit multiplications.

The hard part of the machine is in understanding the bit by bit multiplications. Let's understand the symbols used by it first:
- x, y and z are multiplication markers, indicating which digit is being multiplied. x represents the first digit, y the second. If they are present, z is absent. If z is present, both x and y are absent. z represents a digit multiplying itself.
- r, s, t symbolize 0.
- u, v, w symbolize 1.
- Reminder: all of these symbols only go on E-squares. F-squares are untouched during bit-by-bit multiplication.
- There's ten mconfs that write changes to the tape during bit-by-bit multiplication. Let's see what they find and what do they overwrite it with. Let's also see what mconf they call next on each of the cases.

```
erase-old-x          x:_ z:y     print-new-x
erase-old-y          y:_         print-new-y
print-new-x          _:x y:z     find-digits
print-new-y          _:y         reset-new-x
reset-new-x          _:x         flag-result-digits
add-zero             r:s u:v     add-finished
add-one              r:v u:s     add-finished         carry
flag-result-digits   s:t v:w     unflag-result-digits
unflag-result-digits s:r v:u     unflag-result-digits
carry                r:u _:u u:r add-finished         new-digit-is-zero carry
```

Within the above group there's two types of mconfs: five that concern themselves with marking/unmarking the digits with x, y and z (`erase-old...`, `print-new...`, `reset-new-x`); and five which mark/unmark the digits with r, s, t, u, v, w (`add...`, `flag/unflag-result-digits` and `carry`).

Each bit-by-bit multiplication consists of:
- Finding the digits (`find...`, `found...`), which always starts with `find-digits`.
- Call `add-zero` or `add-one`.
- `add-one` calls `carry` if it finds u. Otherwise, like `add-zero`, it instead calls `add-finished`.
- `carry` also calls `add-finished`, except for the case where it overflows the existing space and calling instead `new-digit-is-zero`, finishing all the bit by bit multiplications.
- `add-finished` goes back to the sentinel and calls `erase-old-x`.
- Who calls `find-digits` to restart the process? Two configurations: `unflag-result-digits` (this config always ends up calling `find-digits`) and `print-new-x` (almost always, except for when it finds the sentinel).
- The `flag/unflag` configurations are perhaps the trickiest to understand. Only `reset-new-x` calls `flag-new-digits`, and only `flag-new-digits` calls `unflag-new-digits`. These configs are not always called in each bit-by-bit multiplication.

- `x` actually fulfills two purposes. One is as a placeholder of sorts to make the machine print enough `r`s. After this initial stage, `x`s are used to mark the first digit of the multiplication.

- We can note by looking at the outputs above that the E-squares are divided in two areas: the left area with `xyz`, and the right area with `rstuvw`. The left area of the E-squares has n characters when calculating the nth digit (2 with the second, 3 with the third, etc.), while the right area has 1 plus twice the amount of existing digits (3 with the second, 5 with the third, etc.).

- Let's see how digits (the left area) are marked before `add-zero` or `add-one` (`_` represents a blank):
   - Second digit (4 bit by bit multiplications): `_z`, `xy`, `yx`, `z_`.
   - Third digit (9 bit by bit multiplications): `__z`, `_xy`, `x_y`, `_yx`, `_z_`, `xy_`, `y_x`, `yx_`, `z__`.

- We can see then that we start always with the less significant (rightmost) digits. Except for the very first one, y always marks the "permanent" spot and the x moves around it (we should actually see z as a y with an x on top of it). The y moves left and the x moves also left, but around it, both starting at the righmost position. This is quite straightforward.

- It's important to notice that `xyz` and `rstuvw` don't mix, but they are side by side. The former occupy n spaces (when calculating the nth digit) and the latter occupy 2n - 1 spaces (when calculating the nth digit).

- Let's see now how this `rstuvw` business works, which is probably the hardest part to understand within the hardest part of this machine (the bit by bit multiplications). Let's start by seeing the actual bit by bit multiplications done on the first two digit calculations:
   - Second digit (4 bit by bit multiplications): 1, 1, 1, 1
   - Third digit (9 bit by bit multiplications):  1, 0, 1, 0, 0, 0, 1, 0, 1

- We've seen that all of `rst` represent 0 and all of `uvw` represent 1. We need to distinguish the symbols within these two groups. We'll call `ru` of degree 1, `sv` of degree 2, and `tw` of degree 3.

- Second digit I, second digit II: `add-one` + `r` (d1) = `v` (d2).
- XXX remaining ones

Two modifications of the `rstuvw`: not just `add-zero` and `add-one`, but `flag/unflag-result-digits`.

Unless overflow with `new-digit-is-one` (therefore ending the bit by bit multiplications for the calculated digit), `print-new-y` calls `reset-new-x`. And `reset-new-x` is the only configuration that can call `flag-result-digits` (and indirectly, `unflag-result-digits`.
