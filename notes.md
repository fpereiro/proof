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

Sequence of calls (skipping when a mconf calls itself), and split

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

The third time the loop is run: mark1 goes left and marks the two 1s printed on the last iteration with `x`.
