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
