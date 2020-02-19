# Notes

## Petzold 2008 on Turing 1936

p64

- Computable numbers: subset of real numbers whose decimals can be determined/calculated by finite means. Note: determined == calculated. Calculation as determination.

- Finite means refers to a process that could be infinite, but where each step is well defined and carried out in order. Perfect analogy with Cantor's enumerable infinite (natural numbers).

- "Although the subject (...) [is] the computable *numbers*, it is almost equally easy to define and investigate computable functions of an integral variable or a real computable variable, computable predicates, and so forth." What's the difference between a number and a function? A function takes a number and produces another one, while seeing a number as a function would be like a function that returned its own argument? That would work. But the point is that a number like pi has to be computed by a function that holds some state, then the function would be the one you call to generate the *next* digit, given the ones you already generated. This function probably only needs the position, and not the entire sequence; that, in the case of pi. What if you defined a number where the next digit was a function of all the previous digits, and where you could not skip any of them in the computation? Then the number would be akin to a chaotic process which is incompressible (all the previous information is necessary and equally relevant to represent it exactly).

- "The fundamental problems involved are, however, the same in each case, and I have chosen the computable numbers for explicit treatment as involving the least cumbrous technique."

- "This will include a development of the theory of functions of a real variable expressed in terms of computable numbers." This needs to be done.

p65

- "According to my definition, a number is computable if its decimal can be written down by a machine." Computability as an explicit process of transformation that can be mechanized. By mechanizing it and taking the human away from it, we feel the process can carry itself out, given energy, like a physical process.

- PE: "automated computing". We now simply say "computing", and when a human does it, "manual computing".

p66

- "(...) computable numbers include all numbers which could naturally be regarded as computable." Computable numbers are the "naturally regarded" computable numbers, makes me think of Feigenbaum's (from Gleick) "what in a reasonable man's mind" standard of proof. PE: in the list are rationals, algebraic numbers, and some trascendentals: pi, e; and only real parts of things because Turing placed the discussion on real terms (excluding complex variables). But not necessary all trascendentals. Note: trascendentals seem to straddle the computable and uncomputable, like some problems are straddling positions 1 (ch1) and 2 (ch2) in the Chomsky Hierarchy.

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

- PE: "The *m* stands for *machine*." Configurations as states of mind.

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

- "For some purposes we might use machines (choice machines or c-machines) whose motion is only partially determined by the configuration (hence the use of the word "possible" in Section 1)." A program waiting for input from the user is a c-machine. Perhaps we could also call machines that don't require user input but make decisions based on a source of noise an i-machine (*i* stands for indeterminate), as long as the source of noise cannot be determined (otherwise it would be a c-machine).

- "When such a machine reaches one of these ambiguous configurations, it cannot go on until some arbitrary choice has been made by an external operator. This would be the case if we were using machines to deal with axiomatic systems." Why do axioms require human and presumably non-algorithmic input? In any case, it's amazing that Turing is writing of "machines to deal with axiomatic systems."

- "In this paper I deal only with automatic machines, and will therefore often omit the prefix a-."

- "If an a-machine prints two kinds of symbols, of which the first kind (called figures) consists entirely of 0 and 1 (the others being called symbols of the second kind), then the machine will be called a computing machine." OK! An a-machine that prints *binary* numbers (figures, which are the end result) and also prints other symbols only for computation/scratchpad reasons, is a *computing machine*.

p73

- If machine starts with blank tape (and presumably some m-configs) and it is started on the "correct" m-config, then "the subsequence of the symbols printed by it which are of the first kind will be called the *sequence computed by the machine*." Note: *sequence computed by the machine* is the output.

- "The real number whose expression as a binary decimal is obtained by prefacing this sequence by a decimal point is called the *number computed by the machine*." Note: so, the output must be prefixed by a point to be a number expressed as a binary decimal. Although I believe you could still program these machines to start by putting a 0 and then a dot, although then the dot would be a symbol of the second kind in that it is not a zero or one, so that makes things more cumbersome. So while it's likely possible, it is inconvenient, so better to go with this convention.

p74

- PE's restating: "The number computed by the machine is the binary fraction obtained by prefacing this sequence with a binary point." Note from Petzold: all numbers generated by a TM will be between 0 and 1, but "this short range should be fine for any insights into enumerability that might be needed." Note: recurring idea, whatever is between 0 and 1 represents all reals anyway. Whatever happens on one side of the dot, can happen on the other side, and considering both at the same time doesn't seem to alter the fundamental problem, at least intuitively. Feels true, though I wonder if it's been proven. The universe in a speck, the infinity in a single unit.

p75

- "At any stage of the motion of the machine, the number of the scanned square, the complete sequence of all the symbols on the tape, and the m-configuration will be said to describe the *complete configuration* at that stage." Note: triplet of position, contents of the tape and the current m-configuration. Though the list of m-configs should also be counted as an input, unless we put the m-configs as being the machine itself.

- "The changes of the machine and tape between successive complete configurations will be called the *moves* of the machine." Note; in "complete" configuration, is there a hint of a multi-step process that is "completed" before the next process takes place?

p76

- "If a computing machine never writes down more than a finite number of symbols of the first kind, it will be called *circular*. Otherwise it is said to be *circle-free*."

- "A machine will be circular if it reaches a configuration from which there is no possible move, or if it goes on moving, and possibly printing symbols of the second kind, but cannot print any more symbols of the first kind. The significance of the term "circular" will be explained in Section 8." PE's note: "Turing wants his machines to keep printing digits *forever*. The circle-free machines are the good machines. If a machine really wants to compute the binary equivalent of 1/4, it should print 0 and 1 and then continue printing 0s forever." Note: this is confusing at the beginning, because you'd expect a program to finish and give you the right result (assumption/axiom: program === computer). Definitely you don't want a program to compute 1/4 and keep on going forever. But by making correct programs keep on going forever, you only have two categories: programs that do what they are expected, and the ones that halt and do not. Otherwise you'd have three categories: programs that halt because they are done, programs that don't halt because they are doing the right thing (computing a periodic or trascendental number) and because of that cannot stop; and faulted programs. By making right programs keep on printing, even if it is an endless list of 0s, you simply divide it in two. Makes it so much easier. Also, though, it could be said that a program that keeps on printing 0s stops producing any useful information and is converting energy into 0s, but not energy into information.

- "*Computable sequences and numbers*: A sequence is said to be computable if it can be computed by a circle-free machine. A machine is computable if it differes by an integer from the number computed by a circle-free machine." Number as sequence, the dot is irrelevant.

p77

- "We shall avoid confusion by speaking more often of computable sequences than of computable numbers."

p79

- "A machine can be constructed to compute the sequence 010101..."

p79-80

- "The machine is to have the for m-configurations b, c, k, e and is capable of printing "0" and "1". THe behavior of the machine is described in the following table in which "R" means "the machine moves so that it scans the square immediately on the right of the one it was scanning previously." Similarly for "L". "E" means "the scanned symbol is erased" and "P" stands for "prints"".

p80

- "This table (and all succeeding tables of the same kind) is to be understood to mean that for a configuration described in the first two columsn the operations in the third column are carried out successively, and the machine then goes over into the m-configuration described in the last column."

- PE: "The table has four columns, separated into two pairs: 1) configuration: a) m-config; b) symbol; 2) behaviour: a) operations; b) final m-config." Note: configuration is input, behaviour is output; 1a) and 2b) pertain to the m-config; 1b) and 2a) pertain to the tape (both the symbols and the position). A Turing machine operates on itself. But so far it doesn't write its own m-configurations, otherwise it would be self-modifiable on that level too.

- "When the second column is left blank, it is understood that the behaviour of the third and fourth columns applies for any symbol and no symbol." So, "any" symbol is anything except blank, and if the column itself is blank it means both any symbol and no symbol.

- "The machine starts in the m-configuration b with a blank tape."

p81

- PE: "Turing's machines always start in m-configuration b (for *begin* (...)). Here's the long awaited machine:"

```
configuration         behaviour
mconf   symbol   operations   final mconf
b        none       P0, R         c
c        none           R         k
k        none       P1, R         f
f        none           R         b
```

- PE: "Although the tape is theoretically infinite in both directions, the machines that turing describes in this paper require only that the tape extend infinitely towards the right because that's where the digits of the computable sequences are printed:" If that's the case, then why not start only with the requirement of a tape that has infinite squares but starts at 0?

p82

Some observations on this machine:

- It never goes to the left. It just keeps on moving to the right.
- It leaves a blank square between the numbers printed: 0 1 0 1, instead of 0101
- Two configs (c and f) are the same in their operations, but they differ in which mconf they set afterwards. And you need those two different target mconfs, because one prints 0 and the other one prints 1.
- This machine always assumes that there's no symbol on each scanned square. It doesn't account for a different case. But it is also true that the machine could never find a square that is not blank, if it's always moving right on a blank tape, and if it always move right after writing on a square. This is highly suggestive of which kinds of comparable analysis can be done to more complex machines in terms of how many provisions are required of them for them to not reach a state that's not determined by its set of mconfs.

p83

PE's machine for printing 1/4 (0 1 0 0 0...)

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
- PE: "It should be very, very obvious that similar computing machines can be defined to compute *any rational number*. The rational numbers are not the issue here." Either my math is very limited, or the word "obvious" is very easily blandished about.

p84

- "If, contrary to the description in Section 1, we allow the letters *L, R* to appear more than once in the operations column we can simplify the table considerably."

```
mconf   symbol   operations   final mconf

         none     P0            b
b        0        R, R, P1      b
         1        R, R, P0      b
```

- PE: "Turing will also soon allow a configuration to have multiple P operations."

Then a mconf can have multiple shifting (moving the tape) and printing operations. However (and it'll be interesting to see if this changes) it can only take input (read a square) at the beginning, and then it can only set the next mconf once. No concept of function calls from within the operations.

- PE: "The important lesson is that any particular sequence can be computed by a variety of different machines. However, a particular automatic machine starting with a blank tape always computes the same sequence."

p85

- PE: "Using multiple L, R and P operations in a single configuration can simplify machines considerably, but keep in mind that these simplified tables can always be converted back into the more rigid style that allows only one L, R, or P operation per state.

- "As a slightly more difficult example we can construct a machine to compute the sequence 001011011101111011111..." Note: this means a 0, and then the following: a 0, followed by a 1. Then a 0, followed by two 1s. Then a 0, followed by three 1s.

- PE: "What he wants to tackle now is an irrational number, and one that very likely is also trascendental." Talk about likelihood in math like this makes a case for heuristics, or at least shows they are used in certain places, if not in proofs.

- PE: "When this new machine is printing a run of 1s, it must somehow "remember" how many 1s it printed in the previous run, and then print one more. By scanning back and forth, the machine always has access to the previous run so it can use that information to build the next run. It will be interesting to study Turing's strategy for accomplishing this feat."

- "The machine is to be capable of five m-configurations, viz. "o", "q", "p", "f", "b", and of printing "e", "x", "0", "1". The first three symbols on the tape will be "ee0"; the other figures follow on alternate squares.

- PE: "(...) he's proposing that the tape end up like this: "ee0 0 1 0 1 1 0 0 1 1 1 0 ..."".

- PE: "The ə character is known (...) as a *schwa*." Turing uses the *schwa* for what programmes call a *sentinel*. It's a special character that, in this case, indicates the boundary of the number. The machine can move its head to the very beginning of the tape by moving left whenever the scanned square is *not* the schwa."

p86

- PE: "(Why are two schwas? Only one is required in this example, but Turing later creates a machine that requires to schwas for a sentinel. Perhaps he added a second schwa in this example just for consistency.)"

- PE: "In the first example machine, the blank squares between the 0 and 1 digits served no purpose. Here they will play an important role."

- "On the intermediate squares we never print anything but "x". These letters serve to "keep the place" for us and are erased when we have finished with them."

- PE: "Turing is dividing the squares of his tape into two categories. The machine prints the 0s and 1s on every other square. With the exception of the sentinel, no other symbols appear on these squares. Turing uses the intermediate squares as a temporary scratchpad of sorts. We can refer to "numeric squares" that contain 0s and 1s and "non-numeric squares" that can contain other symbols. (Turing later calls these F-squares and E-squares for *figures* and *erasable*." Note: the first schwa would be in a numberic square! Wouldn't this violate the strict rule of how a machine's output should look as per the definitions?

- "We also arrange that in the sequence of figures on alternate squares there shall be no blanks."

- PE: "Every new figure (...) is printed on the next available blank numeric square. No numeric squares are skipped. These restrictions are a collection of rules (...) that Emil Post later called a "Turing convention machine", which is a little more restrictive than the generalized "Turing Machine." A Turing convention machine never erases a numeric square, or writes over an existing figure on a numeric square with a different figure. These implicit rules become important later on."

p87

```
configuration                        behaviour
mconf   symbol              operations              final mconf

b        none    Pə, R, Pə, R, P0, R, R, P0, L, L        o

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
- `o` only is called on F-squares that are not blank (thus, only containing 0 and 1). Its purpose is to mark the 1s with x (on the E-square immediately to their right). It marks the 1s from right to left (sees the 1, puts the x to its side, then goes two squares left from the marked 1). While it sees 1s, it calls itself. When it finds a 0, it calls `q` instead.
- `q` goes right over F-squares. While there's 0s or 1s, it keeps on going right by calling itself. When it finds a blank, it prints a 1 and goes to the E-square to its left, calling `p`.
- `p` goes left over E-squares, calling itself and going left while it finds empty squares. When it finds a schwa, it goes to the next F-square and calls `f`. If, instead, it finds an `x`, it deletes it, goes to the next F-square and calls `q`.
- `f` goes forward over F-squares, since this configuration is only called by `p` after seeing a schwa and moving one to the right. If it sees a 0 or 1, then it keeps on going to the right and calls itself. When it finds a blank F-square, it prints a 0, goes two back (to the previous F-square) and calls `o`. It is confusing that Turing said "any" instead of 0, 1 for this configuration, since this configuration doesn't see any other symbols since it's always on F-squares.

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
- The last mconf in the repeating pattern, `f`, prints the 0 after a sequence of 1s, at the very end of the sequence. It goes forward until it finds the first blank F-square, prints 0 and calls `o` again.
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

- PE: "Turing is about to show a method for notation the workings of the machine using these complete configurations - essentially snapshots of the tape together with the current m-configuration and scanned square."

- "To illustrate the working of this machine a table is given below of the first few complete configurations. These complete configurations are describe by writing down the sequence of symbols which are on the tape, with the m-configuration written below the scanned symbol. The successive complete configurations are separated by colons."

p91

```
 :ee0 0:ee0 0:ee0 0:ee0 0  :ee0 0 1:
b   o     q       q       q      p
```

p92

- PE: "While less visually satisfying than the physical tape, Turing's notation provides more information, in particular by indicating the next m-configuration at the current position of the head. Those successive complete configurations show a complete history of the machine's operations."

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

- PE: "Turing has flagged this format with the letter C (for "configuration"). He will refer to it in Section 6."

p93

- "This form is less easy to follow, but we shall make use of it later for theoretical purposes."

- PE: "Actually, in a still more modified form, it will become *essential*. Turing is already gearing up for a major presentation. He will unveil a Universal Computing Machine - today commonly termed the Universal Turing Machine or UTM - that is a functional (if not exactly commercial) equivalent of a modern computer."

- PE: "Try to notice what's *good* about this final format. The entire history of the operation of a machine has been arranged into a single stream of characters (...). Also notice that Turing has slipped the next m-configuration *in front of* the next scanned character. These two items in combination were defined by Turing as a *configuration*, and this pair of items occurs in the complete configuration in the same order as they occur in the first two columns of a machine table. You can take that m-configuration and symbol pair and scan through the *m-config* and *symbol* columns of a machine table looking for a match. (...) Turing will actually automate this searhcing process when construction his Universal Machine."

- "The convention of writing the figures only on alternate squares is very useful. I shall always make use of it. I shall call the one sequence of alternate squares F-squares and the other sequence E-squares. The symbols on E-squares will be liable to erasure. The symbols on F-squares form a continuous sequence. There are no blanks until the end is reached."

p94

- "There is no need to have more than one E-square between each pair of F-squares: an apparent need of more E-squares can be satisfied byhaving a sufficiently rich variety of symbols capable of being printed on E-squares." Unlimited bits by a larger vocabulary. And having it all in one square makes it simple to parse because it's already bounded.

- "If a symbol Beta is on an F-square S and a symbol Alpha is on the E-square next on the right of S, then S and Beta will be said to be *marked* with Alpha. The process of printing this Alpha will be called marking Beta (or S) with Alpha." Markings then go to the right of what they are marking. Number, then marking.

- PE: "However, markers are not strictly needed. It is possible to define machines that use only two symbols, or which differentiate solely between a blank square and a marked square. Such an approach was explored by mathematician Emil Post in an interesting paper that independently described a configuration similar to Turing's. (...) Post doesn't actually show his worker performing real applications. Working with squares or boxes that can be only marked or unmarked is obviously much more laborious than Turing's shortcut." I wonder if it is truly possible to write programs in them, and if so if it is possible to define a general way of converting Turing machines into Post machines that will do the same thing.

p99

- PE: "Let's confront our fears head on by building machines that transcend the trivial. Let's convince ourselves that Turing Machines can indeed addd and multiply (and hence, also substract, divide, calculate powers and perhaps even write poetry). The first example is a small Turing Machine that calculates all the positive integers in sequence. This machine does *not* comply with Turing's conventions because it writes each new number over the previous one. It doesn't skip any squares when printing the results, and it replaces each result with the next highest number."

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

- PE: "This is a machine that adheres to Turing's conventions and calculates the square root of 2 in binary. Actually, if the binary point is assumed to precede all the digits, the machine calculates (2 ^ 1/2) / 2."

- PE: "The algorithm implemented by the machine calculates one binary digit at a time. Suppose the machine has been running awhile and has already determined the first four digits. The first four digits of 2 ^ 1/2 in binary are 1.011, equivalent to 1.375 in decimal. What is the next digit?" Note: interesting that in when computing a binary number you only have two options for the digit. A very limited output, done more times to yield the same amount of information.

- PE: "The machine's strategy is always to assume that the next digit is 1. To test whether this is correct, multiply 1.0111 by itself:"

p101

1.0111 x 1.0111 = 10.00010001

Note: 10 is 2

- PE: "The product exceeds 2, so that assumption was incorrect. The fifth digit is instead 0, so the first five digits are 1.0110. Let's determine the sixth digit similarly. Assume that the sixth digit is 1 and mlutiply 1.01101 by itself."

```
1.01101 x 1.01101 = 1.1111101001
```

- PE: "The result is less than 2, so the assumption was good. We now have six digits: 1.01101, which in decimal is 1.40625. Obviously, the square-root-of-2 machine needs to multiply. In general, a multiplication of two multidigit numbers requires that each digit of one number be multiplied by each digit of the other number. If one number has *n* digits, and the other number *m* digits, the total number of digit-times-digit multiplications is (`n` x `m`). When doing multiplication by hand, we generally multiply a single digit of one number by the whole other number, yielding *n* or *m* partial products, which are then added together. The machine I'll show does the multiplication a little differently - by maintaining a running total during the multiplication. The result of each bit-by-bit multiplication is added to this running total. What makes this particular addition tricky is that each bit-by-bit product is generally *not* added to the least significant bit of the running total, but somewhere in the middle of it."

p101/102

- PE: "For example, consider the multiplication of 1.01101 by itself. Each of the six bits must be multiplied by itself and by the five other bits, so 36 bit-by-bit multiplications are required. The multiplications themselves are trivial: when multiplying 1 times 1, the result is 1; otherwise, the result is 0. Where this result is deposited in the running total depends on the placement of bits within the number. If the third bit from the right is multiplied by the fourth bit from the right, the result is added to the sixth place from the right in the running total. (This makes more sense when you number the bits beginning with zero: the third bit from the right is 2; the fourth bit from the right is bit 3; the sum is 5, and that's the bit position where the product goes.)" Note: If we use 1-based numbering, the multiplication of bits n & m goes in bit n+m-1 (i.e: 4 & 3 go in 4 + 3 - 1 = bit 6; bits 1 & 1 go on bit 1; bits 2 & 1 already go on bit 2).

- PE: "The machine I'll be showing adheres to Turing's conventions, which means that the only things it prints in the F-squares are the successive digits of the square root of 2 as they are being calculated. Everything else - including maintaining the running total of the multiplication - is done on E-squares."

- PE: "The machine begins in m-configuration *begin*. The machine uses an @ sign rather than a schwa for the sentinel. (...) The machine begins by printing the sentinel and the digit 1:

```
mconf     symbol   operations   final mconf

begin      none    P@, R, P1     new
```

- PE: "Thus, the only initial assumption the machine makes is that the square root of 2 is at least 1 but less than 2. The machine always comes back to the m-configuration *new* when it's ready to calculate a new digit. The configuration moves the head to the leftmost digit:"

```
new         @      R            mark-digits
           else    L            new
```

- PE: "The rest of the machine will be easier to understand if we look at what it does after it's already calculated a few digits. Here's the tape with the first three digits already computed, which is the binary equivalent of 1.25. The machine will print the fourth digit (which I'll refer to as the "unknown" digit) in the square marked with the question mark:"

```
@1 0 1 ?
```

- PE: "The question mark is for our benefit only; it does not actually appear on the tape (...)."

- PE: "In preparation for the multiplication, the machine marks the digits of the number. (Recall that Turing defined "marking" as printing a symbol to the right of a figure.) The machine uses multiple *x* markers in a manner similar to Turing's Example II (page 85) machine. The m-configuration *mark-digits* marks all the known digits with x, the unknown digit with a *z* (which I'll explain shortly) and prints one *r* in the least significant place of the running total:"

p103

```
mark-digits  0,1     R,Px,R       mark-digits
             none    R,Pz,R,R,Pr  find-x
```

- PE: "The tape is now: `@1x0x1x?z r`. That *r* is the least significant digit of the running total and should be interpreted as a 0. The next section prints two more *r*'s for every *x*, erasing the *x* markers in the process."

```
             x       E            first-r
find-x       @       N            find-digits
             else    L,L          find-x

first-r      r       R,R          last-r
             else    R,R          first-r

last-r       r       R,R          last-r
             none    Pr,R,R,Pr    find-x
```

Note: PE seems to use *N* for no operation.

- PE: "The tape now has a 7-digit running total symbolizing an initial value of 0000000:

```
@1 0 1 ?z r r r r r r r
```

- PE: "The bit order of the running total is reversed from that of the calculated number. The least significant bit of the running total is on the left. The seven initialized digits of the running total are sufficient if the assumption is correct than the unknown digit is a 1. If an eight digit is required, then the unknown digit is 0."

- PE: "The number the machine must multiply by itself consists of the number computed already (101 in this example) and a new digit assumed to be 1, so the number is actually 1011. To keep track of what digits are being multiplied by each other, the machine marks the digits with *x*, *y* and *z* characters. At any time during the multiplication, only one digit is marked with *x* and one digit with *y*, and the digit marked *x* is multiplied by the digit marked *y*. If the *x* and *y* markers happen to coincide, the character *z* is used, so any digit marked *z* is multiplied by itself."

- PE: "That's why the unknown digit (assumed to be 1) is initially marked with a *z*. The first multiplication involves that unknown digit times itself; however, it will help in the analysis of the following confiturations to keep in mind that during the multiplication, any digit could be marked with *x* and any digit with *y*, or just one digit with *z*."

p104

- PE: "We're now ready for the first bit-by-bit multiplication. THe machine multiplies either the two digits marked *x* and *y* by each other, or the single digit marked *z* by itself. The m-configuration *find-digits* first goes back to the sentinel and then goes to find-1st-digit to find the left-most digit marked *x*, *x*, or *z*.

```
find-digits  @       R,R          find-1st-digit
             else    L,L          find-digits

                x    L            found-1st-digit
find-1st-digit  y    L            found-1st-digit
                z    L            found-2nd-digit
               none  R,R          find-1st-digit
```

- PE: "If find-1st-digit detects an x, y or z, it positions the head over the digit. Depending on the letter, the machine goes to found-1st-digit or found-2nd-digit. If the first marked digit is 0, the second digit isn't required because the product will be 0 anyway. So we can add 0 to the running total by going to add-zero."

```
found-1st-digit  0   R            add-zero
                 1   R,R,R        find-2nd-digit
```

- PE: "If the first difit is a 1, the second digit must be found. The machine searches for the second digit marked x or y."


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

PE: "The multiplication completes in one of two ways, both of which you've already seen. If the machine attempts a carry from the running total into a blank square, then the result is known to exceed 2, the unknown digit is known to be 0, and the configuration becomes new-digit-is-zero. Otherwise, if the next destination for the y marker is the sentinel, then the entire multiplication has completed without the running total exceeding 2, and new-digit-is-one takes over."

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

- We can note by looking at the outputs above that the E-squares are divided in two areas: the left area with `xyz`, and the right area with `rstuvw`. The left area of the E-squares has n characters when calculating the nth digit (2 with the second, 3 with the third, etc.), while the right area has twice n minus 1 (when calculating the nth digit): 3 with the second, 5 with the third, etc.

- Let's see how digits (the left area) are marked before `add-zero` or `add-one` (`_` represents a blank):
   - Second digit (4 bit by bit multiplications): `_z`, `xy`, `yx`, `z_`.
   - Third digit (9 bit by bit multiplications): `__z`, `_xy`, `x_y`, `_yx`, `_z_`, `xy_`, `y_x`, `yx_`, `z__`.

- We can see then that we start always with the less significant (rightmost) digits. Except for the very first one, y always marks the "permanent" spot and the x moves around it (we should actually see z as a y with an x on top of it). The y moves left and the x moves also left, but around it, both starting at the righmost position. This is quite straightforward.

- It's important to notice that `xyz` and `rstuvw` don't mix, but they are side by side. The former occupy n spaces (when calculating the nth digit) and the latter occupy 2n - 1 spaces (when calculating the nth digit).

- Let's see now how this `rstuvw` business works, which is probably the hardest part to understand within the hardest part of this machine (the bit by bit multiplications). Let's start by seeing the actual bit by bit multiplications done on the first two digit calculations:
   - Second digit (4 bit by bit multiplications): 1, 1, 1, 1
   - Third digit (9 bit by bit multiplications):  1, 0, 1, 0, 0, 0, 1, 0, 1

- We've seen that all of `rst` represent 0 and all of `uvw` represent 1. We need to distinguish the symbols within these two groups. We'll call `ru` of degree 1, `sv` of degree 2, and `tw` of degree 3.

- While calculating the second digit, these are the changes to the rightmost (`rstuvw`) section (we also mark which digits change and the degrees of the digits between parenthesis):
   - `rrr` -> `vrr`  (211,  1st, `add-one`).
   - `vrr` -> `vvr`  (221,  2nd, `add-one`).
   - `vvr` -> `wvr`  (321,  1st, `flag-result-digits`).
   - `wvr` -> `wur`  (311,  2nd, `unflag-result-digits`).
   - `wur` -> `wsr`  (321,  2nd, `add-one`).
   - `wsr` -> `wsu`  (321,  3rd, `carry`).
   - `wsu` -> `wss`  (322,  3rd, `add-one`).
   - `wss` -> `wssu` (3221, 4th, `carry`).
- And while calculating the third digit:
   - `rrrrr` -> `vrrrr` (21111, 1st, `add-one`).
   - `vrrrr` -> `vsrrr` (22111, 2nd, `add-zero`).
   - `vsrrr` -> `vsvrr` (22211, 3rd, `add-one`).
   - `vsvrr` -> `wsvrr` (32211, 1st, `flag-result-digits`).
   - `wsvrr` -> `wrurr` (31111, 2nd & 3rd, `unflag-result-digits`).
   - `wrurr` -> `wsurr` (32111, 2nd, `add-zero`).
   - `wsurr` -> `wsvrr` (32211, 3rd, `add-zero`).
   - `wsvrr` -> `wsvsr` (32221, 4th, `add-zero`).
   - `wsvsr` -> `wtvsr` (33221, 2nd, `flag-result-digits`).
   - `wtvsr` -> `wturr` (33111, 3rd & 4th, `unflag-result-digits`).
   - `wturr` -> `wtsrr` (33211, 3rd, `add-one`).
   - `wtsrr` -> `wtsur` (33211, 4th, `carry`).
   - `wtsur` -> `wtsvr` (33221, 4th, `add-zero`).
   - `wtsvr` -> `wtsvv` (33222, 5th, `add-one`).

- Once degree 3 is there, nothing unmarks it. It's a way of ignoring that area altogether.
- All configurations change one of these characters at a time, except for `unflag-result-digits` which seems to do it always in twos.
- `flag-result-digits` converts the leftmost degree 2 into a degree 3.
- `unflag-result-digits` converts all degree 2 into degree 1.
- `carry`, `add-zero` and `add-one` all operate on the leftmost character with degree 1. `carry` doesn't affect degree. `add-zero` and `add-one` increase the degree from 1 to 2.
- `carry` can create a new character but not necessarily, only if it's fired and there's already an `u`.

- When calculating the second digit, there's only two positions for `y`, three `rstuvw` positions and four bit by bit multiplications. The first two are stored on the `rstuvw` digits 1st and 2nd; the last two on the digits 2nd and third.
- When calculating the second digit, there's three positions for `y`, five `rstuvw` positions and and nine bit by bit multiplications. The first three are stored on the `rstuvw` digits 1st, 2nd and 3rd; multiplications 4-6 are stored on the digits 2nd, 3rd and 4th; the last three multiplications are stored on digits 3rd, 4th and 5th.

- Let's see how we would do these multiplications ourselves in paper. For the second digit, it is 11x11, and for the third one, 101x101.

```
  11
 x11
====
  11
 110
====
1001

  101
 x101
=====
  101
 0000
10100
=====
11001
```

- Notice how the first multiplication requires three spaces for expressing the digits of the partial products (`11 and `110`), and how the second one requires five spaces (`101`, `0000` and `10100`). Notice also how the first multiplication exceeds those three digits in the result, which means that there is an overflow and therefore the digit must be 0.

- The running total that PE speaks of is a way of compressing those partial products (`11`, `110` and `101`, `0000` and `10100`) into a single (yet changing) set of characters! Degree 3 (`tw`) represents the 0s to the right and degree 2 (`sv`) represents digits already accounted for in the current multiplication line. The leftmost character of degree one (`ru`) represents the next place where to add the digit! If we were to see the multiplications above but with the degrees instead on the partial product lines, we'd see this (at the end):

```
  11
 x11
====
  22
 223
====
1001

  101
 x101
=====
  222
 2223
22233
=====
11001
```

Inverting the partial products, we'd have: `22` and `322` for the first multiplication; and `222`, `3222` and `33222` for the second one.

- If we replace the degree numbers by the actual characters (taking into account whether they are 0s or 1s), we'd get:

```
  11
 x11
====
  vv  (11)
 svt (110)
====
1001

  101
 x101
=====
  vsv   (101)
 ssst  (0000)
vsvtt (10100)
=====
11001
```

- We might as well add the `r`s! They go on the empty spaces.

```
  11
 x11
====
 rvv  (11)
 svt (110)
====
1001

  101
 x101
=====
rrvsv   (101)
rssst  (0000)
vsvtt (10100)
=====
11001
```

- These finished partial products map to the moments when the machine is about to call `flag-result-digits`. For the first line of each multiplication, we can see that they indeed map to what we have on the tape (after inverting it): `rvv` maps to `vvr` and `rrvsv` maps to `vsvrr`.

- Regarding the second partial product for each multilpication, for the first multiplication we don't reach `flag-result-digits` but we have `wssu` after the `carry`; and for the second one we have `wsvrr` before flagging the digits. Inverting this yields `ussw` and `rrvsw`. We need, on our hand multiplications above, to sum the lines (preserving the highest degree): `rvv` + `svt` = `vssw` (compare `vssw` with `ussw`); and `rrvsv` + `rssst` = `rsvsw` (compare `rsvsw` which `rsvsw`, they are the same!).

- Why the discrepancy in the first case? Because `carry` is called and there's an overflow, the `u` is not marked as a second degree character yet, so it's not turned into a `v`. Notice however how the second partial product of the second multiplication matches exactly the state of the tape before flagging the digits for the second time.

- Let's see the third and final partial product. The tape contains `wtsvv`, which inverted is `vvstw`. In our multiplications, we need to sum `rrvsv` + `rssst` + `vsvtt`, which yields `vvstw`! We can see how both strings match exactly.

- By using three degrees of characters, PE distinguishes the next character where to place the digit (degree 1, `ru`), characters already used on the partial multiplication (degree 2, `sv`) and characters that represent "rightmost zeroes" on a given partial multiplication (degree 3, `uw`). In this way, the running total is maintained.

I believe I now understand this machine; but I'm not sure if my explanation has been good enough. If you don't fully understand it and you'd like to, please open an issue or send me a message.

p109

- PE: "On a real computer, you'd at least have the convenience of addition and multiplication. If you were faced with the job of implementing several different types of functions on a Turing Machine, you might consider assembling a collection of common machine tables that you could then use as building blocks in implementing more complex tables. This is precisely what Turing does next, although his real goal is a Universal Machine that can simulate any other machine."

p111

- PE: "It might be advantageous to determine beforehand that certain similar m-configurations will be required in a machine, and to predefine special m-configurations just for those chores. Doing so might help clarify certain strategies used in programming a Turing Machine, and to make the final job easier."

p111/112

- PE: "Let's call the m-configuration that moves the head back to the sentinel `goto-sentinel`. Then, when we're writing the states for a particular machine, and we want the head to be positioned over the figure to the right of the sentinel, we just specify `goto-sentinel` and we don't have to figure out how to do it all over again. Not only would it make the machine description a bit smaller, but (in theory) it would help anyone who had to look at the machine understand it. We might define `goto-sentinel` on its own like so:"

```
goto-sentinel   @       R    ?????
                else    L    goto-sentinel
```

- PE: "and immediately we see a problem indicatedby that insistent squad of question marks. AFter the machine finds the sentinel, it must go into some other m-configuration, but that isn't known until we actually need to use `goto-sentinel` in a machine. We need some way to specify the final m-configuration in a general way so that `goto-sentinel` remains flexible."
z

- PE:" The solution is to define `goto-sentinel` much like a mathematical function, where the final destination is an argument to the function:

```
goto-sentinel (A)       @   R   A
                     else   L   goto-sentinel (A)
```

- PE: "The `new`, `new-digit-is-zero` and `new-digit-is-one` m-configurations can now be eliminated. At the beginning of the square-root machine, instead of having `begin` go to `new`, and `new` go to `mark-digits`, we can specify:"

```
begin     none P@,R,P1    goto-sentinel (mark-digits)
```

- Instead of defining `carry` to go to `new-digit-is-zero` (...) it can instead refer to `goto-sentinel` to go back to the sentinel and then switch to `print-zero-digit`:

```
               r      Pu       add-finished
carry       none      Pu       goto-sentinel (print-zero-digit)
               u      Pr,R,R   carry
```

- PE: "We can profitably define a generalized `print-digit` function. The argument for this function is the character to print:

```
                     0    R,E,R      print-digit (a)
print-digit (a)      1    R,E,R      print-digit (a)
                  none    Pa,R,R,R   cleanup
```

p113

- PE: "Notice the `Pa` operation in the last line indicating that the character to be printed is the argument to `print-digit`. Now the m-configuration `carry` becomes:

```
               r      Pu       add-finished
carry       none      Pu       goto-sentinel (print-digit (0))
               u      Pr,R,R   carry
```

- PE: "The m-configuration `print-new-y` (...) now becomes:

```
print-new-y      @        R      goto-sentinel (print-digit (1))
                 else     Py,R   reset-new-x
```

- Notice that PE uses `A` as a configuration placeholder, and `a` as a scanned symbol placeholder.

- In the same vein, we can eliminate `find-digits` with `goto-sentinel` by changing `find-x`, `print-new-x` and `unflag-result-digits. Likewise with `add-finished`, by removing it from `add-zero`, `add-one` and `carry`. For this, we need a different version of goto-sentinel that goes *twice* to the right (instead of just once) after finding `@`. We will call it `goto-sentinel2`.

- When is it correct to do this replacement? If a configuration only has two branches: 1) `@` to call a single mconf and 2) otherwise go two left and call itself. `find-x` is not like this because it has three branches, so it cannot be replaced in the same manner.

- How does the new version of the machine look like?

```
mconf        symbol  operations   final mconf

goto-sentinel (A) @    R          A
                  else L          goto-sentinel (A)

goto-sentinel2 (A) @   R          A
                  else L          goto-sentinel (A)

begin        none    P@,R,P1      goto-sentinel (mark-digits)

mark-digits  0,1     R,Px,R       mark-digits
             none    R,Pz,R,R,Pr  find-x

             x       E            first-r
find-x       @       N            goto-sentinel2 (find-1st-digit)
             else    L,L          find-x

first-r      r       R,R          last-r
             else    R,R          first-r

last-r       r       R,R          last-r
             none    Pr,R,R,Pr    find-x

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

                 r   Ps           goto-sentinel2 (erase-old-x)
add-zero         u   Pv           goto-sentinel2 (erase-old-x)
                else R,R          add-zero

                 r   Pv           goto-sentinel2 (erase-old-x)
add-one          u   Ps,R,R       carry
                else R,R          add-one

                 0    R,E,R       print-digit (a)
print-digit (a)  1    R,E,R       print-digit (a)
                 none Pa,R,R,R    cleanup

                 r   Pu           goto-sentinel2 (erase-old-x)
carry           none Pu           goto-sentinel (print-digit (0))
                 u   Pr,R,R       carry

                 x   E,L,L        print-new-x
erase-old-x      z   Py,L,L       print-new-x
                else R,R          erase-old-x

                 @   R,R          erase-old-y
print-new-x      y   Pz           goto-sentinel (find-1st-digit)
                none Px           goto-sentinel (find-1st-digit)

erase-old-y      y   E,L,L        print-new-y
                else R,R          erase-old-y

print-new-y      @   R            goto-sentinel (print-digit (1))
                else Py,R         reset-new-x

reset-new-x     none R,Px         flag-result-digits
                else R,R          reset-new-x

                   s Pt,R,R       unflag-result-digits
flag-result-digits v Pw,R,R       unflag-result-digits
                else R,R          flag-result-digits

                     s Pr,R,R     unflag-result-digits
unflag-result-digits v Pu,R,R     unflag-result-digits
                  else N          goto-sentinel (find-1st-digit)

cleanup          none N           new
                 else E,R,R       cleanup
```

- We have gone from 27 to 23 configurations.

- PE: "Today's programmers will recognize this concept immediately. Although different programming languages provide this facility in the form of *procedures* or *functions* or *methods*, the most general term is *subroutine*. For decades, subroutines have been the most universal structural element of computer programs."

- PE: "These configurations exist primarily to clarify the structure of Turing Machines and to make them easier to write. There's no concept of "calling" one of these configurations or of "returning from a configuration." But if it's not that, is it merely a replacement?

- PE: "Turing calls these configurations with arguments "skeleton tables" before settling on the better term "m-function". A machine table that makes use of skeleton tables he calls an "abbreviated table".

p113/114

- TU: "4. Abbreviated tables: There are certain types of process used by nearly all machines, and these, in some machines, are used in many connections. These processes include copying down sequences of symbols, comparing sequences, erasing all symbols of a given form, etc. Where such processes are concerned we can abbreviate the tables for the m-configurations considerably by the use of "skeleton tables". In skeleton tables there appear capital German letters and small Greek letters. These are of the nature of "variables". By replacing each capital German letter through by an m-configuration and each small Greek letter by a symbol, we obtain the table for an m-configuration. The skeleton tables are to be regarded as nothing but abbreviations: they are not essential. So long as the reader understands how to obtain the complete tables from the skeleton tables, there is no need to give any exact definitions in this connection. These are of the nature of "variables". By replacing each capital German letter throught by an m-configuration and each small Greek letter by a symbol, we obtain the table for an m-configuration."

- Some observations: two types of variables, those representing m-configurations and those representing scanned symbols. Division between code and data. It implies a system with two types.

- PE: "For Turing, however, the skeleton tables exist solely to make his larger machines easier to construct (from his perspective) and easier to read and understand (from our perspective).

- TU: "The skeleton tables are to be regarded as nothing but abbreviations: they are not essential. So long as the reader understands how to obtain the complete tables from the skeleton tables, there is no need to give any exact definitions in this connection."

- How to convert from skeleton tables to the expanded tables? I believe this is the core question of this section. We need to understand how things can be replaced. Is a mere textual replacement enough, or do we have to keep track of nested calls? How can we prove that the skeleton tables can be always converted to expanded tables?

p114/115

- PE: "The skeleton tables are not essential, he says, and that's true. (...) Turing is setting the stage for his universal machine, which makes *extensive* use of the skeleton tables presented in this section. Without these tables, the Universal Machine would be much longer and more complex than it is. For that reason, knowing a little about Turing's ultimate intentions can help make these tables just a bit more comprehensible. As he will discuss in Section 7, the Universal Machine interprets a tape that contains a computing machine encoded as a series of letters. At the far left is a schwa sentinel. The tape alternates between F-squares and E-squares. The E-squares are, as usual, erasable. In the Universal Machine, the F-squares contain mostly letters than digits. Even so, the machine always prints the F-squares sequentially from left to right, and without erasing a previous symbol. For that reason, two blank squares in a row indicate that no F-squares exist to the right of that point."


```
f (𝕮, 𝕭, α)   ə         L   f1 (𝕮, 𝕭, α)
              not ə     L   f  (𝕮, 𝕭, α)

              α         N   𝕮
f1 (𝕮, 𝕭, α)  not α     R   f1 (𝕮, 𝕭, α)
              none      R   f2 (𝕮, 𝕭, α)

              α         N   𝕮
f2 (𝕮, 𝕭, α)  not α     R   f1 (𝕮, 𝕭, α)
              none      R   𝕭
```

- `f` cares only about whether it sees a `ə` (the schwa marking the beginning of the tape) or not. If it does, it goes left and calls `f1` with the same arguments it received. Otherwise, it also goes left but instead calls itself with the same arguments it received. Note: interestingly enough, if it sees a `ə`, it goes one to the left of it, to the "out of range" section of the tape.

- `f1` has three cases. If it sees `α` (alpha), it doesn't do anything and calls `𝕮`, the first m-conf it received as its argument. If it scans a symbol that is neither `α` nor a blank, it goes right and calls itself with the same arguments. If it scans a blank, it also goes right but instead calls `f2` with the same arguments it received. Note: if `f1` doesn't receive `ə` as `α`, then, after being gone to the left of the schwa, `f1` will bring the scanned index back to the working area of the tape.

- `f2` also has three cases, the conditions being the same as those from `f1`. If it sees `α`, it doesn't do anything and calls `𝕮` (exactly as `f1` did). If it scans a symbol that is neither `α` nor a blank, it goes right and calls `f1` with the same arguments it received (unlike `f1`, which instead called itself in this case). If it scans a blank, it goes right and calls `𝕭`.

- Observation: the branch/condition to be picked by a Turing Machine is determined by the scanned symbol.

- Observation: nested tables happen when received capital argument (m-configuration) is passed as argument to final function (instead of being used directly; this should not happen with characters, since they are replaced in situ).

- PE: "So, `f` stands for `find`. If it finds an `α`, it goes to m-configuration `𝕮`, the first argument to `f`, and the head will be sitting on the first (leftmost) `α`. If it can't find an `α`, then it goes to m-configuration `𝕭`."

p116

- PE: "In a table for a complete machine, this skeleton table would be referred to by an entry in the final m-config column that looks something like this:"

```
m-config    symbol   operations   final m-config
                                    f (mQ, mR, x)
```

- PE: "The m-configurations `mQ` and `mR` would be defined elsewhere in the machine, and `x` would be a symbol used by the machine.

- TU: "If we were to replace `𝕮` throughout by `mQ` (say), `𝕭` by `mR`, and `α` by `x`, we should have a complete table for the m-configuration `f (mQ, mR, x)`.

- PE: "in the context of the complete machine, this skeleton table effectively expands into this table:"

```
m-config    symbol   operations   final m-config

f            ə          L          f1
             not ə      L          f

             x          R          mQ
f1           not x      R          f1
             none       R          f2


             x          R          mQ
f2           not x      R          f1
             none       R          mR
```

- PE: "Because the f function may be used several times in the same machine, the expanded versions of the m-configurations f, f1 and f2 would all need different names each time they're used.

p116/117

- TU: "f is called an "m-configuration function" or "m-function" The only expressions which are admissible for substitution in an m-function are the m-configurations and symbols of the machine. These have to be enumerated more or less explicitly: they may include expressions such as p (𝕰, x); indeed they must if there are an m-functions used at all."

- PE: "If an m-function named p has been defined, and if a machine refers to m-function in its final m-config column, then p must be considered to be an m-configuration of the machine. Turing is a little nervous here because arguments to m-functions can be other m-functions. In other words, m-functions can be *nested*. (...) The problem results from implicitly allowing infinite recursion - that is, a function referring to itself, or referring to a second function which in turn refers to the first. If infinite recursion is allowed, then a machine could end up with an infinite number of m-configurations, and that's in violation of Turing's original definition of a computing machine."

- Solution to prevent infinite recursion: create a graphic of dependencies from one m-configuration to another. The graph should be a direct acyclic graph. The two conditions to avoid are: 1) a depending on b and b depending on a; 2) a depending on b, b depending on c, c depending on a. If these two conditions are avoided, then repeated substitution can take place and the machine can be expanded to its full length without going into an infinite recurse.

- TU: "If we did not insist on this explicit enumeration, but simply stated that the machine had certain m-configurations (enumerated) and all m-configurations obtainable by substitution of m-configurations in certain m-functions, we should usually get an infinity of m-configurations; e.g., we might say that the machine was to have the m-configuration q and all m-configurations obtainable by substituting an m-configuration for `𝕮` in `p (𝕮)`. Then it would have q, p (q), p (p (q)), p (p (p (q))), ... as m-configurations.

- TU: "Our interpretation rule then is this. We are given the names of the m-configurations of the machine, mostly expressed in terms of m-functions. We are also given skeleton tables. All we want is the complete table for the m-configurations of the machine. This is obtained by repeated substitution in the skeleton tables."

p118

- TU: "Further examples (in the explanations, the symbol `->` is used to signify "the machine goes into the m-configuration...").

- PE: "The columns of these tables are rather smushed together, and there are no column headings. Some tables contain only m-configurations and final m-configurations. Others contain columns for scanned characters and operations that must be differentiated based on their contents. Turing's next example shows an m-function that appears as an argument to another m-function."

```
e  (𝕮, 𝕭, α)        f (e1 (𝕮, 𝕭, α), 𝕭, α)
e1 (𝕮, 𝕭, α)   E    𝕮

From e (𝕮, 𝕭, α) the first α is erased and -> 𝕮. If there's no α -> 𝕭.
```

- PE: "The `e` stands for "erase". This function starts by using f to search for the first (leftmost) occurrence of `α`, which will leave the head positioned over the character. Notice how the first argument of f is the function e1. What that means is that when f finds the character `α`, it will then go to `e1`, which simply erases the character and goes to m-configuration `𝕮`. If f doesn't find the character `α`, then it goes to `𝕭`. [e1] could be defined more simply as `e1 (𝕮)`."

- PE: "Turing defines a second version of the e function with two arguments rather than three:

```
e (𝕭, α)      e (e (𝕭, α), 𝕭, α)

From e (𝕭, α) all letters α are erased and -> 𝕭
```

p119

- PE: "The definition of two different functions with the same name but distinguished by a different number of arguments is a rather advanced programming technique (called function overloading) that is not allowed in many older programming languages. This two-argument version of e makes use of the three argument vesrion to rease the first α, but notice that it specifies the two-argument e as the first argument to the three-argument version! When the three-argument e has successfully located and reased the first α, it then goes to the two argument version, which proceeds to use the three-argument version again to erase the next α. This continues until all the α characters have been erased. (...) Nevertheless, the use of the two-argument e as an argument to the three-argument e to implement the two-argument e seems to invoke the dreaded specter of infinite nesting of m-configurations."

- TU: "The last example seems somewhat more difficult to interpret than most. Let us suppose that in the list of m-configurations of some machine, there appears e (𝕭, x) (= q, say)."

- TU: "The m-function e can only play a role in a machine only if it appears somewhere in the machine's final m-config column (...). We can now say that e (b, x) is another m-configuration of the machine and - as long as we haven't used q to represent any other m-configuration in the machine - we can also refer to this m-configuration as q. By using e (b, x) in the final m-config column of the machine, we've essentially added another state to the machine, which Turing gives in two different forms:"

```
          e (b, x)       e (e (b, x), b, x)
or        q              e (q, b, x)
```

- PE: "This table implies that the m-configuration e (q, b, x) is also another m-configuration of the machine, as well as e1 (q, b, x), as shown by the following expansion:

p120

```
q                  e (q, b, x)
e (q, b, x)        f (e1 (q, b, x), b, x)
e1 (q, b, x)  E    q
```

- PE: "Notice that after erasing the character, e1 goes back to q, which is already a m-configuration of the machine, so there's no infinite generation of m-configurations.

- TU: "In this we could replace e1 (q, b, x) by q' and then give the table for f (with the right substitutions) and eventually reach a table in which no m-functions appeared.

- PE: "Just as Turing used q to represent the configuration e (b, x), he can use q' to represent the configuration e1 (q, b, x), and additional configurations to represent e1 and f."

- PE: "to construct his Universal Machine, Turing requires several common types of functions useful in manipulating individual characters and strings of characters. You've already seen find and erase functions. He essentially needs cut, copy, and paste as well, and some standard printing routines. The pe function stands for "print at the end". It prints the symbol represented by β in the first blank F-square."

```
pe (𝕮, β)                   f (pe1 (𝕮, β), 𝕮, ə)

pe1 (𝕮, β)    Any  R,R      pe1 (𝕮, β)
              None Pβ       𝕮
```

p120/121

- PE: "Some implicit assumptions hide inside this function. The f function normally finds the leftmost occurrence of its third argument, but here that argument is a schwa, which is the same symbol f looks for to get to the far left of the sequence. The pe function is therefore assuming there are *two* schwas in a row, just as in Turing's second machine example on page 85. The m-function f first finds the rightmost of the two schwas (the one on an E-square) and then moves the head left to be positioned on the left schwa, which is on a F-square. The pe1 function then moves right along F-squares until it finds a blank. It prints a β, which for most computing machines will be either a 0 or 1. (...) Turing first defines functions named l (for left) and r (for right) and then uses them in conjunction with f to create two more functions f' and f'' that move the head left or right after finding the desired character."

```
l (𝕮)             L     𝕮                    From f' (𝕮, 𝕭, α) it does the same as for f (𝕮, 𝕭, α)
r (𝕮)             R     𝕮                    but moves to the left before -> 𝕮
f'  (𝕮, 𝕭, α)           f (l (𝕮), 𝕭, α)
f'' (𝕮, 𝕭, α)           f (r (𝕮), 𝕭, α)
```

- PE: "I would have called them fl and fr rather than f' and f'', but that's me. "

- PE: The Universal Machine will require moving characters from one location to another on the tape. The c function performs a "copy"".

```
c  (𝕮, 𝕭, α)             f' (c1 (𝕮), 𝕭, α)    c (𝕮, 𝕭, α). The machine writes
c1 (𝕮)             β     pe (𝕮, β)            at the end the first symbol α and -> 𝕮
```

- PE: "Notice the function uses f' to find the α character, so that the head ends up to the left of the marker, which is the figure that the marker marks. The c1 function has an unusual syntax: the scanned character becomes the second argument to pe."

- TU: "The last line stands for the totality of lines obtainable from it by replacing β by any symbol which may occur on the tape of the machine concerned." Note: then, for every symbol that this configuration will employ, then that m-function needs to be expanded to comprise each of these variants (one for a, one for b, etc.).

p122

- PE: "The ce function stands for copy and erase. It exists in two-argument and three-argument versions."

```
ce (𝕮, 𝕭, α)               c (e (𝕮, 𝕭, α), 𝕭, α)       ce (𝕭, α). The machine copies down in order at the
ce (𝕭, α)                  ce (ce (𝕭, α), 𝕭, α)        end all symbols marked αand erases the letters α; -> 𝕭
```

- Note: in the two-argument version, the first argument (`ce (𝕭, α)`) is executed *after* the first (outer) invocation. This is why the function doesn't go into an infinite recourse. It will call itself only after calling the three-argument version. In normal programming, the nested functions are executed first, but here, as Petzold said earlier, we're passing references to functions.

- PE: "The three-argument ce first uses c to copy the leftmost figure marked with α and then uses e to erase that marker. The two-argument version of ce uses the three-argument version to copy the first figure and erase the marker, but then goes back to the two-character version. (...) all symbols marked with α are copied to the end of the tape in the first available F-squares. (Turing's second example on page 87 could have used this function to copy a run of 1s to the end of the tape.)"

- PE: "A more efficint scheme has ce erasing the marker when it's first located and before it copies the character (...) But turing is not interested in mundane issues of efficiency."

- PE: "The re function is "replace". The α and β arguments are assumed to be markers. The function finds the leftmost α and replaces it with β. (We know that α and β are markers because Turing doesn't allow replacing figures already marked on F-squares."

```
re  (𝕮, 𝕭, α, β)                  f (re1 (𝕮, 𝕭, α, β), 𝕭, α)    re (𝕮, 𝕭, α, β). The machine replaces
re1 (𝕮, 𝕭, α, β)     E, Pβ        𝕮                             the first α by β and -> 𝕮 -> 𝕭 if there's no α.
```

- PE: "The three argument version replaces all α markers with β."

```
re (𝕭, α, β)                        re (re (𝕭, α, β), 𝕭, α, β)    re (𝕭, α, β). The machine replaces all
                                                                  letters α by β. -> 𝕭
```

p123

- PE: "The ce function is "copy and replace".

```
cr (𝕮, 𝕭, α)         c (re (𝕮, 𝕭, α, α), 𝕭, α)          cr (𝕭, α) differs from ce (𝕭, α) only in that the letters α
cr (𝕭, α)            cr (cr (𝕭, α), re (𝕭, α, α), α)    are not erased. The m-configuration cr (𝕭, α) is taken up when
                                                        no letters α are on the tape.
```

- PE: "These functions are not used elsewhere in Turing's paper. The Universal Machine requires a facility to "search and replace", and Turing next presents half a page of functions that begin with the letters cp ("compare") and cpe ("compare and erase"). The final m-configurations in these functions are so long that Turing's explanations appear under each table instead of at the right."

```
cp  (𝕮, 𝕬, 𝕰, α, β)                f' (cp1 (𝕮, 𝕬, β), f (𝕬, 𝕰, β), α)
cp1 (𝕮, 𝕬, β)            γ         f' (cp2 (𝕮, 𝕬, γ), 𝕬, β)
cp2 (𝕮, 𝕬, γ)            γ         𝕮
                         not γ     𝕬

The first symbol marked α and the first marked β are compared. If there is neither α nor β, -> 𝕰. If there are both and the symbols are alike, -> 𝕮. Otherwise -> 𝕬.

cpe (𝕮, 𝕬, 𝕮, α, β)       cp (e (e (𝕮, 𝕮, β), 𝕮, α), 𝕬, 𝕰, α, β)

cpe (𝕮, 𝕬, 𝕮, α, β) differs from cp (𝕮, 𝕬, 𝕰, α, β) in that in the case when there is similarity the first α and β are erased.

cpe (𝕬, 𝕰, α, β)           cpe (cpe (𝕬, 𝕰, α, β), 𝕬, 𝕰, α, β)

cpe (𝕬, 𝕮, α, β). The sequence of symbols marked α is compared with the sequence marked β. -> 𝕮 if they are similar. Otherwise -> 𝕬. Some of the symbols α and β are erased.
```

- Note: Turing always lists the m-configuration arguments before the symbolic arguments.

p124

- PE: "Turing has now exhausted his supply of mnemonic function names, for he names the next one simply q, which unfortunately is the same letter he will shortly use to represent m-configurations in general. (...) I believe that Turing meant for this function to be named g rathern than g. Just as the f function finds the first (that is, leftmost) occurrence of a particular symbol, this function finds the last (rightmost) occurrence of a symbol (...) I'll refer to it as g."

- PE: "The single-argument version of g moves to the right until it finds two blanks in a row. That is assumed to be the rightmost end of the tape. The two-argument version of g first uses the one-argument g and then moves left looking for the character α."

```
g  (𝕮)      any          R       g  (𝕮)          g (𝕮, α). The machine finds the last symbol of form α -> 𝕮.
            none         R       g1 (𝕮)

g1 (𝕮)      any          R       g (𝕮)
            none                 𝕮

g  (𝕮, α)                        g (g1 (𝕮, α))

g1 (𝕮, α)   α                    𝕮
            not α        L       g1 (𝕮, α)
```

- PE: "Turing finishes this section with a few miscellaneous functions with familiar names. (...) The pe2 function prints two characters in the last two F-squares."

```
pe2 (𝕮, α, β)       pe (pe (𝕮, β), α)      pe2 (𝕮, α, β). The machine prints α β at the end.
```

- PE: "Similarly, the ce function copied characters marked with α to the end. The ce2 function copies symbols marked with α and β, while c3 copies characters marked α, β and γ."

p125

```
ce2 (𝕭, α, β)                  ce (ce (𝕭, β), α)        ce3 (𝕭, α, β, γ). The machine copies down at the end first
ce3 (𝕭, α, β, γ)               ce (ce2 (𝕭, β, γ), α)    the symbols marked α, then those marked β and finally those
                                                        marked γ; it erases the symbols α, β, γ.
```

- PE: "These copies are performed sequentially: First, all the symbols marked with α are copied, then the symbols marked with β ,and so on. Later on, Turing uses a function called ce5 with six arguments that he's never described, but the operation of it should be obvious. Finally, a single-argument e function erases all markers.

```
e  (𝕮)     ə             R           e1 (𝕮)      From e (𝕮) the marks are erased from all marked symbols. -> 𝕮.
           not ə         L           e  (𝕮)

e1 (𝕮)     any           R,E,R       e1 (𝕮)
           none                      𝕮
```

- PE: "Turing as now presented many of the algorithms that his Universal Computing machine will require, but he hasn't yet described how he will transform an arbitrary computing machine into crunchable data. That's next."

- List of all m-functions presented by Turing in this chapter:

```
f (𝕮, 𝕭, α)           ə        L        f1 (𝕮, 𝕭, α)
                      not ə    L        f  (𝕮, 𝕭, α)

                      α        N        𝕮
f1 (𝕮, 𝕭, α)          not α    R        f1 (𝕮, 𝕭, α)
                      none     R        f2 (𝕮, 𝕭, α)

                      α        N        𝕮
f2 (𝕮, 𝕭, α)          not α    R        f1 (𝕮, 𝕭, α)
                      none     R        𝕭

// From e (𝕮, 𝕭, α) the first α is erased and -> 𝕮. If there's no α -> 𝕭.
e  (𝕮, 𝕭, α)                            f (e1 (𝕮, 𝕭, α), 𝕭, α)
e1 (𝕮, 𝕭, α)                   E        𝕮

// From e (𝕭, α) all letters α are erased and -> 𝕭
e (𝕭, α)                                e (e (𝕭, α), 𝕭, α)

pe (𝕮, β)                               f (pe1 (𝕮, β), 𝕮, ə)

pe1 (𝕮, β)            any     R,R       pe1 (𝕮, β)
                      none    Pβ        𝕮

// From f' (𝕮, 𝕭, α) it does the same as for f (𝕮, 𝕭, α) but moves to the left before -> 𝕮
l (𝕮)                         L         𝕮
r (𝕮)                         R         𝕮
f'  (𝕮, 𝕭, α)                           f (l (𝕮), 𝕭, α)
f'' (𝕮, 𝕭, α)                           f (r (𝕮), 𝕭, α)

// c (𝕮, 𝕭, α). The machine writes at the end the first symbol α and -> 𝕮
c  (𝕮, 𝕭, α)                            f' (c1 (𝕮), 𝕭, α)
c1 (𝕮)                β                 pe (𝕮, β)

// ce (𝕭, α). The machine copies down in order at the end all symbols marked α and erases the letters α; -> 𝕭
ce (𝕮, 𝕭, α)                            c (e (𝕮, 𝕭, α), 𝕭, α)
ce (𝕭, α)                               ce (ce (𝕭, α), 𝕭, α)

//re (𝕮, 𝕭, α, β). The machine replaces the first α by β and -> 𝕮 -> 𝕭 if there's no α.
re  (𝕮, 𝕭, α, β)                        f (re1 (𝕮, 𝕭, α, β), 𝕭, α)
re1 (𝕮, 𝕭, α, β)              E, Pβ     𝕮

// re (𝕭, α, β). The machine replaces all letters α by β. -> 𝕭
re (𝕭, α, β)                            re (re (𝕭, α, β), 𝕭, α, β)

// cr (𝕭, α) differs from ce (𝕭, α) only in that the letters α are not erased. The m-configuration cr (𝕭, α) is taken up when no letters α are on the tape.
cr (𝕮, 𝕭, α)                            c (re (𝕮, 𝕭, α, α), 𝕭, α)
cr (𝕭, α)                               cr (cr (𝕭, α), re (𝕭, α, α), α)

// The first symbol marked α and the first marked β are compared. If there is neither α nor β, -> 𝕰. If there are both and the symbols are alike, -> 𝕮. Otherwise -> 𝕬.
cp  (𝕮, 𝕬, 𝕰, α, β)                     f' (cp1 (𝕮, 𝕬, β), f (𝕬, 𝕰, β), α)
cp1 (𝕮, 𝕬, β)         γ                 f' (cp2 (𝕮, 𝕬, γ), 𝕬, β)
cp2 (𝕮, 𝕬, γ)         γ                 𝕮
                      not γ             𝕬

// cpe (𝕮, 𝕬, 𝕮, α, β) differs from cp (𝕮, 𝕬, 𝕰, α, β) in that in the case when there is similarity the first α and β are erased.
cpe (𝕮, 𝕬, 𝕮, α, β)                    cp (e (e (𝕮, 𝕮, β), 𝕮, α), 𝕬, 𝕰, α, β)

// cpe (𝕬, 𝕮, α, β). The sequence of symbols marked α is compared with the sequence marked β. -> 𝕮 if they are similar. Otherwise -> 𝕬. Some of the symbols α and β are erased.
cpe (𝕬, 𝕰, α, β)                       cpe (cpe (𝕬, 𝕰, α, β), 𝕬, 𝕰, α, β)

// g (𝕮, α). The machine finds the last symbol of form α -> 𝕮.
g  (𝕮)                  any       R        g  (𝕮)
                        none      R        g1 (𝕮)

g1 (𝕮)                  any       R        g (𝕮)
                        none               𝕮

g  (𝕮, α)                                  g (g1 (𝕮, α))

g1 (𝕮, α)              α                   𝕮
                       not α      L        g1 (𝕮, α)

// pe2 (𝕮, α, β). The machine prints α β at the end.
pe2 (𝕮, α, β)                              pe (pe (𝕮, 𝕭), α)

// ce3 (𝕭, α, β, γ). The machine copies down at the end first the symbols marked α, then those marked β and finally those marked γ; it erases the symbols α, β, γ.
ce2 (𝕭, α, β)                              ce (ce (𝕭, β), α)
ce3 (𝕭, α, β, γ)                           ce (ce2 (𝕭, β, γ), α)

// From e (𝕮) the marks are erased from all marked symbols. -> 𝕮.
e  (𝕮)                  ə         R        e1 (𝕮)
                        not ə     L        e  (𝕮)

e1 (𝕮)                  any       R,E,R    e1 (𝕮)
                        none               𝕮
```

And now without comments:

```
f (𝕮, 𝕭, α)           ə        L        f1 (𝕮, 𝕭, α)
                      not ə    L        f  (𝕮, 𝕭, α)

                      α        N        𝕮
f1 (𝕮, 𝕭, α)          not α    R        f1 (𝕮, 𝕭, α)
                      none     R        f2 (𝕮, 𝕭, α)

                      α        N        𝕮
f2 (𝕮, 𝕭, α)          not α    R        f1 (𝕮, 𝕭, α)
                      none     R        𝕭

e  (𝕮, 𝕭, α)                            f (e1 (𝕮, 𝕭, α), 𝕭, α)
e1 (𝕮, 𝕭, α)                   E        𝕮

e (𝕭, α)                                e (e (𝕭, α), 𝕭, α)

pe (𝕮, β)                               f (pe1 (𝕮, β), 𝕮, ə)

pe1 (𝕮, β)            any      R,R      pe1 (𝕮, β)
                      none     Pβ       𝕮

l (𝕮)                          L        𝕮
r (𝕮)                          R        𝕮
f'  (𝕮, 𝕭, α)                           f (l (𝕮), 𝕭, α)
f'' (𝕮, 𝕭, α)                           f (r (𝕮), 𝕭, α)

c  (𝕮, 𝕭, α)                            f' (c1 (𝕮), 𝕭, α)
c1 (𝕮)                β                 pe (𝕮, β)

ce (𝕮, 𝕭, α)                            c (e (𝕮, 𝕭, α), 𝕭, α)
ce (𝕭, α)                               ce (ce (𝕭, α), 𝕭, α)
re  (𝕮, 𝕭, α, β)                        f (re1 (𝕮, 𝕭, α, β), 𝕭, α)
re1 (𝕮, 𝕭, α, β)               E, Pβ    𝕮
re (𝕭, α, β)                            re (re (𝕭, α, β), 𝕭, α, β)
cr (𝕮, 𝕭, α)                            c (re (𝕮, 𝕭, α, α), 𝕭, α)
cr (𝕭, α)                               cr (cr (𝕭, α), re (𝕭, α, α), α)

cp  (𝕮, 𝕬, 𝕰, α, β)                     f' (cp1 (𝕮, 𝕬, β), f (𝕬, 𝕰, β), α)
cp1 (𝕮, 𝕬, β)         γ                 f' (cp2 (𝕮, 𝕬, γ), 𝕬, β)
cp2 (𝕮, 𝕬, γ)         γ                 𝕮
                      not γ             𝕬

cpe (𝕮, 𝕬, 𝕮, α, β)                     cp (e (e (𝕮, 𝕮, β), 𝕮, α), 𝕬, 𝕰, α, β)
cpe (𝕬, 𝕰, α, β)                        cpe (cpe (𝕬, 𝕰, α, β), 𝕬, 𝕰, α, β)

g  (𝕮)                any      R        g  (𝕮)
                      none     R        g1 (𝕮)

g1 (𝕮)                any      R        g (𝕮)
                      none              𝕮

g  (𝕮, α)                               g (g1 (𝕮, α))

g1 (𝕮, α)             α                 𝕮
                      not α    L        g1 (𝕮, α)

pe2 (𝕮, α, β)                           pe (pe (𝕮, β), α)
ce2 (𝕭, α, β)                           ce (ce (𝕭, β), α)
ce3 (𝕭, α, β, γ)                        ce (ce2 (𝕭, β, γ), α)

e  (𝕮)                ə        R        e1 (𝕮)
                      not ə    L        e  (𝕮)

e1 (𝕮)                any      R,E,R    e1 (𝕮)
                      none              𝕮
```

- Note: it is interesting that the `N` (for no operation) is only written when we're looking at a m-configuration that has more than one branch. If the machine has no branches (as in the case of, for example, 3arg e), then the no operation is implicit.

Compact list of all the functions, counting their variants (by arguments received, both *m*-functions and *s*ymbols). 28 functions in total, 35 if we count as separate functions those that take a different number of arguments.

```
f    (2m+1s)
f1   (2m+1s)
f2   (2m+1s)
e    (2m+1s); (1m+1s)
e1   (2m+1s)
pe   (1m+1s)
pe1  (1m+1s)
l    (1m)
r    (1m)
f'   (2m+1s)
f''  (2m+1s)
c    (2m+1s)
c1   (1m)
ce   (2m+1s); (1m+1s)
re   (2m+1s); (2m+2s)
re1  (2m+2s)
cr   (2m+1s); (1m+1s)
cp   (3m+2s)
cp1  (2m+1s)
cp2  (2m+1s)
cpe  (3m+2s); (2m+2s)
g    (1m+1s); (1m)
g1   (1m+1s); (1m)
pe2  (1m+2s)
ce2  (1m+2s)
ce3  (1m+3s)
e    (1m)
e1   (1m)
```

- Notes: If a configuration calls itself, we ignore that for interdependency purposes. A n argument version of a function x will be referred to as "narg x".
- Important reminder: the first square of the tape (and all odd numbered squares, 3th, 5th, and so forth) are F-squares, that is, output. The markings are on the E-squares to the right of each of the F-squares. Most of the machines that Turing presents have two schwas, so the first F-square and E-square both contain schwas.
- Same list but grouping functions by families, describing them in detail and tracking interdependencies:

### f (find)

f    (2m+1s)
f1   (2m+1s)
f2   (2m+1s)
l    (1m)
f'   (2m+1s)
r    (1m)
f''  (2m+1s)
g    (1m+1s)
g    (1m)
g1   (1m+1s)
g1   (1m)

Interdependencies:
   - f1 and f2 are for internal use of f (that is, they're only called by f and no other function).
   - f is called by 3arg e, pe, f', f'', 3arg re and cp.
   - f' is called by c, cp and cp1.
   - l is for internal use of f' only.
   - f'' is not called by other functions in this section.
   - r is for internal use of f'' only.
   - 2arg g1 is for internal use of 2arg g only.
   - 1arg g1 is for internal use of 1arg g only.
   - 1arg g is called by 2arg g.
   - 2arg g is not called by other functions in this section.

f can be described to do the following, if we include f1 and f2 as part of it:
- Important assumption: f is always called when the head is either on the schwas or to their right. If it is to the left of the schwas, f will keep on going left indefinitely (assuming that no characters are written to the left of the schwas).
- Go left until the leftmost schwa is found.
- * Go right until 3arg (symbolic argument) OR a blank square is found.
- If 3arg is found, -> 1arg.
- If blank square is found:
   - Go one to the right.
   - If it contains 3arg, -> 1arg.
   - If square is blank (which means we saw two consecutive blanks), go one to the right and -> 2arg.
   - If the square is neither blank nor contains 3arg, go to *.

Summarizing further, f does the following:
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg, -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

Now, if there's two consecutive blanks, that means we're at the right end of the tape (this assumes that we never write squares more than two apart). So if we saw two consecutive blanks, and we go one further, if the first blank was an E-square, we'll be standing on an E-square afterwards; and if the first blank was an F-square, we'll be standing on an F-square afterwards.

f':
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg, move one to the left and -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

f'':
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg, move one to the right and -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

1arg g:
   - go right until finding two consecutive blanks.
   - when the second blank is found, -> 1arg.

2arg g:
   - go right until finding two consecutive blanks.
   - when the second blank is found, start going left until finding 2arg.
   - when 2arg is found, -> 1arg.

### e (erase)

e  (2m+1s)
e  (1m+1s)
e1 (2m+1s)
e  (1m)
e1 (1m)

Interdependencies:
   - 3arg e is called by 2arg e, 3arg ce and 5arg cpe.
   - 2arg e and 1arg e are not called by other functions in this section.
   - 3arg e1 is for internal use of 3arg e, and 1arg e1 is for internal use of 1arg e.

3arg e:
   - go to the leftmost schwa.
   - go right until finding either the 3arg or two consecutive blanks.
   - if it finds 3arg, delete it and -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

2arg e:
   - go to the leftmost schwa.
   - go right until finding either the 3arg or two consecutive blanks.
   - if it finds 3arg:
      - delete it.
      - go to the first step and repeat the whole process.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

While 3arg e deletes only the first 3arg it sees, 2arg e will delete all such symbols from the tape until two consecutive blanks are found.

1arg e:
   - go left until finding the rightmost schwa.
   - go two squares to the right (*).
   - if that square is blank, -> 1arg.
   - if it's not blank:
      - delete it.
      - go back to the step marked with a *.

Important assumption: 1arg e will erase E-squares if it is called to the right of the schwas or while being on the second schwa. If it is called when the head is on the first schwa, it will erase F-squares instead and then position itself on the first blank E-square!

- Note: while 3arg e1 doesn't use its second and third arguments, its three arguments distinguish it from the 1arg version, which is different. That's likely the reason for which Turing defined it as a 3arg function that only uses 1arg.

### pe (print at the end)

pe   (1m+1s)
pe1  (1m+1s)
pe2  (1m+2s)

Interdependencies:
   - pe is called by pe2 and c1.
   - pe1 is for internal use of pe only.

pe:
   - go to the leftmost schwa.
   - go right in twos until finding the first blank F-square.
   - print 2arg and -> 1arg.

pe2:
   - go to the leftmost schwa.
   - go right in twos until finding the first blank F-square.
   - print 2arg.
   - go to the leftmost schwa.
   - go right in twos until finding the first blank F-square.
   - print 3arg, then -> 1arg.

### c (copy)

c    (2m+1s)
c1   (1m)

Note: c1 uses the scanned symbol as the second argument to pe.

Interdependencies:
   - c is called by 3arg ce and 3arg cr.
   - c1 is for internal use of c only.

c:
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg:
      - move one to the left.
      - note the character X on that square.
      - go to the leftmost schwa.
      - go right in twos until finding the first blank F-square.
      - print the character X and -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

Note: since c will write what it finds to the *left* of its 3arg on an F-square, it is almost certain that 3arg will be a symbol that can be found on E-squares. In other words, c is a function called with markers (E-squares) as its symbolic argument.

### ce (copy and erase)

ce  (2m+1s)
ce  (1m+1s)
ce2 (1m+2s)
ce3 (1m+3s)

Interdependencies:
   - 3arg ce is called by 2arg ce.
   - 2arg ce is called by ce2 and ce3.
   - ce2 is called by ce3.
   - ce3 is not called by other functions in this section.

3arg ce:
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg:
      - move one to the left.
      - note the character X on that square.
      - go to the leftmost schwa.
      - go right in twos until finding the first blank F-square.
      - print the character X.
      - go to the leftmost schwa.
      - go right until finding again the leftmost 3arg.
      - delete it and -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

2arg ce:
   - go to the leftmost schwa.
   - go right until finding either 2arg or two consecutive blanks.
   - if it finds 2arg:
      - move one to the left.
      - note the character X on that square.
      - go to the leftmost schwa.
      - go right in twos until finding the first blank F-square.
      - print the character X.
      - go to the leftmost schwa.
      - go right until finding again the leftmost 2arg.
      - delete it.
      - go back to the beginning of the function.
   - if it finds two consecutive blanks, advance one more position and -> 1arg.

Note: in the same way as 2arg e, 2arg ce calls 3arg ce until all copy & erase operations are performed, then -> 1arg. This also contemplates the case where there are no operations to be performed (in which case, -> 1arg happens directly after finding the consecutive blanks).

ce2:
   - go to the leftmost schwa.
   - go right until finding either 2arg or two consecutive blanks.
   - if it finds 2arg:
      - move one to the left.
      - note the character X on that square.
      - go to the leftmost schwa.
      - go right in twos until finding the first blank F-square.
      - print the character X.
      - go to the leftmost schwa.
      - go right until finding again the leftmost 2arg.
      - delete it.
      - go back to the beginning of the function.
   - if it finds two leftmost consecutive blanks:
      - go to the leftmost schwa (*).
      - go right until finding either 3arg or two consecutive blanks.
      - if it finds 3arg:
         - move one to the left.
         - note the character X on that square.
         - go to the leftmost schwa.
         - go right in twos until finding the first blank F-square.
         - print the character X.
         - go to the leftmost schwa.
         - go right until finding again the leftmost 3arg.
         - delete it.
         - go back to the step marked with a *.
      - if it finds two consecutive blanks, advance one more position and -> 1arg.

### re (replace)

re   (2m+1s)
re   (2m+2s)
re1  (2m+2s)

Interdependencies:
   - 3arg re is called by 2arg cr.
   - 4arg re is called by 3arg re and 3arg cr.
   - re1 is for internal use of 4arg re only.

4arg re:
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg, erase it, print 4arg in place, then -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

3arg re:
   - go to the leftmost schwa.
   - go right until finding either 2arg or two consecutive blanks.
   - if it finds 2arg:
      - erase it.
      - print 3arg.
      - go back to the beginning of the function.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

### cr (copy and replace)

cr   (2m+1s)
cr   (1m+1s)

Interdependencies:
   - 3arg cr is called by 2arg cr.
   - 2arg cr is not called by other functions in this section.

3arg cr:
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg:
      - move one to the left.
      - note the character X on that square.
      - go to the leftmost schwa.
      - go right in twos until finding the first blank F-square.
      - print the character X.
      - go to the leftmost schwa.
      - go right until finding 3arg again.
      - erase it, print 3arg there again, then -> 1arg.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

2arg cr:
   - go to the leftmost schwa.
   - go right until finding either 2arg or two consecutive blanks.
   - if it finds 2arg:
      - move one to the left.
      - note the character X on that square.
      - go to the leftmost schwa.
      - go right in twos until finding the first blank F-square.
      - print the character X.
      - go to the leftmost schwa.
      - go right until finding 2arg again.
      - erase it, print 2arg there again.
      - go back to the beginning of the function.
   - if it finds two consecutive blanks, advance one more position and -> 2arg.

- Note: 2arg cr, if it finds 2arg, will be trapped in an infinite loop where it keeps adding character X to the leftmost free F-square, because 2arg is deleted and reprinted, so it's always there. This is peculiar. Now, Turing states "The m-configuration cr (𝕭, α) is taken up when no letters α are on the tape." It is possible then that 2arg cr is only meant to be called when we know that 2arg is absent from the tape, and in that case we're just interested on finding two consecutive blanks, advancing one more position and -> 2arg. But why not just use f instead? Interestingly enough, Petzold states: "These functions are not used elsewhere in Turing's paper.", which probably means that this function is erroneously defined, and since the error doesn't create further errors down the chain, it can be safely ignored.

### cp (compare)

cp   (3m+2s)
cp1  (2m+1s)
cp2  (2m+1s)

Interdependencies:
   - cp is called by 5arg cpe.
   - cp1 and cp2 are for internal use of cp.

cp:
   - go to the leftmost schwa.
   - go right until finding either 4arg or two consecutive blanks.
   - if it finds 4arg:
      - move one to the left and taking note of the character X printed on that square:
      - go to the leftmost schwa.
      - go right until finding either 5arg or two consecutive blanks.
      - if it finds 5arg:
         - move one to the left and taking note of the character Y printed on that square:
         - if X and Y are the same, -> 1arg.
         - if X and Y are not the same, -> 2arg.
      - if it finds two consecutive blanks, advance one more position and -> 2arg.
   - if it finds two consecutive blanks:
      - go to the leftmost schwa.
      - go right until finding either 5arg or two consecutive blanks.
      - if it finds 5arg, -> 2arg.
      - if it finds two consecutive blanks, advance one more position and -> 3arg.

### cpe (compare and erase)

cpe  (3m+2s)
cpe  (2m+2s)

Interdependencies:
   - 5arg cpe is called by 4arg cpe.
   - 4arg cpe is not called by other functions in this section.

5arg cpe:
   - go to the leftmost schwa.
   - go right until finding either 4arg or two consecutive blanks.
   - if it finds 4arg:
      - move one to the left and taking note of the character X printed on that square:
      - go to the leftmost schwa.
      - go right until finding either 5arg or two consecutive blanks.
      - if it finds 5arg:
         - move one to the left and taking note of the character Y printed on that square:
         - if X and Y are the same:
            - go to the leftmost schwa.
            - go right until finding 4arg.
            - delete it.
            - go to the leftmost schwa.
            - go right until finding 5arg.
            - delete it and -> 1arg.
      - if it finds two consecutive blanks, advance one more position and -> 2arg.
   - if it finds two consecutive blanks:
      - go to the leftmost schwa.
      - go right until finding either 5arg or two consecutive blanks.
      - if it finds 5arg, -> 2arg.
      - if it finds two consecutive blanks, advance one more position and -> 3arg.

4arg cpe:
   - go to the leftmost schwa.
   - go right until finding either 3arg or two consecutive blanks.
   - if it finds 3arg:
      - move one to the left and taking note of the character X printed on that square:
      - go to the leftmost schwa.
      - go right until finding either 4arg or two consecutive blanks.
      - if it finds 4arg:
         - move one to the left and taking note of the character Y printed on that square:
         - if X and Y are the same:
            - go to the leftmost schwa.
            - go right until finding 3arg.
            - delete it.
            - go to the leftmost schwa.
            - go right until finding 4arg.
            - delete it.
            - go back to the beginning of the function.
      - if it finds two consecutive blanks, advance one more position and -> 1arg.
   - if it finds two consecutive blanks:
      - go to the leftmost schwa.
      - go right until finding either 4arg or two consecutive blanks.
      - if it finds 4arg, -> 1arg.
      - if it finds two consecutive blanks, advance one more position and -> 2arg.

### Summary of all functions by family

1. **find** (5 functions, 6 helper functions)
   - f: 1) if there's a 3arg between the schwas and the first two consecutive blanks, find the leftmost 3arg and -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.
   - f': 1) if there's a 3arg between the schwas and the first two consecutive blanks, find it, move one to the left and -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.
   - f'': 1) if there's a 3arg between the schwas and the first two consecutive blanks, find it, move one to the right and -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.
   - 1arg g: go right until finding two consecutive blanks; when the second blank is found, -> 1arg.
   - 2arg g: go right until finding two consecutive blanks; when the second blank is found, start going left until finding 2arg; when 2arg is found, -> 1arg.

2. **erase** (3 functions, 2 helper functions)
   - 3arg e: 1) if there's a 3arg between the schwas and the first two consecutive blanks, find the leftmost 3arg, delete it and -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.
   - 2arg e: 1) delete all the 2args between the schwas and the first two consecutive blanks, then go to the square after the two consecutive blanks and -> 1arg.
   - 1arg e: delete all E-squares between the schwas and the first empty F-square, then stay on the first empty F-square -> 1arg.

3. **print at the end** (1 function, 2 helper functions)
   - pe: find the first blank F-square, print 2arg and -> 1arg.
   - pe2: find the first blank F-square, print 2arg, find the F-square to the right of the one just printed, print 3arg, then -> 1arg.

4. **copy** (1 function, 1 helper function)
   - c: 1) if there's a 3arg between the schwas and the first two consecutive blanks, find it, take the character printed to its left and print it on the leftmost free F-square, then -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.

5. **copy and erase** (4 functions)
   - 3arg ce: 1) if there's a 3arg between the schwas and the first two consecutive blanks, find it, take the character printed to its left and print it on the leftmost free F-square, go back to where 3arg was found, delete it and -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.
   - 2arg ce: 1) for each of the 2args between the schwas and the first two consecutive blanks, find it, take the character printed to its left and print it on the leftmost free F-square, go back to where that 2arg was found and delete it; 2) go to the square after the two consecutive blanks and -> 2arg.
   - ce2: 1) for each of the 2args between the schwas and the first two consecutive blanks, find it, take the character printed to its left and print it on the leftmost free F-square, go back to where that 2arg was found and delete it; 2) repeat 1) but with each of the 3args found between the schwas and the first two consecutive blanks; 3) go to the square after the two consecutive blanks and -> 2arg.
   - ce3: 1) for each of the 2args between the schwas and the first two consecutive blanks, find it, take the character printed to its left and print it on the leftmost free F-square, go back to where that 2arg was found and delete it; 2) repeat 1) but with each of the 3args found between the schwas and the first two consecutive blanks; 3) repeat 1) but with each of the 4args found between the schwas and the first two consecutive blanks; 4) go to the square after the two consecutive blanks and -> 2arg.

6. **replace** (2 functions, 1 helper function)
   - 4arg re: 1) if there's a 3arg between the schwas and the first two consecutive blanks, find it, delete it, print 4arg in place, then -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.
   - 3arg re: 1) for each of the 2args between the schwas and the first two consecutive blanks, find it, delete it and print 3arg in place; 2) go to the square after the two consecutive blanks and -> 2arg.

7. **copy and replace** (2 functions)
   - 3arg cr: 1) if there's a 3arg between the schwas and the first two consecutive blanks, find it, take the character printed to its left and print it on the leftmost free F-square, go back to where 3arg was found and -> 1arg; 2) otherwise, go to the square after the two consecutive blanks and -> 2arg.
   - 2arg cr: 1) if there's a 2arg between the schwas and the first two consecutive blanks, find it, take the character printed to its left and print it on the leftmost free F-square, go back to where 3arg was found and start over; 2) otherwise, go to the square after the two consecutive blanks and -> 1arg.

8. **compare** (1 function, 2 helper functions)
   - cp: 1) if there's a 4arg between the schwas and the first two consecutive blanks, find it, note the character X printed to its left; 1-1) if there's a 5arg between the schwas and the first two consecutive blanks, find it, note the character Y printed to its left; f X and Y are the same, -> 1arg; if X and Y are not the same, -> 2arg; 1-2) if there's no 5arg between the schwas and the first two consecutive blanks, go to the square after the two consecutive blanks and -> 2arg; 2) if there's no 4arg between the schwas and the first two consecutive blanks; 2-1) if there's a 5arg between the schwas and the first two consecutive blanks, find it and -> 2arg; 2-2) if there's no 5arg, go to the square after the two consecutive blanks and -> 3arg.

9. **compare and erase** (2 functions)
   - 5arg cpe: 1) if there's a 4arg between the schwas and the first two consecutive blanks, find it, note the character X printed to its left; 1-1) if there's a 5arg between the schwas and the first two consecutive blanks, find it, note the character Y printed to its left; f X and Y are the same, delete the leftmost 4arg and 5arg, then go to the position where 4arg was deleted and -> 1arg; if X and Y are not the same, -> 2arg; 1-2) if there's no 5arg between the schwas and the first two consecutive blanks, go to the square after the two consecutive blanks and -> 2arg; 2) if there's no 4arg between the schwas and the first two consecutive blanks; 2-1) if there's a 5arg between the schwas and the first two consecutive blanks, find it and -> 2arg; 2-2) if there's no 5arg, go to the square after the two consecutive blanks and -> 3arg.
   - 4arg cpe: 1) if there's a 4arg between the schwas and the first two consecutive blanks, find it, note the character X printed to its left; 1-1) if there's a 5arg between the schwas and the first two consecutive blanks, find it, note the character Y printed to its left; f X and Y are the same, delete the leftmost 4arg and 5arg, then repeat until there's no two 4arg and 5arg marking Xs and Ys that are equal, then go to the position where the last 4arg was deleted and -> 1arg; if X and Y are not the same, -> 2arg; 1-2) if there's no 5arg between the schwas and the first two consecutive blanks, go to the square after the two consecutive blanks and -> 2arg; 2) if there's no 4arg between the schwas and the first two consecutive blanks; 2-1) if there's a 5arg between the schwas and the first two consecutive blanks, find it and -> 2arg; 2-2) if there's no 5arg, go to the square after the two consecutive blanks and -> 3arg.

p131

- PE: "Turing is about to take the paper in a more unusual direction by using numbers to encode other forms of information. The next section of Turing's paper demonstrates how numbers can represent not photographs or songs, but the machines themselves. Yes, everything is a number. Even Turing Machines are numbers."

- TU: "Section 5. Enumeration of computable sequences. A computable sequence γ is determined by a description of a machine which computes γ. Thus the sequence 001011011101111... is determined by the table on p. 234, and, in fact, any computable sequence is capable of being described in terms of such a table. It will be useful to put these tables into a kind of standard form."

- PE: "Turing actually started out with a standard form that he described in Section 1. (...) Turing quickly abandoned his own rules. He allowed printing multiple symbols and moving multiple squares in single operations. This was done solely so the machine tables didn't go on for pages and pages. Now he'd like to return to his original restrictions."

p132

- TU: "In the first place let us suppose that the table is given in the same form as the first table, for example, I on p. 233. That is to say, that the entry in the operations column is always of one of the forms E: E, R: E, L: Pα: Pα, R: Pα, L: R: L: or no entry at all."

- PE: "Turing uses colons to separate the nine different possibilities. These possibilities result from the three types of printing (erase, print a character, or neither) in combination with the three kinds of movement (left, right, or none)."

- TU: "the table can always be put into this form by introducing more m-configurations."

- PE: "For example, the table for Example II (page 87) began with configuration *b*. (...) To adhere to Turing's original (and reinstated) restrictions, this single configuration must be split into six simple configurations. (...) Now each operation consists solely of a printing operation (or not) followed by a possible left or right movement by one square."

p133

Combination: marking + displacement. Marking is dual (erase|write) and so is movement (left|right). Combined with no-ops, that's 9. But it is 9 per each possible printed symbol? Only for those where you print (not for those where you erase or where you don't mark).

- TU: "Now let us give numbers to the m-configurations, calling them q1, ..., qr, as in Section 1. The initial m-configuration is always to be called q1."

- PE: "If there happen to be 237 different m-configurations in a machine, they are now to be labeled q1 through q237. For the revised beginning of Example II, the first six m-configurations can be renamed q1 through q6."

- TU: "We also give numbers to the symbols S1, ..., Sm, and in particular, blank = S0, 0 = S1, 1 = S2."

- PE: "It's a little confusing that a subscripted 1 means the symbol 0 and a subscripted 2 means the symbol 1, but we'll have to live with it. The Example II machine also needs to print ə and x, so the following equivalencies would be defined for this machine: S0 means a blank, S1 means 0, S2 means 1, S3 means ə, and S4 means x. The machine that computes the square root of 2 requires symbols up to S14. (...) The imposition of a uniform naming system has resulted in these lines taking on very similar patterns. In the general case, Turing identifies three different standard forms:"

p134

- TU: "The lines of the table are now of form:
```
m-config   symbol   operations   final m-config
qi         Sj       PSk, L       qm              (N1)
qi         Sj       PSk, R       qm              (N2)
qi         Sj       PSk          qm              (N3)
```

- PE: "At the far right, Turing has labeled these three standard forms N1, N2 and N3. All three print something; the only difference is whether the head moves Left, Right, or not at all. What about erasures? Because Turing defined S0 as a blank symbol, erasures can be performed by printing simply S0:"

- TU: "Lines such as `qi   Sj   E, R   qm` are to be written as `qi   Sj   PS0, R   qm` and lines such as `qi   Sj   R   qm` to be written as `qi   Sj   PSj, R   qm`. In this way we reduce each line of the table to a line of one of the forms (N1), (N2), (N3)."

p135

- PE: "To illustrate the process of standardizing the table, I've been using the first configuration of the Example II table, but that first configuration doesn't even have anything in its *symbol* column because the configuration does the same thing regardless of the symbol. A machine starts with a blank tape so we know that the symbol it reads is a blank. The first configuration of the Example II table converted to standard form becomes:"

```
configuration       behaviour
m-config   symbol   operations   final m-config
q1         S0       PS3, R       q2
q2         S0       PS3, R       q3
q3         S0       PS3, R       q4
q4         S0       PS0, R       q5
q5         S0       PS1, R       q6
q6         S0       PS0, R       q7
```

- PE: "That's easy enough, but let's take a look at the second m-configuration of the Example II machine:"

```
o   1   R, Px, L, L, L   o
    0                    q
```

- PE: "The m-configuration o will become the numbered configuration q7. When the scanned character is 1, the head must move right once, and then left three times. These three left-shifts will require three more m-configurations, q8, q9, and q10. The m-configuration q then becomes q11. Here's m-configuration q7:

p136

```
configuration       behaviour
m-config   symbol   operations   final m-config
q7         S2       PS2, R       q8
q7         S1       PS1          q11
```

This is very interesting. It drives home the point that the configuration is the combination of m-config plus symbol.

- PE: "In both cases, the machine prints the scanned character. Here are m-configurations q8, q9, and q10.

```
q8         S0       PS4, L       q9
q9         S2       PS2, L       q10
q10        S0       PS0, L       q7
```

- PE: "The problem is the *symbol* column. To fill it in correctly, you really have to know what the machine will be encountering. For q8, the machine is scanning a blank square and printing an x. Once it moves left, what's the next scanned character? It's the 1 that was scanned at q7, but in other cases it might not be so obvious. The words "Any" or "Not" or "Else" don't work with this scheme, and in some cases you may have to add specific configurations for every single character the machine is using. It's a mess, but there are always a finite number of characters involved, so it can definitely be done. Let's assume that we have convered all the configurations of a particular machine into the standard forms that Turing denotes as (N1), (N2), and (N3). When we're finished, and we dispose of the original table, have we lost any information? Yes, we have lost a little bit. We know that S0 is a blank, S1 is a 0 and S2 is a 1, but we no longer know the exact characters meant by S3, S4, and so on. This shouldn't matter. The machines use these characters internally."

- Note: a standard conversion to standard form could be done by scanning the configurations (which have an order in which they are presented), listing in order the different characters printed (so that there's also a table for interpretation of the symbols, so no information is lost as suggested by Petzold) and then expand the configurations into normal form. This would require a two pass process (one for mapping characters, another one for expanding the configurations).

- PE: "Instead of a table, we can express each configuration with a combination of the m-configurations, symbols, L, and R."

- TU: "From each line of form (N1) let us form an expression qi Sj Sk L qm;"

- PE: "This form is sometimes known as a *quintuple* because it's composed of five elements. Despite its cryptic nature, it's still readable: "In m-configuration qi, shen character Sj is scanned, print character Sk, move Left, and switch to m-configuration qm." Similarly for N2 and N3:"

p137

- TU: "from each line of form (N2) we form an expression q1 Sj Sk R qm; and from each line of form (N3) we form an expression qi Sj Sk N qm."

- PE: "Notice that when the head is not to be moved, the letter is N (meaning No move)."

- TU: "Let us write down all expressions so formed from the table for the machine and separate them by sem-colons. In this way we obtain a complete description of the machine."

- PE: "Turing will show an example shortly. Each configuration is a quintuple, and an entire machine is now expressed as a stream of qunituplets. (Interestingly enough, the quintuples don't have to be in any specific order. It's like a programming language where each statement begins with a label and ends with a *goto*.)"

Interesting! But the same goes for the m-configurations and m-functions; the order is there for us to understand it better, but presumably there can be forward references.

- PE: "The next substitution is a radical one. It gets rid of all those subscripts and turns the machine into a stream of capital letters:"

- TU: "In this description we shall replace qi by the letter "D" followed by the letter "A" repeated i times, and Sj by "D" followed by "C" repeated j times.

- PE: "For example, q1 is replaced by DA and q5 is replaced by DAAAAA. (Remember that the first configuration is q1. There is no q0.) As for the symbols, S0 (the blank) is now denoted by D, S1 (the symbol 0) is DC, and S2 (the symbol 1) is DCC. Other symbols are assigned to S3 and greater and become DCCC and so on."

- TU: "This new description of the machine may be called the *standard description* (S.D). It is made up entirely from the letters "A", "C", "D", "L", "R", "N", and from ";".

- PE: "The L, R, and N indicate the moves. Semicolons separate each configuration."

- TU: "If finally we replace "A" by "1", "C" by "2", "D" by "3", "L" by "4", "R" by "5", "N" by "^", and ";" by "7" we shall have a description of the machine in the form of an arabic numeral.

- PE: "This is an important step. Turing has standardized his machines to such an extent that he can now uniquely identify a machine by an integer, and this integer encodes all the states of the machine. Turing was undoubtedly inspired by the approach Godel took in his incompleteness Theorem in converting every mathematical expression into a unique number.

p138

- TU: "The integer represented by this numeral may be called a *description number* (D.N.) of the machine. The D.N determine the S.D and the structure of the machine uniquely. The machine whose D.N is n may be described as M(n). To each computable sequence there corresponds at least one description number, while to no description number does there correspond more than one computable sequence."

- PE: "Since the order of the quintuples doesn't matter, the quintuples can be scrambled without any effect on the sequence the machine computes. It is very clear, then, that multiple description numbers are associated with each computable sequence, but each description number defines a machine that generates only one computable sequence (at least when beginning with a blank tape). Without much fanfare Turing concludes with a result he mentioned in the very beginning of the article:"

- "TU: The computable sequences and numbers are therefore enumerable."

Sequences are mapped onto integers. And because integers are enumerable, so are sequences.

- TU: "Let us find a description number for the machine I of Section 3."

p139

- PE: "That machine was originally defined by this table:"

```
configuration       behaviour
m-config   symbol   operations   final m-config
b          none     P0, R        c
c          none     R            e
e          none     P1, R        f
f          none     R            b
```

- TU: "When we rename the m-configurations its table becomes:"

```
q1         S0       Ps1, R       q2
q2         S0       Ps0, R       q3
q3         S0       Ps2, R       q4
q4         S0       Ps0, R       q1
```

- TU: "Other tables could be obtained by adding irrelevant lines such as `q1   S1   PS1, R   q2`.

- PE: "That is, *other tables that produce the same computable sequence* could be obtained by adding lines that never come into play. If the tape is blank when the machine begins, and it always shifts right when a square is printed, the machine will never scan the digit 0."

- TU: "Our first standard form would be `q1 S0 S1 R q2; q2 S0 S0 R q3; q3 S0 S2 R q4; q4 S0 S0 R q1;`

- Note: the only column that has a variable number of symbols is the third one (operations); the other ones have always one symbol; in that way, there's no need to use separators between columns.

- PE: "That's just taking the four-line table and separating the conigurations with semicolons. Converting this to the Standard Description form requires replacing qi with D followed by a quantity of *i* A's (one or more) and replacing Si with D followed by i C's (zero or more)."

p140

- TU: "The standard description is `DADDCRDAA; DAADDRDAAA; DAAADDCCRDAAAA; DAAAADDRDA;`"

- PE: "The Standard Description can be hard to read, but it's used a lot so you should try to get accustomed to it. To decode it into its components, begin by taking note of each D. Each D represents either a configuration or a symbol.

- If the D is followed by one or more A's, it's a configuration. The configuration number is the number of A's.
- If the D is *not* followed by any A's, it's a symbol. The D in this case is followed by 0 or more C's. D by itself is a blank, DC is a 0, DCC is a 1, and more C's indicate other symbols.

Turing does not use the Description Number as much as the Standard Description (...) Turing doesn't perform any calculations with the number. For the example Turing is showing, you can replace A with 1, C with 2, D with 3, R with 5 and the semicolon with 7 to create a description number:"

- TU: "A description number is `31332531173113353111731113322531111731111335317` and so is `3133253117311335311173111332253111173111133531731323253117`."

- PE: "The second of those numbers is the same as the first except it has extra digits at the end (31323253117) corresponding to the "irrelevant" configuration `q2S1S1Rq2` that Turing defined. The point is this: These two numbers define two different machines, but the two machines both compute exactly the same number, which (as you'll recall) is the binary version of 1/3. A machine with its configurations rearranged still calculates the same number, but its Description Number is different. These numbers are huge!"

p141

- PE: "The accomplishment here is quite interesting. Consider a Turing Machine that calculates π. Normally, we indicate the digits of π with an infinite sequence: π = 3.1415926535897932384626433832795... . Now we can represent π with a *finite* integer - the Description Number of the Turing Machine that calculates the digits. Which is the better representation of π? The first 32 digits followed by an ellipsis? Or de Description Number of the Turing Machine that can generate as many digits as our patience with allow? In a sense, the Description Number is a more fundamental numerical representation of π because it describes the algorithm of calculating the number.

By reducing each machine to a number, Turing has also made it possible, in effect, to generate machines just by enumerating the positive integers. Not every positive integer is a valid Description Number of a Turing Machine, and many valid Description Numbers do not describe circle-free machines, but this enumeration certainly includes all circle-free Turing Machines, each of which corresponds to a computable number. Therefore, computable numbers are enumberable. That's an important finding, although possibly a disturbing one, for it implies than most - nay (...) virtually all - real numbers are not computable."

That's not necessarily disturbing. Perhaps it's just natural.

p142

- TU: "A number which is a description number of a circle-free machine will be called a *satisfactory* number. In Section 8 it is shown that there can be no general process for determining whether a given number is satisfactory or not."

- PE: "It's easy to determine whether a particular integer is a well-formed Description Number, but Turing is now asserting that there's no general process to determine whether a particular Description Number represents a circle-free machine and prints a continuing series of 0s and 1s like it's supposed to. There's no general process for determining whether the machine might scan a character it's not expecting, or gets into an infinite loop printing blanks, whether it crashes, burns (...)."

p143

- PE: "The machine that Turing describes in the next section of his paper is known today as the Universal Turing Machine, so called because it's the only machine we need. The individual computing machines presented earlier were not guaranteed to be implemented similarly or even to have interchangeable parts. This Universal Machine, however, can simulate other machines when supplied with their Standard Descriptions. The Universal Machine is, we would say today, *programmable*."

- TU: "Section 6. The universal computing machine.

It is possible to invent a single machine which can be used to compute any computable sequence. If this machine U is supplied with a tape on the beginning of which is written the S.D of some computing machine M, then U will compute the same sequence as M. In this section I explain in outline the behaviour of the machine. The next section is devoted to giving the complete table for U."

- PE: "The machines described so far basically have no input because they begin with a blank tape. The machines generate output in the form of a sequence of 0s and 1s, temporarily interspersed, perhaps, with some other characters used as markers or a scratchpad. In contrast, the Universal Machine U requires actual input, specifically a tape that contains the Standard Description of M - the sequences of letters A, C, D, L, N and R that describe all the configurations of M. The U machine reads and interprets that Standard Description and prints the same output that M would print."

p144

- PE: "But that's not entirely true. The output of U will *not* be identical to the output of M. In the general case, there is no way that U can perfectly mimic M. Machine M probably begins with a blank tape, but machine U doesn't get a blank tape - it gets a tape with the Standard Description of M already on it. What happens if M doesn't quite follow Turing's conventions but instead writes output in both directions? Any attempt to emulate M precisely could easily result in writing over that Standard Description. Turing says that U is supplied with a tape "on the beginning of which" is a Standard Description of machine M. A tape that is infinite in both directions does not have a "beginning". Turing is implicitly restricting the output of U to that part of the tape after the Standard Description. (...) Certainly this Universal Machine would require its own scratchpad area, so its output will be different from the machine that it's trying to emulate. (...) Turing doesn't guarantee that his Universal Machine will faithfully duplicate the output of the machine that it is emulating. He says only that "U will compute the same sequence as M. In reality, U prints a lot of extra output *in addition to* this sequence. Turing approaches the design of the Universal Machine from a rather odd direction."

- TU: "Let us first suppose that we have a machine M' which will write down on the F-squares the successive complete configurations of M."

- PE: "As you'll recall, a complete configuration is a "snapshot" of the tape after an operation has completed, together with the position of the head and the next m-configuration. The successive complete configurations provide an entire history of the operations of the machine."

- TU: "These might be expressed in the same form as on p. 235, using the second description, (C), with all symbols on one line."

p145

- PE: "In this notation the successive complete configurations are separated by colons. Within each complete configuration, the German letter representing the next m-configuration precedes the next scanned symbol."

The next m-configuration **precedes** the scanned symbol.

- TU: "Or, better, we could transform this description (as in Section 5) by replacing each m-configuration by "D" followed by "A" repeated the appropriate number of times, and by replacing each symbol by "D" followed by "C" repeated the appropriate number of times. The numbers of letters "A" and "C" are to agree with the numbers chosen in Section 5, so that, in particular, "0" is replaced by "DC", "1" by "DCC", and the blanks by "D".

- PE: "Turing devised this Standard Description (as he called it) to encode the states of a machine. Now he is proposing to use it to represent the complete configurations."

- TU: "These substitutions are to be made after the complete configurations have been put together, as in (C). Difficulties arise if we do the substitution first. In each complete configuration the blanks would all have to be replaced by "D", so that the complete configuration would not be expressed as a finite sequence of symbols."

I think that by "finite", Turing means "unbroken", because complete configurations must start finite.

- PE: "The letter D represents a blank square. Turing doesn't want any breaks to appear in the complete configurations. He wants each complete configuration to be an unbroken series of letters. Turing's phrase, "so that the complete configuration would not be expressed as a finite sequence of letters" is not quite clear. I suggest the word "not" should be "now". Certainly he doesn't want an infinite series of D symbols to represent a blank tape. Each complete configuration is finite."

p146

- TU: "If in the description of the machine II of Section 3, we replace "o" by "DAA", "ə" by DCC, "q" by "DAAA", then the sequence (C) becomes: `DA : DCCCDCCCDAADCDDC : DCCCDCCCDAAADCDDC : ... (C1)`. (This is the sequence of symbols on F-squares.)"

- PE: "Turing's not mentioning *all* the substitutions he's making. He's also replacing b with DA, blanks with D and 0s with DC."

Comparing both:

```
b_:ə___ə___o__0_ 0_:ə___ə___q___0_ 0_: ...
DA:DCCCDCCCDAADCDDC:DCCCDCCCDAAADCDDC: ...
```

- PE: The parenthetical comment refers to the output of the M' machine that Turing is proposing. The normal M machine prints 0s and 1s on F-squares and uses the E-squares for other symbols to help it in computing the 0s and 1s. The M' machine points the successive complete configurations of M on F-squares and uses the E-squares to aid itself in constructing these successive complete configurations. The complete configurations represented in this way can be hard to read. As I've said before, it helps to take note of each D, which represents either a configuration or a symbol.
   - If the D is followed by one or more A's, it's a configuration. The configuration number is the number of A's.
   - If the D is *not* followed by any A's, it's a symbol. The D in this case is followed by zero or more C's. D by itself is a blank, DC is a 0, DCC is a 1, and more C's indicate other symbols."

This is a critical point: from a normal machine that writes results on F squares and scratchpad in the E squares, to a machine that simulates another machine by writing the output of the simple machine on F squares, and uses the E squares for its own scratchpad. This means that the output of M' is M. This makes perfect sense.

- TU: "It is not difficult to see that if M can be constructed, then so can M'. The manner of operation of M' could be made to depend on having the rules of operation (i.e., the S.D) of M written somewhere within itself (i.e. within M'); each step could be carried out by referring to these rules."

- PE: "This idea of M' having the Standard Description of M "written somewhere within itself" is an entirely new concept. Where is it written? How is it accessed? Turing is pursuing this M' machine in a way that's distracting from his goal, although it does seem reasonable that M' could be constructed."

- TU: "We have only to regard the rules as being capable of being taken out and exchanged for others and we have something very akin to the universal machine."

p147

- PE: "Turing said at the outset of this section that U is supplied with a tape containing the Standard Description of M. That's what "capable of being taken out and exchanged for others" means. We can give U a tape containing the Standard Description of whatever machine we want U to emulate. (...) U starts with a tape on which the Standard Description of M is printed. It is responsible for printing the successive complete configurations of M. The Standard Description and the complete configurations use the same encoding: Each complete configuration contains a sequence of letters, mostly indicating the symbols printed on the tape. Each complete configuration also includes a D followed by one or more A's indicating the next m-configuration preceding the scanned symbol, for example: `DAADCC`. This sequence of letters appearing in a complete configuration indicates that the next m-configuration is q3 and the next scanned symbol is a 1. Somewhere in the Standard Description of M is a sequence of letters matching these letters exactly (If not, then something has gone wrong and M is not circle-free.) All that U needs to do to determine the next configuration is to find a match. When U finds the matching configuration, it has immediate access to the configuration's operation - the symbol to be printed, a code indicating how to move the head, and the next m-configuration. U must then create a new complete configuration based on the last complete configuration and incorporating the printed character and the next m-configuration."

- PE: "The Universal Machine might be easier to conceive if you consider that the first complete configuration of a machine's operation is trivial, and each step from one complete configuration to the next involves only a small change. It's really just a matter of comparing and copying symbols, and Turing has already defined an arsenal of m-functions that perform these very chores. For now, he's still talking about M' rather than U, and M' only prints the complete configurations of M."

- TU: "One thing is lacking: at present the machine M' prints no figures. We may correct this by printing between each successive pair of complete configurations the figures which appear in the new configuration but not in the old. Then (C1) becomes `DA : 0 : 0 : DCCCDCCCDAADCDDC : DCCC (C2)`. It is not altogether obvious that the E-squares leave enough room for the necessary "rough work", but this is, in fact, the case."

It seems like the figures are printed when they are printed for the first time only, *after* the complete configuration that generates them.

p148

- PE: "Turing wants M' (and U) to print the same 0s and 1s that M prints, because then it's possible to say that M' computes the same sequence as M. The only difference is that these digits will now be buried in the output between successive complete configurations of the machine. This is why Turing requires his machines to print the computed numbers consecutively, and to not change a number once it's been printed. Without this requirement, the numbers printed by M' (and U) would be a total jumble. Turing says that M' should print all figures (0s or 1s) "which appear in the new configuration but not in the old." When you reduce a machine to the standard form (that is, only one printed symbol and one head movement per operation), there are frequently occasions when the machine scans a 0 or 1 symbol on its way somewhere else. The machine must reprint the 0 or 1 in these cases. M' should ignore the times that M prints a 0 or 1 over itself. M' (and, by implication, the Universal Machine) should print a 0 or 1 *only when the scanned symbol is a blank*. Turing concludes this section by suggesting that the complete configurations could be expressed in numerical form, but this is something he never uses."

- TU: "The sequences of letters between the colons in expressions such as (C1) may be used as standard descriptions of the complete configurations. When the letters are replaced by figures, as in Section 5, we shall a numerical description of the complete configuration, which may be called its description number."

p149

- PE: "Now let's forget all about M' and start looking at U. It is well known that Turing's description of the Universal Machine contains a few bugs. (...) Because the Universal Machine is so essential to Turing's arguments in the rest of his paper, he proves the existence of such a machine by actually constructing it in full, excruciating detail."

- TU: "Section 7: Detailed description of the universal machine. A table is given below of the behaviour of this universal machine. The m-configurations of which the machine is capable are all those occurring in the first and last columns of the table, together with all those which occur when we write out the unabbreviated tables of those which appear in the table in the form of m-functions. E.g., e (anf) appears in the table and is a m-function."

The "all those occurring in the first and last columns of the table" statement can be applicable to get all the m-configurations of any machine.

- PE: "The m-configuration `anf` is part of Turing's Universal Machine. Towards the end of the machine, a particular configuration has `e (anf)` in its *final m-config* column. The skeleton table for `e` (...):"

```
e  (𝕮)                ə        R        e1 (𝕮)
                      not ə    L        e  (𝕮)

e1 (𝕮)                any      R,E,R    e1 (𝕮)
                      none              𝕮
```

p150

- PE: "Turing now shows the unabbreviated table when `anf` is substituted by 𝕮:"

```
e  (anf)              ə        R        e1 (anf)
                      not ə    L        e  (anf)

e1 (anf)              any      R,E,R    e1 (anf)
                      none              anf
```

TU: "Consequently, `e1 (anf)` is an m-configuration of U."

PE: "Turing begins by describing a tape encoded with the Standard Description of some machine. This is the tape the Universal Machine will read and interpret."

TU: "When U is ready to start work the tape running through it bears on it the symbol ə on an F-square and again ə on the next E-square; after this, on F-squares only, comes the S.D of the machine followed by a double colon "::" (a single symbol, on an F-square). The S.D consists of a number of instructions, separated by semi-colons."

Then: `əə<S.D of the machine on F-squares only, instructions separated by semi-colons>::

Interesting: because U uses the F-squares to store the emulated machine's instructions, and the E-squares as its own scratchpad area, it needs schwas on the first F-square and the first E-square to mark the beginning of the tape.

Also interesting: the schwas that U uses are not encoded, they're just schwas. But there are encoded schwas within the emulated machine.

- PE: "That, by the way, is Turing's first use of the word *instructions* in this paper. The word is appropriate here because the configurations of the machines are now playing a different role; they have become instructions to the Universal Machine. Earlier (...) Turing showed each configuration followed by a semicolon, however, the Universal Machine requires that each instruction *begin* with a semicolon. This is just one of several little "bugs" in the description of the Universal Machine."

- PE: "To illustrate the workings of U, let's supply it with a simple M. This machine is a simplified form of the machine that prints alternating 0s and 1s."

```
q1         S0       PS1, R       q2
q2         S0       PS2, R       q1
```

- PE: "This simplified machine has just two configurations rather than four and doesn't skip any squares. Here's a tape prepared in accordance with Turing's directions, but with the semicolons preceding each instruction."

p151

`əə; D A D D C R D A A ; D A A D D C C R D A ::`

- PE: "The double colon separates the instructions of M from the successive complete configurations of M that U will print. Turing reminds us how these instructions are coded:"

- TU: "Each instruction consists of five consecutive parts: (i) "D" followed by a sequence of letters "A". This describes the relevant M-configuration."

- PE: "At least one A must follow a D to signify an m-configuration, that is, the configurations begin at q1 and there is no q0."

m-configurations are thus 1-indexed, not 0-indexed.

- TU: "(ii) "D" followed by a sequence of letters "C". This describes the scanned symbol."

- PE: "For symbols, a D by itself means a blank; a D with one C means 0, and with two Cs means 1."

- TU: "(iii) "D" followed by another sequence of letters "C". This describes the symbol into which the scanned symbol is to be changed. (iv) "L", "R", or "N", describing whether the machine is to move to left, right, or not at all. (v) "D" followed by a sequence of letters "A". This describes the final m-configuration."

Print and move, not move and print.

- PE: "The Universal Machine needs to print complete configurations, which require the letters A, C, and D, and it also needs to print the computable sequence which is composed of 0s and 1s. The Universal Machine uses lower-case letters as markers in the E-squares. In summary:"

- TU: "The machine U is to be capable of printing "A", "C", "D", "0", "1", "u", "v", "w", "x", "y", "z"."

p152

- PE: "Turing forgot to include the colon (which separates the successive complete configurations) in this list."

- TU: "The S.D is formed from ";', "A", "C", "D", "L", "R", "N".

- PE: "Turing next presents one last function that the Universal Machine requires."

- TU: "Subsidiary skeleton table."

```
con  (𝕮, α)     Not A    R, R         con  (𝕮, α)
                A        L, Pα, R     con1 (𝕮, α)

con1 (𝕮, α)     A        R, Pα, R     con1 (𝕮, α)
                D        R, Pα, R     con2 (𝕮, α)

con2 (𝕮, α)     C        R, Pα, R     con2 (𝕮, α)
                Not C    R, R         𝕮

// con (𝕮, α). Starting from an F-square, S say, the sequence C of symbols describing a configuration closest on the right of S is marked out with letters α. -> 𝕮
// con (𝕮). In the final configuration the machine is scanning the square which is four squares to the right of the last square of C. C is left unmarked.
```

- PE: "The m-function con stands for "configuration," and it's missing a line: `con1 (𝕮, α)   None   PD, R, Pα, R, R, R   𝕮`. We'll see how this missing line comes into play shortly. The job of the con function is to mark a configuration with the symbol given as the second argument. Suppose the head is on the semicolon preceding an instruction:"
                       _
`əə; D A D D C R D A A ; D A A D D C C R D A ::`

p152-153
- PE: The con function moves right two squares at a time until it encounters an A. It prints an α to the left of the A. The con1 function continues printing markers to the right of each A until it encounters a D. It prints a marker to the right of that D as well and then goes to con2. The con2 function prints markers to the right of each C (if any). For example, there are no C's in the configuration because the scanned square is a blank, so the result is:
                                   _
`əə; D A D D C R D A A ; DαAαAαDαD C C R D A ::`

- PE: "The explanatory paragraphs in the skeleton table for con are a bit confusing because Turing uses the letter C to stand for a whole sequence of symbols defining a configuration, and the same letter is part of the Standard Description. The first sentence of the second paragraph (beginning "In the final configuration") indicates that the head is left four squares to the right of the last square of the configuration (that is, the last square of the scanned character). The sentence "C is left unmarked" meaning "The configuration is left unmarked" applies only when the second argument to con is blank."

- PE: "The description of the Universal Machine occupies just two pagse in Turing's paper. Turing has previously defined his m-functions with such skill that in many cases, the m-configurations of U simply refer to a particular function. As usual, the machine begins with m-configuration b."

- TU: "The table for U:"

```
b                                   f (b1, b1, ::)
b1   R, R, P:, R, R, PD, R, R, PA   anf
// b. The machine prints :DA on the F-squares after :: -> anf
```

- PE: "The m-function f finds the double colon that separates the instructions from the complete configurations. As you'll recall, each complete configuration shows all the symbols on the tape, with the m-configuration preceding the scanned square. When a machine begins, the first m-configuration is q1, which has a Standard Description of DA. That's what b1 prints, starting with a colon that will delimit each complete configuration:"

`əə; D A D D C R D A A ; D A A D D C C R D A :: : D A...`

- PE: "The next m-configuration of U is anf, which Donald Davies suggets stands for *anfang*, the German word for *beginning*. The g function in the first line was mistakenly indicated as q in the tables of functions. It searches for the last occurrence of its second argument:

p154

```
anf                  g (anf1, :)
anf1                 con (kom, y)
// anf. The machine marks the configuration in the last complete configuration with y. -> kom
```

- PE: "After g finds the colon (which precedes the current complete configuration), con marks the m-configuration with the letter y. The additional line I've added to con1 also comes into play: it prints a D (representing a blank square) and marks that square as well:

`əə; D A D D C R D A A ; D A A D D C C R D A :: : DyAyDy...`

-PE: "Whenever con is marking an m-configuration in a complete configuration and comes to a blank square when it is expecting to find a D that represents the scanned symbol, con1 prints a D. This is how the tape gets progressively longer as more squares are required. Now the machine must locate the instruction whose configuration matches the symbols in the complete configurations marked with y. There are multiple instructions, of course, but they are easy to locate because each one is preceded by a semicolon. These instructions are tested starting with the last instruction and working towards the beginning. The m-configuration kom (...), possibly one of several abbreviations meant to suggest the word *compare*"

```
      ;            R, Pz, L   con (lrm, x)
kom   z            L, L       kom
      not z nor ;  L          kom
```

p155

- PE: "The first time through, kom finds the last (rightmost) instruction, prints a z following the semicolon, and then marks the configuration that follows using con."

`əə; D A D D C R D A A ;zDxAxAxDxD C C R D A :: : DyAyDy...`

- PE: "The z marker indicates that this instruction has been checked. On subsequent attempts to find a match, kom skips past all semicolons previously marked with z. The m-configuration kmp (another abbreviation for *compare*?) uses cpe to compare the configuration marked x (which is the m-configuration and scanned symbol of an instruction) and the configuration marked y (which is currently m-configuration and scanned symbol indicated in the complete configuration).

```
kmp        cpe (e (kom, x, y), sim, x, y)
// kmp. The machine compares the sequences marked x and y. It erases all letters x and y. -> sim if they are alike. Otherwise -> kom.
```

- PE: "The cpe function erases the markers as it compares the letters marked with those markers. If there's a match, then all the x and y markers have been erased, and we head to sim (meaning *similar*). If the configurations marked x and y do not match (as they won't in our example), then the first argument of cpe takes over, which is an e (erase) function that erases all the remaining x and y markers and eventually retreats to kom to try the next instruction."

- PE: "A little problem with the kmp function is that TUring never defined a version of e that has one m-configuration argument and two symbol arguments. Moreover, he can't go back to kom because some or all of the y markers have been erased by cpe. He really needs to go back to anf to mark the configuration again. Donald Davies suggests that the instruction should really read:

```
kmp        cpe (e (e (anf, x), y), sim, x, y)
```

p156

- PE: "In our example, anf1 will re-mark the m-configuration and scanned symbol in the complete configuration, and kom will mark the next instruction (working backwards through the instructions):"

`əə;zDxAxDxD C R D A A ;zD A A D D C C R D A :: : DyAyDy...`

- PE: "This time, the cpe function invoked by kmp will detect a match and head to sim. All the x and y markers will be gone, but the z markers remain. The leftmost z marker precedes the instruction that U must carry out. Turing summarizes the progress so far:"

- TU: "anf. Taking the long view, the last instruction relevant to the last configuration is found. It can be recognized afterwards as the instruction following the last semi-colon marked z. -> sim"

- PE: "Actually, it's the *first* (leftmost) semicolon marked `z`, but the last instruction tested. The m-configuration sim begins by using f' to find that marker and position itself at the semicolon preceding the instruction. As you'll recall, the instruction has five parts: the m-configuration, the scanned symbol, the symbol to print, an L, N or R, and the final m-configuration."

- TU:

```
sim                             f' (sim1, sim1, z)
sim1                            con (sim2, )
sim2   A                        sim3
       not A   R, Pu, R, R, R   sim2
sim3   not A   L, Py            e (mk, z)
       A       L, Py, R, R, R   sim3

// sim. The machine marks out the isntructions. That part of the instructions which refers to the operations to be carried out is marked with u, and the final m-configuration with y. The letters z are erased.
```

- PE: "The m-configuration sim1 refers to the con function with a blank second argument. This essentially skips past the m-configuration and the scanned symbol, putting the head at the second character of the print operation."

p157
             _
`əə;zD A D D C R D A A ; D A A D D C C R D A :: : D A D ...`

- PE: "The second line for m-configuration sim2 is incorrect. Emil Post suggests it should move the head *left* before printing a u. The two m-configurations sim2 and sim3 mark the operation (the symbol to be printed and the head-movement letter) and the next m-configuration The e function erases the z marker before heading to mk."

`əə;zD A D DuCuRuDyAyAy; D A A D D C C R D A :: : D A D ...`

- PE: "The m-configuration mk (which looks like mf but is actually mk and perhaps stands for *mark*) now marks the last complete configuration. The first argument to the g function (which is mistakenly q in the tables of functions) should be mk1, rather than mk."

- TU:

```
mk                            g (mk1, :)

mk1   not A   R, R            mk1
      A       L, L, L, L      mk2

      C       R, Px, L, L, L  mk2
mk2   :                       mk4
      D       R, Px, L, L, L  mk3

mk3   not :   R, Pv, L, L, L  mk3
      :                       mk4

mk4                           con (l (l (mk5)), )

mk5   Any     R, Pw, R        mk5
      None    P:              sh

// mk. The last complete configuration is marked out into four sections. The configuration is left unmarked. The symbol directly preceding it is marked with x. The remainder of the complete configuration is divided into two parts, of which the first is marked with v and the last with w. A colon is printed after the whole. -> sh
```

p157/158

- PE: "The m-configuration mk uses g to find the rightmost colon. That colon precedes the last complete configuration. THe complete configuration is on F-squares and, in general, consists mostly of D's followed by zero or more C's, each of which represents a symbol on the tape. Buried somewhere within these symbols is an m-configuration, which is a D followed by one or more A's. The m-configuration mk1 looks for the m-configuration buried within the complete configuration. When it finds an A, it moves the head left to the last symbol of the square that precedes the m-configuration. That square is marked with x. Then, mk3 has the job of marking all the preceding characters with v. When mk3 gets to the colon, mk4 takes over. It uses con to skip over the m-configuration and the scanned character. It stops when it finds something other than a C. Except for the scanned character, the other symbols are marked with w. Finally, mk5 prints a colon."

- PE: "Here's a complete configuration that's a bit more complex than the simple example we've been looking at:"

`: D C D D A D C D D C   ...`

- PE: "This complete configuration represents a tape starting with a 0 (DC) and a blank (D). The next square is the scanned square, indicated by the configuration q1 (DA). The scanned square is a 0 (DC), which is followed by a blank (D) and a 0 (DC). When mk is through with this, it looks like this:"

`: DvCvDxD A D C DwDwCw: ...`

The "marking" of a complete configuration with a m-configuration is done to the left, instead of to the right (as the marking of F-squares with E-squares is done). I find it mnemonically helpful to see this as a contrast.

- PE: "The only thing unmarked is the configuration (which consists of the m-configuration DA and the scanned symbol DC). In our much simpler example, there are no symbols to the left of the m-configuration and no symbols to the right of the scanned square, so the v, x and w markers don't play a role:"

`əə; D A D DuCuRuDyAyAy; D A A D D C C R D A :: : D A D ...`

- PE: "Everything is now marked. The operation and final m-configuration of the instruction jis marked with u and y, and portions of the complete configuration are marked with v, x, and w. The Universal Machine needs to print a 0 or 1 if the instruction is printing a 0 or 1 except in those cases when a machine reprints a 0 and 1 because it's just scanned a 0 or 1. The Universal Mahchine should print a 0 or 1 only if the scanned square is blank. That's the job of `sh` (which may stand for `show`).

p159

TU:

```
sh                         f (sh1, inst, u)

sh1           L, L, L      sh2

sh2   D       R, R, R, R   sh3
      not D                inst


sh3   C       R, R         sh4
      not C                inst


sh4   C       R, R         sh5
      not C                pe2 (inst, 0, :)


sh5   C                    inst
      not C                pe2 (inst, 1, :)

// sh. The instructions (marked u) are examined. If it is found that they involve "Print 0" or "Print 1", then 0: or 1: is printed at the end.
```

- PE: "First, sh locates the leftmost u marker, and sh1 moves the head left three places to be positioned over the last symbol representing the scanned square. That symbol will be a D if the scanned square is a blank. If it's not D, then the rest of these m-configurations are skipped by heading to inst. If the scanned character is a blank, then sh2 goes to sh3 (not sh2 as the table indicates) and then sh3, sh4 and sh5 check if the printed instruction is DC (to print 0) or DCC (print 1). If so, then pe2 prints that figure and a colon at the end of the tape. The example tape now looks like this:"

`əə; D A D DuCuRuDyAyAy; D A A D D C C R D A :: : D A D : 0 : ...`

- PE: "The sh section of the table is obviously simplified by the use of binary numbers rather than decimal. Decimal numbers would require eight more m-configurations (sh6 through sh13) to print digits 2 through 9. Whether a 0 or 1 ,or neither, is printed, the Universal Machine goes to inst (which may stand for *instruction* but perhaps *instigate* is more descriptive). The last remaining job is to render the next complete configuration of M. The next complete configuration includes all the symbols in the current configuration marked x, v and w because those symbols will remain unchanged. The m-configuration and the scanned square, however, will be replaced. They will be replaced with the m-configuration marked y and the symbol marked with u."

p160

- PE: "The inst table has another reference to the g function that was defined originally as q. Also, the ec5 function on the fifth line should be ce5 like the third and fourth lines."

- TU:

```
inst                   g (l (inst1), u)

inst1       α   R, E   inst1 (α)

inst1 (L)              ce5 (ov, v, y, x, u, w)

inst1 (R)              ce5 (ov, v, x, u, y, w)

inst1 (N)              ce5 (ov, v, x, y, u w)

ov                     e (anf)
```

- PE: "The function ce5 wasn't actually defined, nor was ce4. Basing them on ce3 we can easily create them:"

```
ce4 (𝕭, α, β, γ, D)                        ce (ce3 (𝕭, β, γ, D), α)
ce5 (𝕭, α, β, γ, D, E)                     ce (ce4 (𝕭, β, γ, D, E), α)
```

- PE: "The ce5 function sequentially copies symbols marked α to the end of the tape, then symbols marked β, and so forth, erasing the markers in the process. The m-configuration inst refers to g, which goes to the rightmost symbol marked u; that symbol is L, R, or N. The m-configuration inst1 scans that symbol, erases it, and then goes to inst1 (L), inst1 (R) or inst1 (N) depending on the symbol. It's clear what Turing wants to do here, but I really must protest the introduction of a new syntax at this point in the machine, particularly when it's not necessary. Let's replace the entire inst1 configuration with the following:"

```
        L   R, E   ce5 (ov, v, y, x, u, w)
inst1   R   R, E   ce5 (ov, v, x, u, y, w)
        N   R, E   ce5 (ov, v, x, y, u, w)
```

- PE: "In all three cases, the squares marked v are copied to the end of the tape first, and those marked w are copied last. The symbols marked v are all those on the left part of the complete configuration up to (and not including) the square to the left of the scanned square. That square is marked x. The symbols marked w are all those to the right of the scanned square."

p161

- PE: "The three copies in the middle of ce5 depend on whether the head is moving left, right, or not at all. The order is:
Left:  Next m-configuration / Symbol left of head  / Printed symbol
Right: Symbol left of head  / Printed symbol       / Next m-configuration
None:  Symbol left of head  / Next m-configuration / Printed symbol

For example, if the head is moving left, then the next m-configuration is inserted before the square to the left of the previous head position. If the head is moving right, the next m-configuration is to the right of the printed symbol. Each of the ce5 functions goes to ov (which probably stands for *over*). The e function erases all E-squares, and goes to anf for the next move. Our tape now looks like this:"

`əə; D A D D C R D A A ; D A A D D C C R D A :: : D A D : 0 : D C D A A ...`

- PE: "The second compelte configuration contains the symbols DC (meaning 0) followed by DAA, which indicates the new m-configuration q2."

- PE: "The Universal Machine as Turing has defined it has a few limitations. It cannot emulate just any general Turing Machine. It won't work right with any machine that moves its head anywhere left of its initial position because it has no way of inserting blanks to the left of the complete configurations. (Indeed, the process of inserting blanks to the *right* is something that Turing omitted in the con function.) The Universal Machine also works correctly only with machines that replace blanks with 0s or 1s and do so in a uniform left-to-right manner. The Universal Machine can handle machines that perform otherwise, but it won't print the correct sequence of 0s and 1s. Despite these limitations, and the little misprints and bugs, Turing has done something quite extraordinary. He has demonstrated the generality of computation by showing that a single universal machine can be suitably programmed to carry out the operation of any computing machine."

This assertion would require a proof that any possible machine that will compute the same sequence can be written according to the limitations imposed by U.

The complete table for U:

```
ce4 (𝕭, α, β, γ, D)                                                  ce (ce3 (𝕭, β, γ, D), α)
ce5 (𝕭, α, β, γ, D, E)                                               ce (ce4 (𝕭, β, γ, D, E), α)

e  (anf)                 ə            R                              e1 (anf)
                         not ə        L                              e  (anf)

e1 (anf)                 any          R,E,R                          e1 (anf)
                         none                                        anf

con  (𝕮, α)              Not A        R, R                           con  (𝕮, α)
                         A            L, Pα, R                       con1 (𝕮, α)

con1 (𝕮, α)              A            R, Pα, R                       con1 (𝕮, α)
                         D            R, Pα, R                       con2 (𝕮, α)

con2 (𝕮, α)              C            R, Pα, R                       con2 (𝕮, α)
                         Not C        R, R                           𝕮

b                                                                    f (b1, b1, ::)
b1                                    R, R, P:, R, R, PD, R, R, PA   anf

anf                                                                  g (anf1, :)
anf1                                                                 con (kom, y)

                         ;            R, Pz, L                       con (lrm, x)
kom                      z            L, L                           kom
                         not z nor ;  L                              kom

kmp                                                                  cpe (e (e (anf, x), y), sim, x, y)

sim                                                                  f' (sim1, sim1, z)
sim1                                                                 con (sim2, )
sim2                     A                                           sim3
                         not A        R, Pu, R, R, R                 sim2
sim3                     not A        L, Py                          e (mk, z)
                         A            L, Py, R, R, R                 sim3

mk                                                                   g (mk1, :)

mk1                      not A        R, R                           mk1
                         A            L, L, L, L                     mk2

                         C            R, Px, L, L, L                 mk2
mk2                      :                                           mk4
                         D            R, Px, L, L, L                 mk3

mk3                      not :        R, Pv, L, L, L                 mk3
                         :                                           mk4

mk4                                                                  con (l (l (mk5)), )

mk5                      any          R, Pw, R                       mk5
                         none         P:                             sh

sh                                                                   f (sh1, inst, u)

sh1                                   L, L, L                        sh2

sh2                      D            R, R, R, R                     sh3
                         not D                                       inst


sh3                      C            R, R                           sh4
                         not C                                       inst


sh4                      C            R, R                           sh5
                         not C                                       pe2 (inst, 0, :)


sh5                      C                                           inst
                         not C                                       pe2 (inst, 1, :)

inst                                                                 g (l (inst1), u)

                         L            R, E                           ce5 (ov, v, y, x, u, w)
inst1                    R            R, E                           ce5 (ov, v, x, u, y, w)
                         N            R, E                           ce5 (ov, v, x, y, u, w)

ov                                                                   e (anf)
```


Petzold's example in sequence:

```
        əə; D A D D C R D A A ; D A A D D C C R D A ::
                      _
        əə; D A D D C R D A A ; D A A D D C C R D A ::
                                        _
con:    əə; D A D D C R D A A ; DαAαAαDαD C C R D A ::

begin:  əə; D A D D C R D A A ; D A A D D C C R D A :: : D A...

anf:    əə; D A D D C R D A A ; D A A D D C C R D A :: : DyAyDy...

kom:    əə; D A D D C R D A A ;zDxAxAxDxD C C R D A :: : DyAyDy...

kmp:    əə;zDxAxDxD C R D A A ;zD A A D D C C R D A :: : DyAyDy...
                    _
sim:    əə;zD A D D C R D A A ; D A A D D C C R D A :: : D A D ...

        əə;zD A D DuCuRuDyAyAy; D A A D D C C R D A :: : D A D ...

mk:     əə; D A D DuCuRuDyAyAy; D A A D D C C R D A :: : D A D ...

sh:     əə; D A D DuCuRuDyAyAy; D A A D D C C R D A :: : D A D : 0 : ...

inst:   əə; D A D D C R D A A ; D A A D D C C R D A :: : D A D : 0 : D C D A A ...
```

### Reconstruction of the UTM & review from the beginning

**Review of terms:**
   - *m-configuration*: state of mind.
   - *machine*: set of m-configurations.
   - *configuration*: current m-configuration + scanned symbol.
   - *automatic machines*: those that rely on the configuration exclusively to guide their next action, without external human choice. All the machines in this proof are automatic.
   - *complete configuration*: current m-configuration + scanned symbol + contents of the entire tape.
   - *symbols of the first kind*: 0s and 1s.
   - *symbols of the second kind*: symbols other than 0s and 1s.
   - *circular machines*: those that get stuck and don't continue printing 0s and 1s. These are the bad ones.
   - *circle-free machines*: those that never get stuck and continue printing 0s and 1s. These are the good ones.
   - *computable sequence*: a sequence that can be computed by a circle-free machine.
   - *m-configuration structure*: for each possible scanned symbol, a number of operations (consisting of a single printing operation (blank is also a symbol) and moving one to the left or one to the right) and a final m-configuration (which also can be the current m-configuration).
   - *tape*: a medium divided in squares, which has a first square and extends infinitely to the right as needed. Each square can contain one character at a time, including the blank character.
   - *starting m-configuration*: the current m-configuration at the beginning of the operation of the machine. For each of the machine, Turing always names it *b* (for *begin*).
   - *numeric squares or F-squares*: alternated squares on odd indexes (1, 3, 5), including the very first square. Whatever is written on these squares will not be deleted by a machine. Contain the result outputted by a machine.
   - *intermediate squares or non-numeric squares or E-squares*: alternated squares on even indexes (2, 4, 6). Their contents can be overwritten. Serves as a "scratchpad" area.
   - *marking*: the character on the E-square to the right of a F-square is said to *mark* said F-square. Marks are to the right of what they're marking.
   - *Turing convention machine*: A machine which only uses half of an infinite tape (in other words, only writes to the right, not to the left, of a given (first) square); and that doesn't overwrite the contents of F-squares and that writes its numeric output on F-squares.
   - *any character*: meant to be a catch-all for all the characters not specified for a certain m-configuration. The required conversion process from this to an explicit list of all the other possible cases, I'll name *type 1 expansion*. This also should be done for those configurations of the type `not x`, where `x` is a symbol.
   - *relaxed m-configuration format*: allows multiple print statements and movements in arbitrary order. The required conversion process from this relaxed format to the original/strict, I'll name *type 2 expansion*.
   - *skeleton tables/m-functions*: a shorthand for creating m-configurations from generic elements. They use uppercase/capital German letters to represent m-configuration variables, and lowercase/small Greek letters to represent symbol variables.
   - *complete tables*: the tables generated by expanding the skeleton tables/m-functions into fully specified m-configurations without variables. This process, I'll name *type 3 expansion*.

Because the Universal Turing machine requires the executed/interpreted machine to be encoded, and that encoding relies on the machine being written in strict form, we need to find an algorithm to convert the three machines presented in the paper (zeroes & ones, increasing sequences of 1s, and the universal machine itself with all its helper functions) into strict form so that then they can be encoded and executed/interpreted by the universal machine.

Let's recap the types of expansions we need to make:
- Type 1: for each combination of symbol & operations, any symbol that is not a proper symbol (that is, either `any` or `not x`), should be expanded to all the possible symbols within the same m-configuration..
- Type 2: for each combination of symbol & operations, any operation set that doesn't consist of a print and a move (because there's either less or more move or printing operations) should be expanded into separate m-configurations.
- Type 3: for each skeleton table/m-function, substitute by each of its distinct executions (as per the unique combination of arguments it will receive along the course of the entire computation) so that it is expanded into a set of m-configurations.

If this process were to be systematized/automated (and those two operations should be the same one to the extent that all the systematized operations can be done by a machine), it would make sense to do it in this order:

- Type 3 expansion first, to get a list of m-configurations.
- Type 1 expansion, which will likely create more branches on existing m-configurations.
- Type 2 expansion afterwards, which will likely create further m-configurations.

Type 1 expansion is required before type 2 because if there's the need to print the character that's already there, we need to define exactly which one it is, so we cannot allow an `any` or `not X` symbol placeholder, but an actual symbol.

**Requirements for each expansion type:**

- Type 3 expansion requires deriving somehow a list of all combinations of arguments passed to each m-function.
- Type 2 expansion requires us to know what character should be printed when no character should be printed on the abbreviated form.
- Type 1 expansion only requires us to know the entire list of symbols that the machine will produce.

How to systematically perform type 2 expansion and perhaps type 1 expansion? Both seem to ask of us the same thing: for all the times where this m-configuration is called, what will the scanned symbol be? To answer this exactly, we would need to reproduce the machine or at least come up with a proof that narrows down the possibilities of what characters a given m-configuration will see. Another approach which would create perhaps unnecessary branches, but would still be correct, is to create as many branches as there are symbols, both for type 2 and type 1 expansion. In the case where no symbol is printed, then the symbol to be reprinted is that which has been scanned.

So, if it is possible to perform a brute force expansion of type 1 & 2, as long as we know all the symbols that will be printed, we only have left the question of type 3 expansion. Can this be done in brute force? At the very list, we'd need to track which functions call each other and create a graph of dependencies. Perhaps by creating this graph, we can then create an exhaustive, yet finite, list of replacements, without having to make a reduction proof of how exactly will the machine behave.

This analysis of the machine is perhaps related to computability itself, because in essence it consists in proving that a machine will behave on a certain way without going through all of the execution steps (which are infinite). In other words, it is the finding of repeatable patterns in an infinite sequence.

#### Putting machines in strict configurations

Note: in all these expansions, we will assume that all three machines are correct Turing convention machines.

##### Zeroes and ones

The *zeroes and ones* machine only requires us to add a print statement to m-configurations `c` and `f` (type 2 expansion). The symbol column only has symbols (instead of a negation or a catch-all); and 3) there's no skeleton tables/m-functions.

```
configuration         behaviour
mconf   symbol   operations   final mconf
b        none       P0,    R         c
c        none       Pnone, R         k
k        none       P1,    R         f
f        none       Pnone, R         b
```

##### Incrementing sequences of ones

The *incrementing sequences of ones* machine is given as follows:

```
configuration                        behaviour
mconf   symbol              operations              final mconf

b        none    Pə, R, Pə, R, P0, R, R, P0, L, L        o

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

Let's list all the characters that this machine prints: ` 01əx`, that is: blank (none), zero, one, schwa and `x`. The blank is printed when `E` is specified.

There's no need to perform type 3 expansion since there are no m-functions in this machine.

Type 2 expansion of `b`:

```
configuration                        behaviour
mconf   symbol              operations              final mconf

b        none               Pə,    R                     b1
b1       none               Pə,    R                     b2
b2       none               P0,    R                     b3
b3       none               Pnone, R                     b4
b4       none               P0,    L                     b5
b5       none               Pnone, L                     o
```

The type 2 expansion of `b` doesn't have to exhaust all possibilities, since we know that this configuration is only called at the beginning on a blank tape - it becomes only slightly less trivial to figure out what to print when the machine backtracks, but a simple straightforward representation of what happens at the beginning is sufficient. Namely, when it backtracks the first time, we know that there's a blank on that square.

Type 2 expansion of `o`:

```
o         0      P0,    N                                q
o         1      P1,    R                                o1
o1        none   Px,    L                                o2
o1        x      Px,    L                                o2
o2        0      P0,    L                                o3
o2        1      P1,    L                                o3
o3        none   Pnone, L                                o
o3        x      Px,    L                                o
```

We need to expand `R, Px, L, L, L` to strict form:
- We start by changing the combination of `o` & `1` to printing 1 (in effect, leaving the same character in place) and then `R`. Then we call `o1`, a new m-configuration.
- `o1` will only scan E-squares, so it can either see a blank/none, a `x` or a schwa (those are the only symbols of the second kind). But because schwas are not overwritten, and also because this configuration goes right from a character that is not a schwa, the only possible scanned characters are either blank or `x`. We create two branches for each of them. In each of them, we add a no-op print (a print that prints whatever was scanned) and move `L`. We then go into `o2`, a new configuration.
- `o2` will only scan F-squares, so it could see either a `0`, a `1` or a blank. However, the last invocation of `o` could only have seen a `0` or `1`, so there's no need to set up a case for blank. So we create a branch for `0` and another one for `1`, with no-op prints and then moving to the left. We then go into `o3`, a new configuration.
- `o3` will only scan E-squares. It could scan a blank, a schwa or an `x`. But because after moving left it calls `o`, and `o` only sees `0` and `1`, it cannot be a schwa (schwas would have to be even further left). So that reduces it to either a blank or an `x`. We create a branch for each with a no-op print, move left and call `o`.

Type 1 & 2 expansion of `q`:

```
q        0       P0, R                                    q1
q        1       P1, R                                    q1
q        none    P1, L                                    p
q1       none    Pnone, R                                 p
q1       x       Px, R                                    p
```

- We create lines for each of the cases of `0` and `1` (type 1 expansion). We print whatever character is there (either 0 or 1) and move right to an E-square. We define `q1`, a new configuration, as the next one.
- The branch for `none` is left as is, since there's nothing to expand.
- `q1` has one branch for blank and one for `x` - since we're moving right from a square containing a 0 or 1, we don't consider it possible to see a schwa here. We print whatever character is already there and move to `p`.

Type 2 expansion of `p`:

```
p         x      Pnone, R                                q
p         ə      Pə,    R                                f
p         none   Pnone, L                                p1
p1        0      P0,    L                                p
p1        1      P1,    L                                p
p1        none   Pnone, L                                p
p1        ə      Pə,    L                                p
```

- We replace `E` with `Pnone` on the first line. We also add a print schwa command.
- For the case of `none`, we reprint that character and go to a new m-configuration `p1`.
- `p1` can be called on any F-square, including a schwa, since we're going left. We create four branches for it, all of them leading back to `p`.

Type 2 expansion of `f`:

```
f        0       P0,    R                                f1
f        1       P1,    R                                f1
f        none    P0,    L                                f2
f1       x       Px,    R                                f
f1       none    Pnone, R                                f
f2       x       Px,    L                                o
f2       none    Pnone, L                                o
f2       ə       Pə,    L                                o
```

- Because `f` goes right in twos until finding a blank on which it then prints `0`, it must be only called on F-squares (otherwise a `0` would be printed on an E-square!). Hence, we expand `any` into a branch for `0` and another one for `1`.
- `f1` is called on an E-square that doesn't contain a schwa (because we're going right from squares with numbers). We expand it.
- When `f` sees `none`, we need to expand the second movement; this takes place on an E-square that could have any value, so we create three branches for it.

Expanded machine:

```
configuration              behaviour
mconf   symbol    operations        final mconf

b        none    Pə,    R           b1
b1       none    Pə,    R           b2
b2       none    P0,    R           b3
b3       none    Pnone, R           b4
b4       none    P0,    L           b5
b5       none    Pnone, L           o

o         0      P0,    N           q
o         1      P1,    R           o1
o1        none   Px,    L           o2
o1        x      Px,    L           o2
o2        0      P0,    L           o3
o2        1      P1,    L           o3
o3        none   Pnone, L           o
o3        x      Px,    L           o

q         0      P0, R              q1
q         1      P1, R              q1
q         none   P1, L              p
q1        none   Pnone, R           p
q1        x      Px, R              p

p         x      Pnone, R           q
p         ə      Pə,    R           f
p         none   Pnone, L           p1
p1        0      P0,    L           p
p1        1      P1,    L           p
p1        none   Pnone, L           p
p1        ə      Pə,    L           p

f         0      P0,    R           f1
f         1      P1,    R           f1
f         none   P0,    L           f2
f1        x      Px,    R           f
f1        none   Pnone, R           f
f2        x      Px,    L           o
f2        none   Pnone, L           o
f2        ə      Pə,    L           o
```

##### Universal machine

The *universal machine* is given as follows:

```
f (𝕮, 𝕭, α)           ə        L        f1 (𝕮, 𝕭, α)
                      not ə    L        f  (𝕮, 𝕭, α)

                      α        N        𝕮
f1 (𝕮, 𝕭, α)          not α    R        f1 (𝕮, 𝕭, α)
                      none     R        f2 (𝕮, 𝕭, α)

                      α        N        𝕮
f2 (𝕮, 𝕭, α)          not α    R        f1 (𝕮, 𝕭, α)
                      none     R        𝕭

e  (𝕮, 𝕭, α)                            f (e1 (𝕮, 𝕭, α), 𝕭, α)
e1 (𝕮, 𝕭, α)                   E        𝕮

e (𝕭, α)                                e (e (𝕭, α), 𝕭, α)

pe (𝕮, β)                               f (pe1 (𝕮, β), 𝕮, ə)

pe1 (𝕮, β)            any      R,R      pe1 (𝕮, β)
                      none     Pβ       𝕮

l (𝕮)                          L        𝕮
r (𝕮)                          R        𝕮
f'  (𝕮, 𝕭, α)                           f (l (𝕮), 𝕭, α)
f'' (𝕮, 𝕭, α)                           f (r (𝕮), 𝕭, α)

c  (𝕮, 𝕭, α)                            f' (c1 (𝕮), 𝕭, α)
c1 (𝕮)                β                 pe (𝕮, β)

ce (𝕮, 𝕭, α)                            c (e (𝕮, 𝕭, α), 𝕭, α)
ce (𝕭, α)                               ce (ce (𝕭, α), 𝕭, α)
re  (𝕮, 𝕭, α, β)                        f (re1 (𝕮, 𝕭, α, β), 𝕭, α)
re1 (𝕮, 𝕭, α, β)               E, Pβ    𝕮
re (𝕭, α, β)                            re (re (𝕭, α, β), 𝕭, α, β)
cr (𝕮, 𝕭, α)                            c (re (𝕮, 𝕭, α, α), 𝕭, α)
cr (𝕭, α)                               cr (cr (𝕭, α), re (𝕭, α, α), α)

cp  (𝕮, 𝕬, 𝕰, α, β)                     f' (cp1 (𝕮, 𝕬, β), f (𝕬, 𝕰, β), α)
cp1 (𝕮, 𝕬, β)         γ                 f' (cp2 (𝕮, 𝕬, γ), 𝕬, β)
cp2 (𝕮, 𝕬, γ)         γ                 𝕮
                      not γ             𝕬

cpe (𝕮, 𝕬, 𝕮, α, β)                     cp (e (e (𝕮, 𝕮, β), 𝕮, α), 𝕬, 𝕰, α, β)
cpe (𝕬, 𝕰, α, β)                        cpe (cpe (𝕬, 𝕰, α, β), 𝕬, 𝕰, α, β)

g  (𝕮)                any      R        g  (𝕮)
                      none     R        g1 (𝕮)

g1 (𝕮)                any      R        g (𝕮)
                      none              𝕮

g  (𝕮, α)                               g (g1 (𝕮, α))

g1 (𝕮, α)             α                 𝕮
                      not α    L        g1 (𝕮, α)

pe2 (𝕮, α, β)                           pe (pe (𝕮, β), α)
ce2 (𝕭, α, β)                           ce (ce (𝕭, β), α)
ce3 (𝕭, α, β, γ)                        ce (ce2 (𝕭, β, γ), α)

e  (𝕮)                ə        R        e1 (𝕮)
                      not ə    L        e  (𝕮)

e1 (𝕮)                any      R,E,R    e1 (𝕮)
                      none              𝕮

ce4 (𝕭, α, β, γ, D)                                                  ce (ce3 (𝕭, β, γ, D), α)
ce5 (𝕭, α, β, γ, D, E)                                               ce (ce4 (𝕭, β, γ, D, E), α)

e  (anf)                 ə            R                              e1 (anf)
                         not ə        L                              e  (anf)

e1 (anf)                 any          R,E,R                          e1 (anf)
                         none                                        anf

con  (𝕮, α)              Not A        R, R                           con  (𝕮, α)
                         A            L, Pα, R                       con1 (𝕮, α)

con1 (𝕮, α)              A            R, Pα, R                       con1 (𝕮, α)
                         D            R, Pα, R                       con2 (𝕮, α)

con2 (𝕮, α)              C            R, Pα, R                       con2 (𝕮, α)
                         Not C        R, R                           𝕮

b                                                                    f (b1, b1, ::)
b1                                    R, R, P:, R, R, PD, R, R, PA   anf

anf                                                                  g (anf1, :)
anf1                                                                 con (kom, y)

                         ;            R, Pz, L                       con (lrm, x)
kom                      z            L, L                           kom
                         not z nor ;  L                              kom

kmp                                                                  cpe (e (e (anf, x), y), sim, x, y)

sim                                                                  f' (sim1, sim1, z)
sim1                                                                 con (sim2, )
sim2                     A                                           sim3
                         not A        R, Pu, R, R, R                 sim2
sim3                     not A        L, Py                          e (mk, z)
                         A            L, Py, R, R, R                 sim3

mk                                                                   g (mk1, :)

mk1                      not A        R, R                           mk1
                         A            L, L, L, L                     mk2

                         C            R, Px, L, L, L                 mk2
mk2                      :                                           mk4
                         D            R, Px, L, L, L                 mk3

mk3                      not :        R, Pv, L, L, L                 mk3
                         :                                           mk4

mk4                                                                  con (l (l (mk5)), )

mk5                      any          R, Pw, R                       mk5
                         none         P:                             sh

sh                                                                   f (sh1, inst, u)

sh1                                   L, L, L                        sh2

sh2                      D            R, R, R, R                     sh3
                         not D                                       inst


sh3                      C            R, R                           sh4
                         not C                                       inst


sh4                      C            R, R                           sh5
                         not C                                       pe2 (inst, 0, :)


sh5                      C                                           inst
                         not C                                       pe2 (inst, 1, :)

inst                                                                 g (l (inst1), u)

                         L            R, E                           ce5 (ov, v, y, x, u, w)
inst1                    R            R, E                           ce5 (ov, v, x, u, y, w)
                         N            R, E                           ce5 (ov, v, x, y, u, w)

ov                                                                   e (anf)
```




#### Encoding machines so that they can be executed by the Universal Machine

To set up the UTM to run/interpret a machine M:
   - Put two schwas.
   - For each of the configurations of M, encode them, prepend them with a semicolon, and write them on F-squares.
   - Put a double colon afterwards, on an F-square, to mark the end of the encoded M configurations.

What the UTM does when interpreting the machine: writes complete configurations of M and, sometimes, 0s or 1s; each of them is prepended by a colon.

How to encode the configuration of a machine?
   1. **Configuration number**: Each configuration has a number (the number in which it is presented; this, interestingly enough, means that while you can change the order of the configurations without altering the machine's logic, the references between configurations also have to be updated), starting with 1. Encode it by writing a `D`, followed by a number of `A`s that is equivalent to the configuration's number.
   2. **Scanned symbol number**: each case of the configuration corresponds to a symbol. This symbol needs to be mapped to a number (also interestingly enough: a particular symbol can be replaced by other, as long as the entire machine is updated to reflect this; the only symbols that cannot be substituted by others are 0 and 1, because those are the ones expected to be outputted). Encode it by writing a `D`, followed by a number of `C`s. Symbols start at 0.
   3. **Printed symbol number**: each of the symbols is overwritten (if necessary with the same symbol). This symbol is encoded using the same mapping as that of the **scanned symbol numbers from #2: `D` followed by a number of `C`s.
   4. **Direction of the movement**: `L` (move one left), `R` (move one right) or `N` (no move).
   5. **Next configuration number**: This configuration is encoded in the same way as the **configuration number** in #1: `D` followed a number of `A`s.

Symbols printed by the UTM: ` :ACD01uvwxyz`. Note that `LRN` (the movement letters) are not included, nor the semicolons that separate the machine instructions, nor the double colon for separating the instructions from the complete configurations, nor the schwas. The UTM already receives a tape where the instructions are already printed.

The UTM cannot interpret only itself, but it could well interpret itself interpreting another machine.
